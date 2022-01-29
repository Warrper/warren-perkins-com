import Hero from '.';
import '../../normalize.css';

export default {
    title: 'Hero',
};

export const Default = (args: any) => <Hero {...args} />;

Default.args = {};
