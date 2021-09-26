import Button from '.';

export default {
    title: 'Button',
    component: Button,
};

export const Default = (args: any) => <Button {...args} />;
Default.args = {
    text: 'Button Text',
};
