import React, { useEffect } from "react";

import Dialog from "_components/UI/Dialog/Dialog";
import Typography from "_components/Misc/Typography/Typography";
import Separator from "_components/Misc/Separator/Separator";
import useEscClose from "_hooks/useEscClose";

const shortCuts = [{
    title: 'Heading 1',
    value: 'h1',
    format: '# ',
    key: 'h',
}, {
    title: 'Heading 2',
    value: 'h2',
    format: '## ',
    key: 'h2',
}, {
    title: 'Heading 3',
    value: 'h3',
    format: '### ',
    key: 'h3',
}, {
    title: 'Heading 4',
    value: 'h4',
    format: '#### ',
    key: 'h4',
}, {
    title: 'Heading 5',
    value: 'h5',
    format: '##### ',
    key: 'h5',
}, {
    title: 'Heading 6',
    value: 'h6',
    format: '###### ',
    key: 'h6',
}, {
    title: 'Bold',
    value: 'bold',
    format: '**',
    key: 'b',
}, {
    title: 'Italic',
    value: 'italic',
    format: '*',
    key: 'i',
}, {
    title: 'Quote',
    value: 'quote',
    format: '> ',
    key: 'q',
}, {
    title: 'Link',
    value: 'link',
    format: '[text](url)',
    key: 'link',
}, {
    title: 'Numbered List',
    value: 'numberedList',
    format: '1. ',
    key: 'n',
}, {
    title: 'Bulleted List',
    value: 'bulletedList',
    format: '- ',
    key: 'l',
}, {
    title: 'Horizontal line',
    value: 'horizontalLine',
    format: '---',
    key: 'h',
}, {
    title: 'Task items',
    value: 'taskItems',
    format: '-[] ',
    key: 't',
}, {
    title: 'Code',
    value: 'code',
    format: '```',
    key: '`',
}
];

const KeyboardShortcuts = ({ isOpen, onClose = () => { } }) => {

    useEscClose(onClose, isOpen);

    return (
        <Dialog isShown={isOpen} hasOverlay size='xl'>
            <div className="my-4">
                <div className="flex justify-between">

                    <Typography textVariant='h3' size='lg' className='my-4 mx-4'>Keyboard Shortcuts</Typography>

                    <button onClick={onClose} type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-default bg-transparent rounded-lg text-sm flex items-center justify-center mx-4" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>

                <Separator className='my-2' />
            </div>

            <div className="h-screen-3/4 overflow-scroll">

                <div className="mx-4 my-4">

                    <Typography textVariant='h3' size='md' className='my-2 mx-4'>Editor</Typography>
                    <Separator className='my-2' />

                    <div className="flex justify-between">

                        <div className="border border-another rounded-md my-4 w-full">

                            <div className="flex justify-between border-b border-another">
                                <Typography textVariant='default' size='xs' className='my-2 mx-4'>Save the content</Typography>
                                <Typography textVariant='span' size='xs' className='my-2 mx-4'>Ctrl + Enter</Typography>
                            </div>

                            <div className="flex justify-between border-b border-another">
                                <Typography textVariant='default' size='xs' className='my-2 mx-4'>Preview Mode</Typography>
                                <Typography textVariant='span' size='xs' className='my-2 mx-4'>Ctrl + P</Typography>
                            </div>


                            <div className="flex justify-between border-b border-another">
                                <Typography textVariant='default' size='xs' className='my-2 mx-4'>Edit Mode</Typography>
                                <Typography textVariant='span' size='xs' className='my-2 mx-4'>Ctrl + E</Typography>
                            </div>

                            <div className="flex justify-between border-b border-another">
                                <Typography textVariant='default' size='xs' className='my-2 mx-4'>Preview & Edit Mode</Typography>
                                <Typography textVariant='span' size='xs' className='my-2 mx-4'>Ctrl + Shift + E</Typography>
                            </div>

                        </div>

                        <div className="border border-another rounded-md my-4 w-full">

                            {shortCuts.map((shortCut, index) => {
                                const { title, format, key } = shortCut;
                                const shortCutKey = `Ctrl + ${key.toUpperCase()}`;
                                return (
                                    <div className="flex justify-between border-b border-another">
                                        <Typography textVariant='default' size='xs' className='my-2 mx-4'>{title}</Typography>
                                        <div className="flex">
                                            <Typography textVariant='span' size='xs' className='my-2'>{format}</Typography>
                                            <Typography textVariant='span' size='xs' className='my-2 mx-4'>{shortCutKey}</Typography>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>


                </div>

            </div>
        </Dialog>
    )
}

export default KeyboardShortcuts;