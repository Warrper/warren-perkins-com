import getBlogSlugs from "./utils/getBlogSlugs.mjs";
import getBlogMetadata from "./utils/getBlogMetadata.mjs";
import createTagsApi from './utils/createTagsApi.mjs';
import createPostsApi from './utils/createPostsApi.mjs';
import fastSort from 'fast-sort';
import createBaseApi from "./utils/createBaseApi.mjs";
const { sort } = fastSort;

async function main() {
    const slugs = await getBlogSlugs();
    const promises = [];
    for (let i = 0; i < slugs.length; i++) {
        promises.push(getBlogMetadata(slugs[i]));
    }
    let blogPostsMetadata = await Promise.allSettled(promises);
    blogPostsMetadata = blogPostsMetadata.filter(p => p.value != null).map(val => val.value);

    const sorted = sort(blogPostsMetadata).desc(p => p.created);

    const tags = createTagsApi(sorted);
    const posts = createPostsApi(sorted);
    createBaseApi({
        tags,
        posts,
    });
}
main();