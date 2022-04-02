import fs from 'fs';

export default async function getBlogSlugs() {
    const blogSlugs = [];
    const blogDir = './content/blog';
    const blogFiles = fs.readdirSync(blogDir);
    
    blogFiles.forEach((file) => {
        const fileName = file.replace('.md', '');
        blogSlugs.push(fileName);
    });
    
    return blogSlugs;
}
