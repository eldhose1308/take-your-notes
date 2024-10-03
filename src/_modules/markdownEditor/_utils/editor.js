export const formatFileToMarkdown = (file) => {
    const { fileName, filePath, fileType } = file;
    if(fileType.startsWith('image')){
       return `![${fileName}](${filePath}){width=100}{height=100} \n\n`;
    }
    return `[${fileName}](${filePath}) \n\n`;
} 