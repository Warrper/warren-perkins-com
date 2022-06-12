import * as creatingMyWebsite from '~/routes/blog/creating-my-website.mdx';
import * as rustWasmSpeedComparison from '~/routes/blog/rust-wasm-speed-comparison.mdx';
import { json } from '@remix-run/node';

function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}

export const getPosts = () => {
    return json([postFromModule(creatingMyWebsite), postFromModule(rustWasmSpeedComparison)]);
}