function generateSlug(text) {
    return text
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading/trailing spaces
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with "-"
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing "-"
}

export const getTableOfContents = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
  
    // Select all headings (h1, h2, h3, h4, h5, h6)
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
    // Initialize the TOC as a nested structure (array of objects)
    const toc = [];
  
    // Stack to maintain the nested structure of headings
    const stack = [];
  
    headings.forEach((heading) => {
      const text = heading.textContent.trim();
      const level = parseInt(heading.tagName.slice(1), 10); // h1 -> 1, h2 -> 2, etc.
      const id = heading.id || text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      heading.id = id; // Ensure the heading has an id
  
      const tocItem = { text, id, level, children: [] };
  
      // If it's a top-level heading (h1), push directly to the TOC
      if (level === 1) {
        toc.push(tocItem);
        stack.length = 0; // Reset the stack for h1
        stack.push(tocItem); // Push h1 to the stack
      } else {
        // Pop the stack until we find the correct parent level
        while (stack.length && stack[stack.length - 1].level >= level) {
          stack.pop();
        }
  
        // Add this heading as a child of the parent heading
        if(stack.length){
            stack[stack.length - 1].children.push(tocItem);
        }
  
        // Push this heading onto the stack for future children
        stack.push(tocItem);
      }
    });
  
    return toc;
}

function convertMarkdownToHtml(markdown) {
    if (!markdown) { return markdown }
    markdown = markdown.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const currentPageURL = `${window.location.origin}#${window.location.href.split('#')[1]}`;
    
    // Convert markdown syntax to HTML
    markdown = markdown.replace(/^#\s(.*)$/gm, function (match, headingText) {
        const headingSlug = generateSlug(headingText);
        const fullURL = `${currentPageURL}#${headingSlug}`;

        return '<h1 id="' + headingSlug + '"><a href="'+ fullURL + '" class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a>' + headingText + '</h1>'
    });
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
    markdown = markdown.replace(/```(\[([a-zA-Z0-9]+)\])?\n([\s\S]*?)```/g, (match, fullMatch, lang, code) => {
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

    markdown = markdown.replace(/(^\s*&gt;.*(\n|$))+/gm, function (match) {
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