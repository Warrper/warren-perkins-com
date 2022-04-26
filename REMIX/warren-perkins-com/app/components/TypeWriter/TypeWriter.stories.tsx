import TypeWriter from '.';
import './index.css';

export default {
    title: 'TypeWriter',
};

export const Default = (args: any) => <TypeWriter {...args} />;

Default.args = {
    text: "Hi, I'm",
    typeSpeed: 1000,
};
