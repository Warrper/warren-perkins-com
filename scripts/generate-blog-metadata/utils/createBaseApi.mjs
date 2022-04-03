import fs from 'fs';

export default function createBaseApi({ tags, posts }) {
    const baseApi = {
        tags,
        tagsLocation: `/api/blog/tags`,
        posts,
        postsLocation: `/api/blog/posts`
    };
    fs.writeFileSync(`./api/blog/index.json`, JSON.stringify(baseApi));
    console.log(`✔️ - Created base API`);
}
