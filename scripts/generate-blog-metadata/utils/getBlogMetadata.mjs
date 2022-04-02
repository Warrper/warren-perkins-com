import readline from 'readline';
import fs from 'fs';
import yaml from 'js-yaml';
import constants from '../constants/constants.mjs'

export default async function getBlogMetadata(slug) {
    const blogDir = './content/blog';
    const blogFile = `${blogDir}/${slug}.md`;
    const readStream = fs.createReadStream(blogFile);

    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    let lineNum = 0;
    let metadata = '';
    for await (const line of rl) {
        if (lineNum === 0 && !line.includes('---')) {
            console.log(`❌ - ${blogFile} has no metadata`);
            break;
        }
        if (lineNum > 0) {
            if (line.includes('---')) {
                console.log(`✔️ - Read metadata from ${blogFile}`);
                break;
            } else {
                metadata += line + `\n`;
            }
        }
        lineNum++;
    }
    readStream.close();

    const parsedMetadata = yaml.load(metadata);

    return { ...parsedMetadata, slug, content: `${constants.baseUrl}/content/blog/${slug}.md`};
}
