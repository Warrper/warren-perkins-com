import fs from 'fs';

export default function createBaseApi({ tags, pageCount }) {
    const baseApi = {
        tags,
        pageCount,
    };
    fs.writeFileSync(`./api/blog/index.json`, JSON.stringify(baseApi));
    console.log(`✔️ - Created base API`);
}
