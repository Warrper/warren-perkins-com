import fs from 'fs';

export default function createTagsApi(postsMetadata) {
    try {
        fs.rmSync(`./api/blog/tags`, { recursive: true })
    } catch {}
    fs.mkdirSync(`./api/blog/tags`, { recursive: true });

    const tags = {};

    postsMetadata.forEach(post => {
        post.tags.forEach(tag => {
            if (tags[tag]) {
                tags[tag].push(post.slug);
            } else {
                tags[tag] = [post.slug];
            }
        })
    });

    const tagNames = Object.keys(tags);

    tagNames.forEach(tag => {
        fs.writeFileSync(`./api/blog/tags/${tag}.json`, JSON.stringify(tags[tag]));
    });

    console.log(`✔️ - Created tags API`);
    return tagNames;
}