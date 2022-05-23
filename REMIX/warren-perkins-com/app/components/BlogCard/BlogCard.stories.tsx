import BlogCard from '.';

export default {
    title: 'BlogCard',
};

const args = {
    title: 'Blog Title',
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
