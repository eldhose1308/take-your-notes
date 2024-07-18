import React, { useState } from "react";

import MarkdownEditor from "_modules/markdownEditor/_components/MarkdownEditor";
import { Button, TextBox } from "_components/Form";

import './NotesEditor.css'
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import Tags from "_components/UI/Tags/Tags";

// add save/cancel to here rather than markdownEditor
const NotesEditor = (props) => {
    const { content, noteMetaDetails, handleNoteMetaChange, onCancel = () => { }, onSave = () => { } } = props
    const { heading, link, tags } = noteMetaDetails;

    const [isFocused, setIsFocused] = useState(false)
    const [isPreviewEnabled, setIsPreviewEnabled] = useState(false)

    const [markdownContent, setMarkdownContent] = useState(content)

    const handleNoteHeadingChange = (value) => {
        handleNoteMetaChange('heading', value)
    }

    const handleNoteLinkChange = (value) => {
        handleNoteMetaChange('link', value)
    }

    const handleTagChange = (tagValues) => {
        handleNoteMetaChange('tags', tagValues)
    }

    const handleMarkdownChange = (value) => {
        setMarkdownContent(value)
    }


    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleSave = () => {
        onSave(markdownContent)
    }

    const handlePreview = () => {
        setIsPreviewEnabled(prev => !prev)
    }

    const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault()
            onSave(markdownContent)
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault()
            handlePreview()
        }

        if (e.key === 'Escape') {
            e.preventDefault()
            onCancel()
        }
    }

    return (
        <React.Fragment>

            {/* {isFocused && <div className="overlay z-50"></div>} */}

            <div className="editing-note py-2 bg-default shadow-xl rounded-lg relative z-50">
                <Flex justifyContent='end'>
                    <Button variant='ghost' width='none' size='xs' onClick={onCancel} className='mx-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </Button>
                </Flex>
                {/* <TextBox variant='ghost' value={heading} onChange={handleNoteHeadingChange} className='text-lg font-bold' />
                <TextBox size='xs' variant='ghost' value={link} onChange={handleNoteLinkChange} /> */}

                <MarkdownEditor {...props} isPreviewEnabled={isPreviewEnabled} onFocus={handleFocus} onChange={handleMarkdownChange} onKeyDown={handleKeyDown} />
                <Separator />


                <Tags size='xs' variant='ghost' tags={tags} onChange={handleTagChange} onKeyDown={handleKeyDown} className='ml-auto' />

                <Flex justifyContent='spaceBetween' alignItems='none' className='px-3 py-1'>
                    <div className="flex mb-2">
                        <Button size='xs' variant='outline' onClick={onCancel}>
                            Cancel
                            <div className="mx-2 text-xs">
                                <span className="text-xs bg-highlight text-secondary border border-secondary px-1 rounded-md">Esc</span>
                            </div>
                        </Button>
                    </div>

                    <div className="flex">
                        <div className="flex mb-2">
                            <Button size='xs' variant='outline' className='mx-1' onClick={handlePreview}>
                                Preview
                                <div className="mx-2 text-xs">
                                    <span className="text-xs bg-highlight text-secondary border border-secondary px-1 rounded-md">⌘ + P</span>
                                </div>
                            </Button>
                        </div>
                        <div className="flex mb-2">
                            <Button size='xs' variant='outline' onClick={handleSave}>
                                Save
                                <div className="mx-2 text-xs">
                                    <span className="text-xs bg-highlight text-secondary border border-secondary px-1 rounded-md">⌘ + Enter</span>
                                </div>
                            </Button>
                        </div>
                    </div>

                </Flex>

            </div>
        </React.Fragment>
    )
}

export default NotesEditor