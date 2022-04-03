import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { BlogPostWrapper } from './index.css';
import api, { BlogPostMetadata } from '../../utils/api';

interface BlogPostProps {}

const BlogPost: FunctionComponent<BlogPostProps> = () => {
    const { slug } = useParams();
    const [postData, setPostData] = useState<BlogPostMetadata>();
    const [postContent, setPostContent] = useState<string>('');

    useEffect(() => {
        api.fetchBlogBase().then(async (blogBase) => {
            setPostData(await api.fetchBlogPostMetadata(blogBase, slug!));
        });
    }, []);

    useEffect(() => {
        if (postData) {
            api.fetchBlogPostContent(postData).then((content) => setPostContent(content));
        }
    }, [postData]);

    return (
        <BlogPostWrapper>
            <Header currentPage="blog" />
            {postContent ? <MarkdownRenderer markdown={postContent} /> : null}
        </BlogPostWrapper>
    );
};

export default BlogPost;
