import { useEffect } from 'react';
import { FunctionComponent } from 'preact';
import Header from '../../components/Header';
import { BlogWrapper } from './index.css';
import { siteUrl } from '../../constants';

interface BlogProps {}

const Blog: FunctionComponent<BlogProps> = () => {
    useEffect(() => {
        (async () => {
            const res = await fetch(`${siteUrl}/api/blog/index.json`).then((res) => res.json());
            console.log(res);
        })();
    }, []);

    return (
        <BlogWrapper>
            <Header currentPage="blog" />
            <h1>Blog</h1>
        </BlogWrapper>
    );
};

export default Blog;
