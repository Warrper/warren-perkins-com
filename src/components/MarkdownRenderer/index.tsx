import { useEffect, useState } from 'react';
import { MarkdownRendererWrapper } from './index.css';
import { FunctionalComponent } from 'preact';
import { marked } from 'marked';
import dompurify from 'dompurify';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('ts', typescript);

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
        marked.setOptions({
            langPrefix: 'hljs language-',
            highlight: function (code) {
                return hljs.highlightAuto(code, ['ts', 'js']).value;
            },
        });

        let markdownNoFrontMatter = removeFrontMatter(markdown);
        setHtml(dompurify.sanitize(marked.parse(markdownNoFrontMatter)));
    }, [markdown]);

    return <MarkdownRendererWrapper dangerouslySetInnerHTML={{ __html: html }}></MarkdownRendererWrapper>;
};

export default MarkdownRenderer;
