import TypeWriter from '.';
import './index.css';

export default {
    title: 'TypeWriter',
};

export const Default = (args: any) => <TypeWriter {...args} />;

Default.parameters = {
    backgrounds: { default: 'dark' },
};

Default.args = {
    text: `I'm a developer.`,
    typeSpeed: 1400,
    delay: 1000,
    noBlink: false,
};
