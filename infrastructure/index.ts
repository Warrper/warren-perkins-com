import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as lambda from './lambda';
import * as apiGateway from './apiGateway';
import * as cloudfront from './cloudfront';

(async () => {
    const projectName = 'wp-com';
    const cId = await aws.getCallerIdentity({});

    const remixFn = await lambda.callbackFunction({
        name: `${projectName}-remix-lambda`,
        code: '../server/index.js',
        cId,
    });

    const apigw = await apiGateway.httpGateway({
        name: `${projectName}-api-gateway`,
        functionArn: remixFn.arn,
        cId,
    });

    await cloudfront.distribution({
        aliases: ['dev.warrenperkins.com'],
        projectName,
        apigw,
        cId,
    });
})();
