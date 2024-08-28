import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";

const buttonCreateStateValues = {
    none: 'Create', 
    loading: 'Creating', 
    failure: 'Failed', 
    completed: 'Created', 
}

const buttonUpdateStateValues = {
    none: 'Update', 
    loading: 'Updating', 
    failure: 'Failed', 
    completed: 'Updated', 
}


const FileCreateModal = () => {
    const dispatch = useDispatch();
    const { status, data={}, onClick } = useSelector(state => state.modals.createFileModal);
    const { id, folderName, fileName } = data;

    const buttonStateValues = id ? buttonUpdateStateValues : buttonCreateStateValues;
    
    const [newFileName, setNewFileName] = useState(fileName);
    const [buttonStatus, setButtonStatus] = useState('none');

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODALS' })
        setNewFileName('');
    }

    const handleCancelClick = () => {
        closeModal();
    }

    const handleSubmitClick = async () => {
        if(onClick){
            setButtonStatus('loading');
            try{
                await onClick(newFileName, id);
                setButtonStatus('completed');
            }catch(err){
                setButtonStatus('failure');
                console.log('Delete modal', err)
            }finally{
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
        setNewFileName(fileName)
    }, [fileName])


    if(!status){
        return null;
    }

    return (
        <Dialog isShown hasOverlay >
                <Card variant='ghost' rounded='lg'>
                    <CardHeader>
                        <Typography size='lg'>Confirm {id ? 'Updation' : 'Creation'}</Typography>
                        
                        <Typography size='xs' textVariant='default'>Are you sure you want to {id ? `update the file ` : 'create a new folder file'}  under the folder - <b>{folderName}</b>?</Typography>
                        {id ? <Typography size='xs' textVariant='bold'>{fileName} 'change this'</Typography> : null}

                    </CardHeader>

                    <CardContent>
                    
                        <TextBox
                            type='text'
                            labelName='New file name'
                            placeholder="Enter file name"
                            value={newFileName}
                            onChange={(value) => setNewFileName(value)}
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

export default FileCreateModal;