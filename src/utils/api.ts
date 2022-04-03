import { siteUrl } from "../constants";

export interface BlogPostMetadata {
    title: string;
    description: string;
    created: string;
    slug: string;
    content: string;
    tags: string[];
}

export interface BlogBaseApi {
    tags: string[];
    tagsLocation: string;
    posts: string[];
    postsLocation: string;
}

async function fetchBlogBase(): Promise<BlogBaseApi> {
    const res = await fetch(`${siteUrl}/api/blog/index.json`).then((res) => res.json());
    return res;
}

async function fetchBlogPostMetadata(blogBase: BlogBaseApi, slug: string): Promise<BlogPostMetadata> {
    const res = await fetch(`${siteUrl}${blogBase.postsLocation}/${slug}.json`).then((res) => res.json());
    return res;
}

async function fetchBlogTag(blogBase: BlogBaseApi, slug: string): Promise<string[]> {
    const res = await fetch(`${siteUrl}${blogBase.tagsLocation}/${slug}.json`).then((res) => res.json());
    return res;
}

export default {
    fetchBlogBase,
    fetchBlogPostMetadata,
    fetchBlogTag
}