import React, { useState, useEffect, useRef, useMemo } from "react";

import Flex from "_components/Misc/Flex/Flex";
import { Button } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import { convertToHTML } from "../_utils/markdownConvert";
import Toolbar from "./toolbar/Toolbar";

import './MarkdownEditor.css'
import ImageUploadModal from "./imageUpload/ImageUploadModal";
import { formatFileToMarkdown } from "../_utils/editor";
import { TOOLBAR_MODES } from "../_constants/toolbar";
import { isSymbolOpen } from "../_utils/formatting";


// Add strikethrough(~~)
const TOOLBAR_FORMATS_INFO = {
    h1: {
        title: 'Heading 1',
        value: 'h1',
        format: '# ',
        key: 'h',
        pattern: /^#\s.*$/g,
        hasNextLineSupport: false,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>
    },
    h2: {
        title: 'Heading 2',
        value: 'h2',
        format: '## ',
        key: 'h2',
        pattern: /^##\s.*/g,
        hasNextLineSupport: false,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>
    },
    h3: {
        title: 'Heading 3',
        value: 'h3',
        format: '### ',
        key: 'h3',
        pattern: /^###\s.*$/g,
        hasNextLineSupport: false,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-3"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/></svg>
    },
    h4: {
        title: 'Heading 4',
        value: 'h4',
        format: '#### ',
        key: 'h4',
        pattern: /^####\s.*$/g,
        hasNextLineSupport: false,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-4"><path d="M12 18V6"/><path d="M17 10v3a1 1 0 0 0 1 1h3"/><path d="M21 10v8"/><path d="M4 12h8"/><path d="M4 18V6"/></svg>
    },
    h5: {
        title: 'Heading 5',
        value: 'h5',
        format: '##### ',
        key: 'h5',
        pattern: /^#####\s.*$/g,
        hasNextLineSupport: false,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-5"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 13v-3h4"/><path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"/></svg>
    },
    h6: {
        title: 'Heading 6',
        value: 'h6',
        format: '###### ',
        key: 'h6',
        pattern: /^######\s.*$/g,
        hasNextLineSupport: false,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-6"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><circle cx="19" cy="16" r="2"/><path d="M20 10c-2 2-3 3.5-3 6"/></svg>
    },
    bold: {
        title: 'Bold',
        value: 'bold',
        format: '**',
        key: 'b',
        pattern: /\*\*/g,
        hasNextLineSupport: false,
        isWrapped: true,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bold"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
    },
    italic: {
        title: 'Italic',
        value: 'italic',
        format: '*',
        key: 'i',
        pattern: /\*/g,
        hasNextLineSupport: false,
        isWrapped: true,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-italic"><line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" /></svg>
    },
    quote: {
        title: 'Quote',
        value: 'quote',
        format: '> ',
        key: 'q',
        pattern: /\>/g,
        hasNextLineSupport: false,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-quote"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 12a2 2 0 0 0 2-2V8H8"/><path d="M14 12a2 2 0 0 0 2-2V8h-2"/></svg>
    },
    link: {
        title: 'Link',
        value: 'link',
        format: '[text](url)',
        key: 'link',
        pattern: /\[(.*?)\]\((.*?)\)/g,
        hasNextLineSupport: false,
        isWrapped: false,
        isWholeLine: true,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    },
    numberedList: {
        title: 'Numbered List',
        value: 'numberedList',
        format: '1. ',
        key: 'n',
        pattern: /\d+\.\s/g,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-ordered"><line x1="10" x2="21" y1="6" y2="6" /><line x1="10" x2="21" y1="12" y2="12" /><line x1="10" x2="21" y1="18" y2="18" /><path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" /></svg>
    },
    bulletedList: {
        title: 'Bulleted List',
        value: 'bulletedList',
        format: '- ',
        key: 'l',
        pattern: /^\-\s(?!-).+/gm,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
    },
    horizontalLine: {
        title: 'Horizontal line',
        value: 'horizontalLine',
        format: '---',
        key: 'h',
        pattern: /^(---).*$/g,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-separator-horizontal"><line x1="3" x2="21" y1="12" y2="12" /><polyline points="8 8 12 4 16 8" /><polyline points="16 16 12 20 8 16" /></svg>
    },
    taskItems: {
        title: 'Task items',
        value: 'taskItems',
        format: '-[] ',
        key: 't',
        pattern: /-\[x\]|-\[\]/g,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-check-big"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
    },
    code: {
        title: 'Code',
        value: 'code',
        format: '```',
        key: '`',
        pattern: /```/g,
        hasNextLineSupport: true,
        isWrapped: true,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    },
};

const TOOLBAR_FORMATS_HAS_NEXT_LINE_SUPPORT = Object.values(TOOLBAR_FORMATS_INFO).reduce((acc, { value, hasNextLineSupport }) => (hasNextLineSupport ? [...acc, value] : acc), []);
const TOOLBAR_FORMATS = Object.values(TOOLBAR_FORMATS_INFO);
const TOOLBAR_FORMATS_STATE = Object.values(TOOLBAR_FORMATS_INFO).reduce((acc, { value }) => ({ ...acc, [value]: false }), {});

const FORMAT_KEYS = Object.values(TOOLBAR_FORMATS_INFO).reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});

// split into markdownEditor and PreviewComponent
const MarkdownEditor = (props) => {
    const { content: markdownContent, onChange = () => { }, onKeyDown = () => { }, onSave = () => { }, onCancel = () => { }, onFocus = () => { } } = props

    // const [markdownContent_state, setMarkdownContent] = useState(markdownContent)

    const [hasImageModal, setHasImageModal] = useState(false);
    const [pastedFiles, setPastedFiles] = useState(null);

    const [editorMode, setEditorMode] = useState(TOOLBAR_MODES.EDIT_PREVIEW);
    const [currentTextFormats, setCurrentTextFormats] = useState(TOOLBAR_FORMATS_STATE);

    const textareaRef = useRef(null);
    const previewRef = useRef(null);

    const lastCaretRef = useRef({
        selectionStart: null,
        selectionEnd: null
    });

    const markdownInHTML = convertToHTML(markdownContent)
    // console.log(markdownInHTML);


    const handlePreview = () => {
        setEditorMode(TOOLBAR_MODES.PREVIEW);
    }

    const handleEnterKey = (e) => {
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const textBeforeCaret = textarea.value.substring(0, start);
        const textAfterCaret = textarea.value.substring(end);

        const lines = textBeforeCaret.split('\n');
        const currentLine = lines[lines.length - 1];

        const activeFormattingRegex = /(\*\*|\*|__|_|~~|>)$/;

        const activeTextFormat = Object.keys(currentTextFormats).reduce((acc, format) => {
            if (currentTextFormats[format]) {
                return [...acc, format];
            }
            return acc;
        }, []);

        const skipNewLineFocus = activeTextFormat.reduce((acc, format) => {
            if (TOOLBAR_FORMATS_HAS_NEXT_LINE_SUPPORT.includes(format)) {
                return true;
            }
            return acc;
        }, false);


        if (!skipNewLineFocus && textAfterCaret.match(activeFormattingRegex)) {
            e.preventDefault();

            const newTextFormattings = Object.keys(currentTextFormats).reduce((acc, key) => {
                if (TOOLBAR_FORMATS_HAS_NEXT_LINE_SUPPORT.includes(key)) {
                    return { ...acc, [key]: currentTextFormats[key] }
                }
                return { ...acc, [key]: false }
            }, currentTextFormats);

            setCurrentTextFormats(newTextFormattings);
            const newText = textBeforeCaret + textAfterCaret + '\n';

            onChange(newText);

            const newCaretPos = newText.length;
            setTimeout(() => {
                textarea.focus();
                textarea.setSelectionRange(newCaretPos, newCaretPos);
            }, 0);
            return
        }

        const patterns = [
            {
                // regex: /^-\[\]|- \[x\]/,
                regex: /^-\[\]\s|-\[x\]\s/,
                newLine: '-[] ',
            },
            {
                regex: /^[-*]\s/,
                newLine: match => match[0],
            },
            {
                regex: /^(\d+)\.\s/,
                newLine: match => `${parseInt(match[1], 10) + 1}. `,
            },
            // Add more patterns and handling logic here as needed
        ];

        let newLineContent = null;

        for (const pattern of patterns) {
            const match = currentLine.match(pattern.regex);
            const matchedPatternText = match ? match[0] : null;
            if(matchedPatternText === currentLine){
                const newTextBeforeCaret = textBeforeCaret.substring(0, textBeforeCaret.length - matchedPatternText.length);
                const newText = newTextBeforeCaret + textAfterCaret;

                onChange(newText);

                const newCaretPos = newTextBeforeCaret.length;
                setTimeout(() => {
                    textarea.setSelectionRange(start - matchedPatternText.length, start - matchedPatternText.length);
                }, 0);
                // onChange(newText);
                // setTimeout(() => {
                //     textarea.setSelectionRange(start - matchedPatternText.length, start - matchedPatternText.length);
                // }, 0);
                break;
            }
            if (match) {
                newLineContent = typeof pattern.newLine === 'function' ? pattern.newLine(match) : pattern.newLine;
                break;
            }
        }

        if (newLineContent !== null) {
            e.preventDefault();

            const newTextBeforeCaret = textBeforeCaret + '\n' + newLineContent;
            const newText = newTextBeforeCaret + textAfterCaret;

            onChange(newText);

            const newCaretPos = newTextBeforeCaret.length;
            setTimeout(() => {
                textarea.setSelectionRange(newCaretPos, newCaretPos);
            }, 0);
        }
    }

    const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault()
            onSave()
        }


        if ((e.ctrlKey || e.metaKey) && FORMAT_KEYS[e.key]) {
            e.preventDefault();
            handleFormatting(FORMAT_KEYS[e.key]);
        }
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && FORMAT_KEYS[e.key]) {
            e.preventDefault();
            handleFormatting(FORMAT_KEYS[e.key]);
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault()
            handlePreview();
        }

        if (e.key === 'Escape') {
            e.preventDefault()
            onCancel()
        }

        if (e.key === 'Enter') {
            handleEnterKey(e);
        }
        onKeyDown(e)
    }

    const handleChange = (e) => {
        const { value, selectionStart } = e.target
        const cursorPosition = selectionStart - 1;

        const textBeforeCursor = value.substring(0, cursorPosition);
        const textAfterCursor = value.substring(cursorPosition);

        const allText = textBeforeCursor + textAfterCursor;
        const linesBeforeCursor = textBeforeCursor.split('\n');
        const linesAfterCursor = textAfterCursor.split('\n');

        const newActiveTextFormats = Object.keys(TOOLBAR_FORMATS_INFO).reduce((accumulatedTextFormats, key) => {
            const { pattern, isWrapped, isWholeLine } = TOOLBAR_FORMATS_INFO[key] || {};
            if(isWholeLine){
                const currentLine = linesBeforeCursor[linesBeforeCursor.length - 1] +
                    (linesAfterCursor.length > 0 ? linesAfterCursor[0] : '');
                if (!currentLine.match(pattern)) {
                    return { ...accumulatedTextFormats, [key]: false }
                }else{
                    return { ...accumulatedTextFormats, [key]: true }
                }
            }

            if (!isWrapped) {
                const currentLine = linesBeforeCursor[linesBeforeCursor.length - 1];
                if (!currentLine.match(pattern)) {
                    return { ...accumulatedTextFormats, [key]: false }
                }else{
                    return { ...accumulatedTextFormats, [key]: true }
                }

                // if (allText.match(pattern)) {
                //     return { ...accumulatedTextFormats, [key]: true }
                // }
            }

            // check for formattings (bold, italic etc)
            const isSymbolUnclosed = isSymbolOpen(linesBeforeCursor, linesAfterCursor, pattern);
            if (isSymbolUnclosed) {
                return { ...accumulatedTextFormats, [key]: true }
            }

            return { ...accumulatedTextFormats, [key]: false }
        }, {});

        setCurrentTextFormats(newActiveTextFormats);
        onChange(value);
    }

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            // textareaRef.current.style.height = 'auto';
            // textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const focusToTextArea = () => {
        if (textareaRef.current) {
            textareaRef.current.focus();
            const length = textareaRef.current.value.length;
            textareaRef.current.setSelectionRange(length, length);

            onFocus()
        }
    }

    const handleScroll = () => {
        if (textareaRef.current && previewRef.current) {
            const textarea = textareaRef.current;
            const preview = previewRef.current;
            const ratio = textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight);
            preview.scrollTop = ratio * (preview.scrollHeight - preview.clientHeight);
        }
    }

    const handleImageInsertClick = () => {
        const selectionStart = textareaRef.current.selectionStart;
        const selectionEnd = textareaRef.current.selectionEnd;
        lastCaretRef.current.selectionStart = selectionStart;
        lastCaretRef.current.selectionEnd = selectionEnd;
        setHasImageModal(true);
    }

    const handlePaste = (e) => {
        const { clipboardData } = e;

        if (clipboardData && clipboardData.files.length) {
            e.preventDefault();
            const files = Array.from(e.clipboardData.files);
            setPastedFiles(files);
            handleImageInsertClick();
        }
    }

    const handleImageInsertClose = () => {
        setHasImageModal(false);
        setPastedFiles([])
    }

    const handleInsertFileToEditor = (file, e) => {
        const markdownContentAfterFileInsertion = formatFileToMarkdown(file);

        const { selectionStart, selectionEnd } = lastCaretRef.current;
        const textBeforeCaret = textareaRef.current.value.substring(0, selectionStart);
        const textAfterCaret = textareaRef.current.value.substring(selectionEnd, textareaRef.current.value.length);
        onChange(textBeforeCaret + markdownContentAfterFileInsertion + textAfterCaret)

    }

    const handleEditorModeChange = (selectedMode) => {
        setEditorMode(selectedMode);
    }

    const handleFormatting = (currentFormat) => {
        if (!textareaRef.current || !currentFormat) return;

        setCurrentTextFormats((previousFormats) => ({ ...previousFormats, [currentFormat]: !previousFormats[currentFormat] }));
        const textarea = textareaRef.current;
        const { selectionStart, selectionEnd } = textarea;
        const selectedText = markdownContent.slice(selectionStart, selectionEnd);

        const { isWrapped, format } = TOOLBAR_FORMATS_INFO[currentFormat] || {};

        let cursorPosition = selectionStart;

        let before = markdownContent.slice(0, selectionStart);
        let after = markdownContent.slice(selectionEnd);

        let newContent = markdownContent;
        // if(markdownContent.slice(selectionStart - format.length - 1, selectionStart).trim() === `${format}`){
        if (isWrapped) {
            const formattedText = `${format}${selectedText}${format}`;
            if (before.endsWith(format) && after.startsWith(format)) {
                before = before.slice(0, -format.length);
                after = after.slice(format.length);
                newContent = `${before}${selectedText}${after}`;
                cursorPosition = selectionStart - format.length;
            } else {
                newContent = `${before}${formattedText}${after}`;
                cursorPosition = selectionStart + format.length;
            }
        } else {
            const formattedText = `${format} ${selectedText}`;
            newContent = `${before}\n${formattedText}\n${after}`;
            cursorPosition = selectionStart + format.length + 1;
        }

        onChange(newContent);

        // const cursorPosition = isWrapped ? selectionStart + format.length : selectionStart + format.length + 1;
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(cursorPosition, cursorPosition);
        }, 0);
    };



    useEffect(() => {
        focusToTextArea()
    }, []);

    useEffect(() => {
        adjustTextareaHeight();
    }, [markdownContent])

    return (
        <React.Fragment>
            <Toolbar textFormats={TOOLBAR_FORMATS} activeTextFormat={currentTextFormats} onTextFormat={handleFormatting} onEditorModeChange={handleEditorModeChange} onImageInsert={handleImageInsertClick} />

            {hasImageModal && (<ImageUploadModal pastedFiles={pastedFiles} onInsertFileToEditor={handleInsertFileToEditor} onClose={handleImageInsertClose} />)}

            <div className="flex flex-nowrap h-screen-1/2 overflow-scroll">
                {editorMode !== TOOLBAR_MODES.PREVIEW && (
                    <div className={`px-3 my-3 ${editorMode === TOOLBAR_MODES.EDIT_PREVIEW ? 'w-half' : 'w-full'} space-y-1`}>
                        <textarea ref={textareaRef} onPaste={handlePaste} onScroll={handleScroll} className={`bg-default w-full text-default px-2 py-2 text-sm h-screen-75`} id="editor" onChange={handleChange} onKeyDown={handleKeyDown} value={markdownContent} />
                    </div>
                )}
                {editorMode !== TOOLBAR_MODES.EDIT && <div ref={previewRef} className={`preview pl-4 text-default border-l border-custom my-3 overflow-scroll ${editorMode === TOOLBAR_MODES.EDIT_PREVIEW ? 'w-half' : 'w-full'} h-screen-75`} dangerouslySetInnerHTML={{ __html: markdownInHTML }} />}
            </div>


        </React.Fragment>

    )
}

export default MarkdownEditor