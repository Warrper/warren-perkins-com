import { FunctionComponent } from 'preact';
import Header from '../../components/Header';
import { BlogWrapper } from './index.css';

interface BlogProps {}

const Blog: FunctionComponent<BlogProps> = () => {
    return (
        <BlogWrapper>
            <Header currentPage="blog" />
            <h1>Blog</h1>
        </BlogWrapper>
    );
};

export default Blog;
