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

    markdown = markdown.replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>'); 
    markdown = markdown.replace(/\*([\s\S]*?)\*/g, '<em>$1</em>');
    
    // markdown = markdown.replace(/```([\s\S]*?)```/g, '<code>$1</code>'); 
    // markdown = markdown.replace(/```([\s\S]*?)```/g, `<div className='code-preview'><div className="code-header"><span>code</span><span className="code-copy">
    //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> 
    //     <span className="code-copy-text">Copy code<span>
    // </span>
    // </div>
    // <div className="code-body">
    // <code>$1</code><div><div>`); 

    // markdown = markdown.replace(/```([\s\S]*?)```/g, `<div class='code-preview'><div class="code-header"><span>Code Snippet</span><span class="code-copy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="code-copy-text">Copy code</span><span class="copied-message" style="display: none;">Copied!</span></span></div><div class="code-body"><code><pre>$1</pre></code></div> </div>`);
    markdown = markdown.replace(/```(\[([a-zA-Z0-9]+)\])?\n([\s\S]*?)```/g, (match,fullMatch, lang, code) => {
        const language = lang || 'plaintext'; 
        return `<div class='code-preview'><div class="code-header"><span>Code Snippet [${language.toLowerCase()}]</span><span class="code-copy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="code-copy-text">Copy code</span><span class="copied-message" style="display: none;">Copied!</span></span></div><div class="code-body"><code><pre>${code}</pre></code></div></div>`;
    });
    

    markdown = markdown.replace(/`(.*?)`/g, '<span class="highlighted-text">$1</span>');    

    // images
    // markdown = markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" class="md-image" />');
    markdown = markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)(\{width=(\d+)\})?(\{height=(\d+)\})?/g, (match, alt, src, widthAttr, width, heightAttr, height) => {
        let style = '';
        if (width) {
            style += `width: ${width}px; `;
        }
        if (height) {
            style += `height: ${height}px; `;
        }
        return `<img alt="${alt}" src="${src}" class="md-image" style="${style.trim()}" />`;
    });

    // links
    markdown = markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span><a class="md-link" target="_blank" href="$2">$1</a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-arrow-out-up-right"><path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><path d="M16 2h6v6"/></svg><span>');    
    

    markdown = markdown.replace(/---/g, '<hr>'); // TODO: if more than 3 is written, then also a single line should only be done
    
    markdown = markdown.replace(/-\[\]/gm, '<input type="checkbox" disabled />');
    markdown = markdown.replace(/-\[x\]/gm, '<input type="checkbox" checked disabled />');
    
    markdown = markdown.replace(/^\s*-\s+(.*)$/gm, '<li>$1</li>');
    markdown = markdown.replace(/(<li>.*<\/li>)/gm, '<ul>$1</ul>');

    markdown = markdown.replace(/<\/ul>\n<ul>/g, '');

    markdown = markdown.replace(/(^\s*&gt;.*(\n|$))+/gm, function(match) {
        const content = match.replace(/^\s*&gt;\s?/gm, '').trim();
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