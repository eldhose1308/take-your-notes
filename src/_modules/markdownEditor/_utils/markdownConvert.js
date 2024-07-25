function convertMarkdownToHtml(markdown) {
    if(!markdown) { return markdown }
    
    // markdown = markdown.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Convert markdown syntax to HTML
    markdown = markdown.replace(/^#\s(.*)$/gm, '<h1>$1</h1>'); 
    markdown = markdown.replace(/^##\s(.*)$/gm, '<h2>$1</h2>'); 
    markdown = markdown.replace(/^###\s(.*)$/gm, '<h3>$1</h3>'); 
    markdown = markdown.replace(/^####\s(.*)$/gm, '<h4>$1</h4>'); 
    markdown = markdown.replace(/^#####\s(.*)$/gm, '<h5>$1</h5>'); 
    markdown = markdown.replace(/^######\s(.*)$/gm, '<h6>$1</h6>'); 

    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // markdown = markdown.replace(/```([\s\S]*?)```/g, '<code>$1</code>'); 
    // markdown = markdown.replace(/```([\s\S]*?)```/g, `<div class='code-preview'><div class="code-header"><span>code</span><span class="code-copy">
    //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> 
    //     <span class="code-copy-text">Copy code<span>
    // </span>
    // </div>
    // <div class="code-body">
    // <code>$1</code><div><div>`); 
    markdown = markdown.replace(/```([\s\S]*?)```/g, `<div class='code-preview'><div class="code-header"><span>Code Snippet</span><span class="code-copy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="code-copy-text">Copy code</span><span class="copied-message" style="display: none;">Copied!</span></span></div><div class="code-body"><code>$1</code></div> </div>`);
    
    markdown = markdown.replace(/---/g, '<hr>'); // TODO: if more than 3 is written, then also a single line should only be done
    
    markdown = markdown.replace(/-\[\]/gm, '<input type="checkbox" disabled />');
    markdown = markdown.replace(/-\[x\]/gm, '<input type="checkbox" checked disabled />');
    
    markdown = markdown.replace(/^\s*-\s+(.*)$/gm, '<li>$1</li>');
    markdown = markdown.replace(/(<li>.*<\/li>)/gm, '<ul>$1</ul>');

    markdown = markdown.replace(/<\/ul>\n<ul>/g, '');

    markdown = markdown.replace(/(^\s*>.*(\n|$))+/gm, function(match) {
        const content = match.replace(/^\s*>\s?/gm, '').trim();
        return `<blockquote>${content.replace(/\n/g, '<br>')}</blockquote>`;
    });

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