import Animation from '.';

export default {
    title: 'Animation',
};

const args = {
    delay: 1000,
    animation: 'animate-slide-in-up',
};

const params = {
    backgrounds: { default: 'dark' },
};

export const SlideInUp = (args: any) => (
    <Animation {...args}>
        <p className="text-white">Slide In Up animation</p>
    </Animation>
);
SlideInUp.parameters = params;
SlideInUp.args = args;
