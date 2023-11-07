import { promises } from "fs";
import path from "path";

export const fetchFileData = async () => {
    
    const filePath = path.join(process.cwd(), 'public/data', 'demo.md')
    console.log(filePath);
    const fileContent = await promises.readFile(filePath, 'utf-8');
    console.log(fileContent)

    return fileContent;
}