import fs from 'fs';

export default function createPagesApiFromMetadata(postsMetadata) {
    try {
        fs.rmSync(`./api/blog/posts`, { recursive: true })
    } catch {}
    fs.mkdirSync(`./api/blog/posts`, { recursive: true });

    const postNames = [];
    postsMetadata.forEach(post => {
        postNames.push(post.slug);
        const postPath = `./api/blog/posts/${post.slug}.json`;
        fs.writeFileSync(postPath, JSON.stringify(post));
    })
    console.log(`✔️ - Created pages API`);

    return postNames;
}