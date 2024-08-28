import React, { useState, useEffect, useRef } from "react";

import './MarkdownEditor.css'
import Flex from "_components/Misc/Flex/Flex";
import { Button } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";
import { convertToHTML } from "../_utils/markdownConvert";
import Toolbar from "./toolbar/Toolbar";

const MarkdownEditor = (props) => {
    const { content, isPreviewEnabled, onChange = () => { }, onKeyDown = () => { }, onSave = () => { }, onCancel = () => { }, onFocus = () => { } } = props

    const [markdownContent, setMarkdownContent] = useState(content)

    const editableDivRef = useRef(null);
    const previewRef = useRef(null);

    const markdownInHTML = convertToHTML(markdownContent)

    const handleSave = () => {
        onSave(markdownContent)
    }

    function setCursorPosition(editableDiv, position, index) {
        const textNode = editableDiv.childNodes[index];
        const validPosition = Math.min(position, textNode.length);

        const range = document.createRange();
        const selection = window.getSelection();

        selection.removeAllRanges();

        range.setStart(textNode, validPosition);
        range.collapse(true);

        selection.addRange(range);

        editableDiv.focus();
    }

    const handleEnterKey = (e) => {
        const editableDiv = editableDivRef.current;
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);


        const textBeforeCaret = editableDiv.innerText.substring(0, range.startOffset);
        const textAfterCaret = editableDiv.innerText.substring(range.endOffset);

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
            // const newText = newTextBeforeCaret;
            const newText = newTextBeforeCaret + textAfterCaret;

            setMarkdownContent(newText);
            editableDiv.innerText = newText;

            const newCaretPos = newTextBeforeCaret.length;
            const position = lines.length + 1;
            setTimeout(() => {
                setCursorPosition(editableDiv, newCaretPos, position);
            }, 0);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEnterKey(e);
        }
        onKeyDown(e)
    }

    const handleChange = () => {
        const newContent = editableDivRef.current.innerText;
        setMarkdownContent(newContent);
        onChange(newContent);
    }

    const focusToEditableDiv = () => {
        if (editableDivRef.current) {
            editableDivRef.current.focus();
            const length = editableDivRef.current.innerText.length;
            const range = document.createRange();
            const selection = window.getSelection();
            range.setStart(editableDivRef.current.childNodes[0], length);
            range.setEnd(editableDivRef.current.childNodes[0], length);
            selection.removeAllRanges();
            selection.addRange(range);

            onFocus()
        }
    }

    const handleScroll = () => {
        if (editableDivRef.current && previewRef.current) {
            const editableDiv = editableDivRef.current;
            const preview = previewRef.current;
            const ratio = editableDiv.scrollTop / (editableDiv.scrollHeight - editableDiv.clientHeight);
            preview.scrollTop = ratio * (preview.scrollHeight - preview.clientHeight);
        }
    }

    useEffect(() => {
        // focusToEditableDiv()
    }, []);

    return (
        <React.Fragment>
            <Toolbar />

            <div className="flex flex-nowrap">
                <div className={`px-3 my-3 ${isPreviewEnabled ? 'w-half' : 'w-full'} space-y-1`}>
                    <div
                        ref={editableDivRef}
                        contentEditable={true}
                        onScroll={handleScroll}
                        onInput={handleChange}
                        onKeyDown={handleKeyDown}
                        className="bg-default w-full text-default px-2 py-2 text-sm h-screen-1/2 overflow-scroll"
                        id="editor"
                    // dangerouslySetInnerHTML={{ __html: markdownContent }}
                    />
                </div>
                {isPreviewEnabled && <div ref={previewRef} className={`preview pl-4 text-default border-l border-custom my-3 overflow-scroll w-half h-screen-75`} dangerouslySetInnerHTML={{ __html: markdownInHTML }} />}
            </div>
        </React.Fragment>
    )
}

export default MarkdownEditor
