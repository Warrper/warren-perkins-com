import TypeWriter from '.';
import '../../normalize.css';

export default {
    title: 'TypeWriter',
};

export const Default = (args: any) => (
    <>
        <TypeWriter {...args} />
    </>
);

Default.args = {
    text: 'Warren Perkins',
    delayStart: 0,
    noBlink: false,
    noCursor: false,
    typeSpeed: 1000,
};
