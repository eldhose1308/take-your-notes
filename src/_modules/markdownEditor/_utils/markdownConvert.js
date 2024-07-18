function convertMarkdownToHtml(markdown) {
    if(!markdown) { return markdown }
    
    markdown = markdown.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Convert markdown syntax to HTML
    markdown = markdown.replace(/^#\s(.*)$/gm, '<h1>$1</h1>'); 
    markdown = markdown.replace(/^##\s(.*)$/gm, '<h2>$1</h2>'); 
    markdown = markdown.replace(/^###\s(.*)$/gm, '<h3>$1</h3>'); 
    markdown = markdown.replace(/^####\s(.*)$/gm, '<h4>$1</h4>'); 
    markdown = markdown.replace(/^#####\s(.*)$/gm, '<h5>$1</h5>'); 
    markdown = markdown.replace(/^######\s(.*)$/gm, '<h6>$1</h6>'); 

    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');
    markdown = markdown.replace(/```(.*?)```/g, '<code>$1</code>'); 

    markdown = markdown.replace(/---/g, '<hr>'); // TODO: if more than 3 is written, then also a single line should only be done
    
    markdown = markdown.replace(/-\[\]/gm, '<input type="checkbox" disabled />');
    markdown = markdown.replace(/-\[x\]/gm, '<input type="checkbox" checked disabled />');
    
    markdown = markdown.replace(/^\s*-\s+(.*)$/gm, '<li>$1</li>');
    markdown = markdown.replace(/(<li>.*<\/li>)/gm, '<ul>$1</ul>');

    markdown = markdown.replace(/<\/ul>\n<ul>/g, '');

    markdown = markdown.replace(/\n/g, "<br>");

    return markdown;
}

export const convertToHTML = (markdownContent) => {
    const convertedHTML = convertMarkdownToHtml(markdownContent);
    return convertedHTML
}

// editor.addEventListener('input', updateHtmlPreview)

// editor.addEventListener('keydown', function (event) {
//     if (event.key === "Enter" && !event.shiftKey) {
//         event.preventDefault();
//         const textarea = event.target;
//         const start = textarea.selectionStart;
//         const end = textarea.selectionEnd;
//         textarea.value = textarea.value.substring(0, start)
//             + "\n"
//             + textarea.value.substring(end);
//         textarea.selectionStart = textarea.selectionEnd = start + 1;
//         updateHtmlPreview();
//     }
// });