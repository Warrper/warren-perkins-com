import { useEffect, useState } from 'react';
import { MarkdownRendererWrapper } from './index.css';
import { FunctionalComponent } from 'preact';
import { marked } from 'marked';
import dompurify from 'dompurify';

interface MarkdownRendererProps {
    markdown: string;
}

const removeFrontMatter = (markdown: string) => {
    let split = markdown.split('---').splice(2);
    return split.join('---');
};

const MarkdownRenderer: FunctionalComponent<MarkdownRendererProps> = ({ markdown }) => {
    const [html, setHtml] = useState('');

    useEffect(() => {
        let markdownNoFrontMatter = removeFrontMatter(markdown);
        setHtml(dompurify.sanitize(marked.parse(markdownNoFrontMatter)));
    }, [markdown]);

    return <MarkdownRendererWrapper dangerouslySetInnerHTML={{ __html: html }}></MarkdownRendererWrapper>;
};

export default MarkdownRenderer;
