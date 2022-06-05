import TagCloud from '.';

export default {
    title: 'TagCloud',
};

const args = {
    items: [
        { text: 'React' },
        { text: 'Remix' },
        { text: 'NodeJS' },
        { text: 'Express' },
        { text: 'MongoDB' },
        { text: 'Typescript' },
        { text: 'AWS DynamoDB' },
        { text: 'AWS Lambda' },
        { text: 'AWS API Gateway' },
        { text: 'AWS SES' },
        { text: 'AWS CloudFront' },
        { text: 'AWS S3' },
        { text: 'AWS EKS' },
        { text: 'Pulumi' },
        { text: 'BabylonJS' },
    ],
};

const params = {
    backgrounds: { default: 'dark' },
};

export const Default = (args: any) => <TagCloud {...args} />;
Default.parameters = params;
Default.args = args;
