import React, { useState, useEffect, useRef } from "react";

import './MarkdownEditor.css'
import Flex from "_components/Misc/Flex/Flex";
import { Button } from "_components/Form";
import Separator from "_components/Misc/Separator/Separator";

const MarkdownEditor = (props) => {
    const { content, onChange=()=>{}, onKeyDown=()=>{}, onSave = () => { }, onCancel = () => { }, onFocus=() => {} } = props

    const [markdownContent, setMarkdownContent] = useState(content)

    const textareaRef = useRef(null);

    const handleSave = () => {
        onSave(markdownContent)
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

            setMarkdownContent(newText);

            const newCaretPos = newTextBeforeCaret.length;
            setTimeout(() => {
                textarea.setSelectionRange(newCaretPos, newCaretPos);
            }, 0);
        }
    }

    const handleKeyDown = (e) => {
        // if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        //     e.preventDefault()
        //     onSave(markdownContent)
        // }

        // if (e.key === 'Escape') {
        //     e.preventDefault()
        //     onCancel()
        // }

        if (e.key === 'Enter') {
            handleEnterKey(e);
        }
        onKeyDown(e)
    }

    const handleChange = (e) => {
        const { value } = e.target
        setMarkdownContent(value)
        onChange(value)
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


    useEffect(() => {
        focusToTextArea()
    }, []);

    useEffect(() => {
        adjustTextareaHeight();
    }, [markdownContent])

    console.log(markdownContent)
    return (
        <React.Fragment>

            {/* // <div className="editor-container"> */}
            {/* <div className="editor-panel px-3 my-3 space-y-1 overflow-scroll">
                <textarea ref={textareaRef} className="bg-default text-default px-2 py-2 text-sm h-screen-1/2" id="editor" onChange={handleChange} onKeyDown={handleKeyDown} value={markdownContent} />
            </div> */}
            <div className="bg-accent h-full">

            </div>
            <Separator />
            {/* <Flex justifyContent='spaceBetween' alignItems='none' className='px-3 py-1'>
                <div className="flex mb-2">
                    <Button size='xs' variant='outline' onClick={onCancel}>
                        Cancel
                        <div className="mx-2 text-xs">
                            <span className="text-xs bg-custom text-secondary border border-secondary px-1 rounded-md">Esc</span> 
                        </div>
                    </Button>
                </div>
                <div className="flex mb-2">
                    <Button size='xs' variant='outline' onClick={handleSave}>
                        Save
                        <div className="mx-2 text-xs">
                            <span className="text-xs bg-custom text-secondary border border-secondary px-1 rounded-md">⌘ + Enter</span> 
                        </div>
                    </Button>
                </div>
            </Flex> */}
        </React.Fragment>
        // </div>
    )
}

export default MarkdownEditor