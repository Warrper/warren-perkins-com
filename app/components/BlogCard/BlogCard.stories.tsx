import BlogCard from '.';

export default {
    title: 'BlogCard',
};

const args = {
    title: 'This is a large title that is a total of 55 characters.',
    href: '/blog/post',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mattis odio. Quisque ultricies feugiat lectus eu egestas',
};
const params = {
    backgrounds: { default: 'dark' },
};

export const Default = (args: any) => <BlogCard {...args} />;
Default.parameters = params;
Default.args = args;
