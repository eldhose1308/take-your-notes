import React, { useEffect, useState } from "react";

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

const CategoryCreateModal = (props) => {
    const { categoryModalData, onClose=()=>{} } = props;
    const { status, data={}, onClick } = categoryModalData || {};
    const { id, categoryName='' } = data;

    const buttonStateValues = id ? buttonUpdateStateValues : buttonCreateStateValues;
    const heading = `${id ? 'Update Category' : 'Create Category'}`;
    const subHeading = `Are you sure you want to ${id ? `update the category` : 'create a new category'}?`;

    const [newFolderName, setNewFolderName] = useState(categoryName);
    const [buttonStatus, setButtonStatus] = useState('none');

    const [errorMessage, setErrorMessage] = useState('');

    const closeModal = () => {
        onClose();
        setNewFolderName('');
    }

    const handleCancelClick = () => {
        closeModal();
    }

    const validatePostCategory = (categoryName) => {
        if(!categoryName){
            setErrorMessage('Please enter a category name');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    const handleSubmitClick = async () => {
        const isValid = validatePostCategory(newFolderName);
        if(!isValid){
            return 
        }
        if(onClick){
            setButtonStatus('loading');
            try{
                await onClick(newFolderName, id);
                setButtonStatus('completed');
                setTimeout(() => {
                    closeModal();
                }, 1000);
            }catch(err){
                setButtonStatus('failure');
                setErrorMessage(err);
            }finally{
                setTimeout(() => {
                    setButtonStatus('none');
                }, 1000)
            }
            return;
        }
        closeModal();
    }

    useEffect(() => {
        setNewFolderName(categoryName)
    }, [categoryName])

    if(!status){
        return null;
    }

    return (
        <Dialog isShown hasOverlay >
                <Card variant='ghost' rounded='lg'>
                    <CardHeader>
                        <Typography size='lg'>{heading}</Typography>
                        <Typography size='xs' textVariant='default'>{subHeading}</Typography>
                        {id ? <Typography size='xs' textVariant='bold'>{categoryName}</Typography> : null}
                    </CardHeader>

                    <CardContent>
                        <TextBox
                            type='text'
                            labelName='New category name'
                            placeholder="Enter category name"
                            value={newFolderName}
                            onChange={setNewFolderName}
                            size='sm'
                            isFocused
                            validationMsg={{
                                type: 'error',
                                messages: [errorMessage]
                            }}
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

export default CategoryCreateModal;