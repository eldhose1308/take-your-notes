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

// split into markdownEditor and PreviewComponent
const MarkdownEditor = (props) => {
    const { content: markdownContent, onChange = () => { }, onKeyDown = () => { }, onSave = () => { }, onCancel = () => { }, onFocus = () => { } } = props

    // const [markdownContent_state, setMarkdownContent] = useState(markdownContent)

    const [hasImageModal, setHasImageModal] = useState(false);
    const [pastedFiles, setPastedFiles] = useState(null);

    const [editorMode, setEditorMode] = useState(TOOLBAR_MODES.EDIT_PREVIEW);

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
        const { value } = e.target
        // setMarkdownContent(value)
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

    const handleTextFormatting = (textFormatAction) => {
        // onChange(textFormatAction)
    }


    useEffect(() => {
        focusToTextArea()
    }, []);

    useEffect(() => {
        adjustTextareaHeight();
    }, [markdownContent])

    return (
        <React.Fragment>
            <Toolbar onTextFormat={handleTextFormatting} onEditorModeChange={handleEditorModeChange} onImageInsert={handleImageInsertClick} />

            {hasImageModal && (<ImageUploadModal pastedFiles={pastedFiles} onInsertFileToEditor={handleInsertFileToEditor} onClose={handleImageInsertClose} />)}
            
            <div className="flex flex-nowrap">
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