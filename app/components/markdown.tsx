import path from "path";
import { promises } from "fs";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const Markdown = async () => {
    const filePath = path.join(process.cwd(), 'public/data', 'demo.md')
    const fileContent = await promises.readFile(filePath, 'utf-8');

    // Use gray matter to parse meta data section if exists
    const matterResult = matter(fileContent);

    // Use remark to convert markdown file to html content
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();


    return (
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}>

        </div>
    )
}