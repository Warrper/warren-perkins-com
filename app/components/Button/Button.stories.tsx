import Button from '.';

export default {
    title: 'Button',
    argTypes: { onClick: { action: 'clicked' } },
};

const args = {};

const params = {
    backgrounds: { default: 'dark' },
};

export const Default = (args: any) => <Button {...args}>Read more on my blog</Button>;
Default.parameters = params;
Default.args = args;
