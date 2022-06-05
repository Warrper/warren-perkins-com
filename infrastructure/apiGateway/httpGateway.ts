import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

interface HttpGatewayConfig {
    name: string;
    functionArn: pulumi.Output<string>;
    cId: aws.GetCallerIdentityResult;
}

export const httpGateway = async (conf: HttpGatewayConfig) => {
    const apigw = new aws.apigatewayv2.Api(conf.name, {
        protocolType: 'HTTP',
    });

    const integration = new aws.apigatewayv2.Integration(`${conf.name}-integration`, {
        apiId: apigw.id,
        integrationType: 'AWS_PROXY',
        integrationUri: conf.functionArn,
        integrationMethod: 'POST',
        payloadFormatVersion: '2.0',
        passthroughBehavior: 'WHEN_NO_MATCH',
    });

    const route = new aws.apigatewayv2.Route(`${conf.name}-route`, {
        apiId: apigw.id,
        routeKey: '$default',
        target: pulumi.interpolate`integrations/${integration.id}`,
    });

    new aws.apigatewayv2.Stage(
        `${conf.name}-stage`,
        {
            apiId: apigw.id,
            name: '$default',
            routeSettings: [
                {
                    routeKey: route.routeKey,
                    throttlingBurstLimit: 1000,
                    throttlingRateLimit: 5000,
                },
            ],
            autoDeploy: true,
        },
        { dependsOn: [route] }
    );

    new aws.lambda.Permission(`${conf.name}-invoke-permission`, {
        action: 'lambda:InvokeFunction',
        function: conf.functionArn,
        principal: 'apigateway.amazonaws.com',
        sourceArn: pulumi.interpolate`arn:aws:execute-api:eu-west-2:${conf.cId.accountId}:${apigw.id}/*/$default`,
    });

    return apigw
};
