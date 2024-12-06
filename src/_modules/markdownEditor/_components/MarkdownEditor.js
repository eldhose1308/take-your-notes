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
    bold: {
        title: 'Bold',
        value: 'bold',
        format: '**',
        // pattern: /\*\*([\s\S]*?)\*\*/g,
        // pattern: /^\*\*[\s\S]+\*\*$/g,
        pattern: /\*\*/g,
        // pattern: /^\*\*[\s\S]+\*\*$/g,
        hasNextLineSupport: false,
        isWrapped: true,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bold"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" /></svg>
    },
    italic: {
        title: 'Italic',
        value: 'italic',
        format: '*',
        // pattern: /^\*(?!\*)([\s\S]*?)\*$/gm,
        // pattern: /^\*(?!\*)(.*?)\*$/g,
        pattern: /\*/g,
        hasNextLineSupport: false,
        isWrapped: true,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-italic"><line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" /></svg>
    },
    numberedList: {
        title: 'Numbered List',
        value: 'numberedList',
        format: '1. ',
        pattern: /\d+\.\s/g,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-ordered"><line x1="10" x2="21" y1="6" y2="6" /><line x1="10" x2="21" y1="12" y2="12" /><line x1="10" x2="21" y1="18" y2="18" /><path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" /></svg>
    },
    bulletedList: {
        title: 'Bulleted List',
        value: 'bulletedList',
        format: '- ',
        pattern: /^\-\s(?!-).+/gm,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
    },
    horizontalLine: {
        title: 'Horizontal line',
        value: 'horizontalLine',
        format: '---',
        pattern: /^(---).*$/g,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-separator-horizontal"><line x1="3" x2="21" y1="12" y2="12" /><polyline points="8 8 12 4 16 8" /><polyline points="16 16 12 20 8 16" /></svg>
    },
    checkboxItems: {
        title: 'Checkbox items',
        value: 'checkboxItems',
        format: '-[] ',
        pattern: /-\[x\]|-\[\]/g,
        hasNextLineSupport: true,
        isWrapped: false,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-check-big"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
    },
    code: {
        title: 'Code',
        value: 'code',
        format: '```',
        pattern: /```(.*?)```/g,
        hasNextLineSupport: true,
        isWrapped: true,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    },
};

const TOOLBAR_FORMATS_HAS_NEXT_LINE_SUPPORT = Object.values(TOOLBAR_FORMATS_INFO).reduce((acc, { value, hasNextLineSupport }) => ( hasNextLineSupport ? [ ...acc, value ] : acc), []);
const TOOLBAR_FORMATS = Object.values(TOOLBAR_FORMATS_INFO);
const TOOLBAR_FORMATS_STATE = TOOLBAR_FORMATS.reduce((acc, { value }) => ({ ...acc, [value]: false }), {});

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
                if(TOOLBAR_FORMATS_HAS_NEXT_LINE_SUPPORT.includes(key)) {
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
                regex: /^-\[\]|- \[x\]/,
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

        // validate and move to parent contant
        const FORMAT_KEYS = {
            b: 'bold',       
            i: 'italic',   
            s: 'strikethrough',
            h: 'highlight', 
            q: 'quote',
            o: 'bulletedList',
            n: 'numberedList',
            c: 'checkbox',
            '`': 'code',
            // u: handleUnderline,  
        };

        if ((e.ctrlKey || e.metaKey) && FORMAT_KEYS[e.key]) {
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
            const { pattern, format, isWrapped } = TOOLBAR_FORMATS_INFO[key] || {};
            if(!isWrapped){
                const currentLine = linesBeforeCursor[linesBeforeCursor.length - 1];
                if(!currentLine.match(pattern)){
                    return { ...accumulatedTextFormats, [key]: false }
                }

                if(allText.match(pattern)){
                    return { ...accumulatedTextFormats, [key]: true }
                }
            }

            // check for formattings (bold, italic etc)
            const isSymbolUnclosed = isSymbolOpen(linesBeforeCursor, linesAfterCursor, pattern);
            if(isSymbolUnclosed){
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

        const before = markdownContent.slice(0, selectionStart);
        const after = markdownContent.slice(selectionEnd);
        const newContent = isWrapped ? `${before}${format}${selectedText}${format}${after}` : `${before}\n${format} ${selectedText} \n ${after}`;

        onChange(newContent);

        const cursorPosition = isWrapped ? selectionStart + format.length : selectionStart + format.length + 1;
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