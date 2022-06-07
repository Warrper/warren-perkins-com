import TypeWriter from '.';
import './index.css';
import '../../styles/global.css';

export default {
    title: 'TypeWriter',
};

const args = {
    text: `I'm a developer.`,
    typeSpeed: 1400,
    delay: 1000,
    noBlink: false,
};

const params = {
    backgrounds: { default: 'dark' },
};

export const Default = (args: any) => <TypeWriter {...args} />;
Default.parameters = params;
Default.args = args;
