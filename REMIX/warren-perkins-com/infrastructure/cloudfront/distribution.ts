import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

interface DistributionConfig {
    aliases: string[];
    projectName: string;
    apigw: aws.apigatewayv2.Api;
    cId: aws.GetCallerIdentityResult;
}

export async function distribution(conf: DistributionConfig) {
    const oid = await new aws.cloudfront.OriginAccessIdentity(`${conf.projectName}-oid`, {
        comment: `${conf.projectName}-oid`,
    });

    const bucket = new aws.s3.Bucket(
        `${conf.projectName}-s3-bucket`,
        {
            bucket: `${conf.projectName}-s3-bucket`,
            acl: 'private',
            policy: oid.id.apply((id) =>
                JSON.stringify({
                    Version: '2012-10-17',
                    Statement: [
                        {
                            Sid: 'PublicReadGetObject',
                            Effect: 'Allow',
                            Principal: {
                                AWS: `arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${id}`,
                            },
                            Action: 's3:GetObject',
                            Resource: `arn:aws:s3:::${conf.projectName}-s3-bucket/*`,
                        },
                    ],
                })
            ),
        },
        {
            dependsOn: [oid],
        }
    );

    new aws.cloudfront.Distribution(
        `${conf.projectName}-cdn`,
        {
            aliases: ['dev.warrenperkins.com'],
            defaultCacheBehavior: {
                allowedMethods: ['POST', 'GET', 'HEAD', 'PATCH', 'DELETE', 'OPTIONS', 'PUT'],
                cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
                cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
                compress: true,
                minTtl: 0,
                targetOriginId: `${conf.projectName}-api-gateway`,
                viewerProtocolPolicy: 'redirect-to-https',
            },
            orderedCacheBehaviors: [
                {
                    allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
                    cachePolicyId: '3657991d-c8a7-4f3b-8f60-632ed7fdf17f',
                    cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
                    compress: true,
                    minTtl: 0,
                    targetOriginId: `${conf.projectName}-bucket`,
                    viewerProtocolPolicy: 'redirect-to-https',
                    pathPattern: 'favicon.ico',
                },
                {
                    allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
                    cachePolicyId: '3657991d-c8a7-4f3b-8f60-632ed7fdf17f',
                    cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
                    compress: true,
                    minTtl: 0,
                    targetOriginId: `${conf.projectName}-bucket`,
                    viewerProtocolPolicy: 'redirect-to-https',
                    pathPattern: '/_static/*',
                },
            ],
            enabled: true,
            isIpv6Enabled: true,
            origins: [
                {
                    connectionAttempts: 3,
                    connectionTimeout: 10,
                    customOriginConfig: {
                        httpPort: 80,
                        httpsPort: 443,
                        originKeepaliveTimeout: 5,
                        originProtocolPolicy: 'https-only',
                        originReadTimeout: 30,
                        originSslProtocols: ['TLSv1', 'TLSv1.1', 'TLSv1.2'],
                    },
                    domainName: pulumi.interpolate`${conf.apigw.id}.execute-api.eu-west-2.amazonaws.com`,
                    originId: `${conf.projectName}-api-gateway`,
                },
                {
                    connectionAttempts: 3,
                    connectionTimeout: 10,
                    s3OriginConfig: {
                        originAccessIdentity: pulumi.interpolate`origin-access-identity/cloudfront/${oid.id}`,
                    },
                    domainName: pulumi.interpolate`${bucket.id}.s3.amazonaws.com`,
                    originId: `${conf.projectName}-bucket`,
                },
            ],
            restrictions: {
                geoRestriction: {
                    restrictionType: 'none',
                },
            },
            viewerCertificate: {
                acmCertificateArn: pulumi.interpolate`arn:aws:acm:us-east-1:${conf.cId.accountId}:certificate/c1d1624b-6d20-4347-9546-6d918912f25f`,
                minimumProtocolVersion: 'TLSv1.2_2021',
                sslSupportMethod: 'sni-only',
            },
        },
        { dependsOn: [oid, bucket, conf.apigw] }
    );
}
