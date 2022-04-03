import { useState, useEffect } from 'react';
import { FunctionComponent } from 'preact';
import Header from '../../components/Header';
import { BlogWrapper } from './index.css';
import api, { BlogPostMetadata } from '../../utils/api';
import ArticleCard from '../../components/ArticleCard';
import { FlexWrapper } from '../../components/util.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import { mq } from '../../constants';

interface BlogProps {}

const Blog: FunctionComponent<BlogProps> = () => {
    const [posts, setPosts] = useState<BlogPostMetadata[]>([]);
    const centerContent = useMediaQuery(mq('lg'));

    useEffect(() => {
        api.fetchBlogBase().then(async (blogBase) => {
            const posts = await Promise.all(blogBase.posts.map((post) => api.fetchBlogPostMetadata(blogBase, post)));
            setPosts(posts);
        });
    }, []);

    return (
        <BlogWrapper>
            <Header currentPage="blog" />
            {posts.map((post) => (
                <FlexWrapper justifyContent={`${centerContent ? 'center' : 'flex-start'}`}>
                    <ArticleCard
                        img={{
                            src: 'https://picsum.photos/400/500',
                            alt: post.title,
                        }}
                        title={post.title}
                        content={post.description}
                        button={{
                            text: 'Read more',
                            link: `/blog/${post.slug}`,
                        }}
                    />
                </FlexWrapper>
            ))}
        </BlogWrapper>
    );
};

export default Blog;
