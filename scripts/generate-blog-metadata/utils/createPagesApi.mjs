import fs from 'fs';

const postsPerPage = 10;

function chunkArray(array, chunkSize) {
  const results = [];
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  return results;
}

export default function createPagesApiFromMetadata(postsMetadata) {
    try {
        fs.rmSync(`./api/blog/pages`, { recursive: true })
    } catch {}
    fs.mkdirSync(`./api/blog/pages`, { recursive: true });

    const pages = chunkArray(postsMetadata, postsPerPage);
    pages.forEach(page => {
        const pageNum = pages.indexOf(page) + 1;
        const pagePath = `./api/blog/pages/page-${pageNum}.json`;
        fs.writeFileSync(pagePath, JSON.stringify(page));
    })
    console.log(`✔️ - Created pages API`);
    return pages;
}