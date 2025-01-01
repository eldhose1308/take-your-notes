import React, { createContext, useContext, useState } from "react";


import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import useEscClose from "_hooks/useEscClose";


const ConfirmDeleteContext = createContext();

const buttonStateValues = {
    none: 'Delete',
    loading: 'Deleting',
    failure: 'Failed',
    completed: 'Deleted',
}


const ConfirmDeleteDialogProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [resolvePromise, setResolvePromise] = useState(null);
    const [primaryResolve, setPrimaryResolve] = useState(null);

    const [buttonStatus, setButtonStatus] = useState('none');
    
    const confirmDelete = async (apiCallMethod) => {
        setIsOpen(true);
        return new Promise((resolve) => {
            setResolvePromise(() => apiCallMethod);
            setPrimaryResolve(() => resolve);
        });
    };

    const handleDeleteClick = async () => {
        setButtonStatus('loading');
        try {
            await resolvePromise();
            setButtonStatus('completed');
            primaryResolve(true);
        }catch(err){
            setButtonStatus('failure');
            console.log(err)
        }finally{
            setTimeout(() => {
                setButtonStatus('none');
                setIsOpen(false);
            }, 1000);
        }
    };

    const handleCancelClick = () => {
        setPrimaryResolve(false);
        setIsOpen(false);
    };

    useEscClose(handleCancelClick, isOpen);

    return (
        <ConfirmDeleteContext.Provider value={{ confirmDelete }}>
            {children}
            {isOpen && (
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
            )}
        </ConfirmDeleteContext.Provider>
    )
}

export default ConfirmDeleteDialogProvider;
export const useConfirmDeleteDialog = () => useContext(ConfirmDeleteContext);