import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";

const buttonStateValues = {
    none: 'Delete', 
    loading: 'Deleting', 
    failure: 'Failed', 
    completed: 'Deleted', 
}

const ConfirmDeleteModal = (props) => {
    const dispatch = useDispatch();
    const { id, status, onClick } = useSelector(state => state.modals.deleteConfirmBox);

    const [buttonStatus, setButtonStatus] = useState('none');

    const handleCancelClick = () => {
        dispatch({ type: 'CLOSE_MODALS' })
    }

    const handleDeleteClick = async () => {
        if(onClick){
            setButtonStatus('loading');
            try{
                await onClick(id);
                setButtonStatus('completed');
            }catch(err){
                setButtonStatus('failure');
                console.log('Delete modal', err)
            }finally{
                setTimeout(() => {
                    setButtonStatus('none');
                    dispatch({ type: 'CLOSE_MODALS' })
                }, 1000)
            }
            return;
        }
        dispatch({ type: 'CLOSE_MODALS' })
    }

    if(!status){
        return null;
    }

    return (
        <Dialog isShown hasOverlay >

                <Card variant='ghost' rounded='lg'>
                    <CardHeader>
                        <Typography size='lg'>Confirm Deletion</Typography>
                    </CardHeader>

                    <CardContent>

                        <Typography size='sm' textVariant='default'>Are you sure you want to permanently delete this item?</Typography>

                    </CardContent>

                    <CardFooter className='p-0 flex justify-between'>
                        <Button size='xs' width='none' variant='custom' onClick={handleCancelClick}>Cancel</Button>
                        <Button size='xs' width='none' variant='destructive' onClick={handleDeleteClick} buttonStatus={buttonStatus}>
                            {buttonStateValues[buttonStatus]}
                        </Button>
                    </CardFooter>
                </Card>

            </Dialog>
    )
}

export default ConfirmDeleteModal;