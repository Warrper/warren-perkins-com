import { useLoaderData } from '@remix-run/react';
import BlogCard from '~/components/BlogCard';
import { getPosts } from '~/server/blog.server';

export async function loader() {
    return getPosts();
}

export default function Blog() {
    const posts = useLoaderData<any[]>();

    return (
        <div className="flex flex-wrap justify-evenly">
            {Array.isArray(posts) ? (
                posts.map((post) => (
                    <BlogCard
                        key={post.slug}
                        title={post.title}
                        description={post.description}
                        href={post.slug}
                        image={post.image ? post.image : undefined}
                    />
                ))
            ) : (
                <></>
            )}
        </div>
    );
}
