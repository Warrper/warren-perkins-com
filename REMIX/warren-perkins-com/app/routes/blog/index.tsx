import * as testPost from './test-post.mdx';

import { json } from '@remix-run/node'; // or "@remix-run/cloudflare"
import { useLoaderData } from '@remix-run/react';
import BlogCard from '~/components/BlogCard';

function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}

export async function loader() {
    return json([postFromModule(testPost)]);
}

export default function Blog() {
    const posts = useLoaderData<any[]>();
    return (
        <div className="flex flex-wrap justify-evenly">
            {posts.map((post) => (
                <BlogCard key={post.slug} title={post.title} description={post.description} href={post.slug} />
            ))}
        </div>
    );
}
