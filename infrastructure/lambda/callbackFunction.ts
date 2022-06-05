import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';
import * as path from 'path';

interface CallbackFunctionConfig {
    name: string;
    policy?: aws.iam.PolicyDocument;
    code?: string;
    memorySize?: number;
    timeout?: number;
    runtime?: string;
    environmentVariables?: { [key: string]: string };
    cId: aws.GetCallerIdentityResult;
}

export const callbackFunction = async (conf: CallbackFunctionConfig) => {
    const role = new aws.iam.Role(`${conf.name}-role`, {
        assumeRolePolicy: JSON.stringify({
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'sts:AssumeRole',
                    Principal: {
                        Service: 'lambda.amazonaws.com',
                    },
                    Effect: 'Allow',
                    Sid: '',
                },
            ],
        }),
    });

    new aws.iam.RolePolicy(
        `${conf.name}-executionPolicy`,
        {
            role: role,
            policy: JSON.stringify({
                Version: '2012-10-17',
                Statement: [
                    {
                        Effect: 'Allow',
                        Action: 'logs:CreateLogGroup',
                        Resource: `arn:aws:logs:eu-west-2:${conf.cId.accountId}:*`,
                    },
                    {
                        Effect: 'Allow',
                        Action: ['logs:CreateLogStream', 'logs:PutLogEvents'],
                        Resource: `arn:aws:logs:eu-west-2:${conf.cId.accountId}:log-group:/aws/lambda/${conf.name}:*`,
                    },
                ],
            }),
        },
        {
            parent: role,
        }
    );

    if (conf.policy) {
        new aws.iam.RolePolicy(
            `${conf.name}-policy`,
            {
                role: role,
                policy: conf.policy,
            },
            {
                parent: role,
            }
        );
    }

    new aws.cloudwatch.LogGroup(`${conf.name}-logGroup`, {
        name: `/aws/lambda/${conf.name}-function`,
    });

    return new aws.lambda.Function(`${conf.name}-function`, {
        name: `${conf.name}-function`,
        code: new pulumi.asset.AssetArchive({
            'index.js': new pulumi.asset.FileAsset(path.resolve(`${conf.code}`)),
        }),
        memorySize: conf.memorySize ? conf.memorySize : 128,
        timeout: conf.timeout ? conf.timeout : 60,
        role: role.arn,
        handler: 'index.handler',
        runtime: conf.runtime || 'nodejs14.x',
        environment: conf.environmentVariables
            ? {
                  variables: {
                      ...conf.environmentVariables,
                  },
              }
            : undefined,
    });
};
