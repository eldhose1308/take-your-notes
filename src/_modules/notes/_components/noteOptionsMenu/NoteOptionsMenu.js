import React, { useState } from "react"

import OptionsMenu from "_components/UI/OptionsMenu/OptionsMenu"
import Dialog from "_components/UI/Dialog/Dialog"
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import { Button } from "_components/Form";
import Typography from "_components/Misc/Typography/Typography";


const NoteOptionsMenu = (props) => {
    const { onEdit = () => { }, onDelete = () => { } } = props

    const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)

    const handleEdit = (e) => {
        e.stopPropagation()
        onEdit()
    }
    const handleDelete = (e) => {
        e.stopPropagation()
        setDeleteConfirmationOpen(true)
        // onDelete()
    }

    const hideDialog = (e) => {
        e.stopPropagation()
        setDeleteConfirmationOpen(false)
    }

    return (
        <>

            {isDeleteConfirmationOpen && <Dialog isShown hasOverlay >

                <Card variant='ghost' rounded='lg'>
                            <CardHeader>
                                <Typography size='lg'>Confirm Deletion</Typography>
                            </CardHeader>

                            <CardContent>

                                <Typography size='sm' textVariant='default'>Are you sure you want to permanently delete this item?</Typography>

                            </CardContent>

                            <CardFooter className='p-0 flex justify-between'>
                                <Button size='xs' width='none' variant='custom' onClick={hideDialog}>Cancel</Button>
                                <Button size='xs' width='none' variant='destructive'>Delete</Button>
                            </CardFooter>
                        </Card>

            </Dialog> }

            <OptionsMenu>
                {/* <div class="menu-content text-xs flex flex-col bg-default rounded-md border border-another px-1 py-1"> */}
                <span className='flex px-1 py-1 hover-custom hover-text-primary rounded-md' onClick={handleEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" /></svg>
                    <span className='pl-1'>
                        Edit
                    </span>
                </span>
                <span className='mt-1 px-12'></span>
                <span className='flex px-1 py-1 hover-custom hover-text-primary rounded-md' onClick={handleEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                    <span className='pl-1'>
                        Duplicate
                    </span>
                </span>
                <span className='mt-1 px-12'></span>
                <span className='flex px-1 py-1 hover-custom hover-text-destructive rounded-md' onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                    <span className='pl-1'>
                        Delete
                    </span>
                </span>
                {/* </div> */}
            </OptionsMenu>
        </>
    )
}

export default NoteOptionsMenu
