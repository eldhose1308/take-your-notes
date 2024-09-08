import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";

const buttonCreateStateValues = {
    none: 'Create', 
    loading: 'Creating', 
    completed: 'Created', 
}

const buttonUpdateStateValues = {
    none: 'Update', 
    loading: 'Updating', 
    completed: 'Updated', 
}

const FolderCreateModal = () => {
    const dispatch = useDispatch();
    const { status, data={}, onClick } = useSelector(state => state.modals.createFolderModal);
    const { id, folderName='' } = data;

    const buttonStateValues = id ? buttonUpdateStateValues : buttonCreateStateValues;
    const heading = `${id ? 'Update Folder' : 'Create Folder'}`;
    const subHeading = `Are you sure you want to ${id ? `update the folder` : 'create a new folder'}?`;

    const [newFolderName, setNewFolderName] = useState(folderName);
    const [buttonStatus, setButtonStatus] = useState('none');

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODALS' })
        setNewFolderName('');
    }

    const handleCancelClick = () => {
        closeModal();
    }

    const handleSubmitClick = async () => {
        if(onClick){
            setButtonStatus('loading');
            try{
                await onClick(newFolderName, id);
            }catch(err){
                console.log('Delete modal', err)
            }finally{
                setButtonStatus('completed');
                setTimeout(() => {
                    setButtonStatus('none');
                    closeModal();
                }, 1000)
            }
            return;
        }
        closeModal();
    }

    useEffect(() => {
        setNewFolderName(folderName)
    }, [folderName])

    if(!status){
        return null;
    }

    return (
        <Dialog isShown hasOverlay >
                <Card variant='ghost' rounded='lg'>
                    <CardHeader>
                        <Typography size='lg'>{heading}</Typography>
                        <Typography size='xs' textVariant='default'>{subHeading}</Typography>
                        {id ? <Typography size='xs' textVariant='bold'>{folderName}</Typography> : null}
                    </CardHeader>

                    <CardContent>
                        <TextBox
                            type='text'
                            labelName='New folder name'
                            placeholder="Enter folder name"
                            value={newFolderName}
                            onChange={setNewFolderName}
                            size='sm'
                            isFocused
                        />
                    </CardContent>

                    <CardFooter className='p-0 flex justify-between'>
                        <Button size='xs' width='none' variant='custom' onClick={handleCancelClick}>Cancel</Button>
                        <Button size='xs' width='none' variant='accent' onClick={handleSubmitClick} buttonStatus={buttonStatus}>
                            {buttonStateValues[buttonStatus]}
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
    )
}

export default FolderCreateModal;