import fs from 'fs';
import constants from '../constants/constants.mjs';

export default function createBaseApi({ tags, posts }) {
    const baseApi = {
        tags,
        tagsLocation: `${constants.apiUrl}/blog/tags`,
        posts,
        postsLocation: `${constants.apiUrl}/blog/posts`
    };
    fs.writeFileSync(`./api/blog/index.json`, JSON.stringify(baseApi));
    console.log(`✔️ - Created base API`);
}
