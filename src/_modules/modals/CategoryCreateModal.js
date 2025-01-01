import React, { useEffect, useState } from "react";

import Dialog from "_components/UI/Dialog/Dialog";
import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";
import Tags from "_components/UI/Tags/Tags";

import * as postsCategoriesService from "_services/postsCategories.service";
import MainCategorySelector from "_modules/postCategories/_components/MainCategorySelector";
import { Alerts } from "_components/UI";
import useEscClose from "_hooks/useEscClose";

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
    const { categoryModalData, onClose = () => { } } = props;
    const { status, data = {}, onClick } = categoryModalData || {};
    const { id, categoryName = '' } = data;

    const buttonStateValues = id ? buttonUpdateStateValues : buttonCreateStateValues;
    const heading = `${id ? 'Update Category' : 'Create Category'}`;
    const subHeading = `Are you sure you want to ${id ? `update the category` : 'create a new category'}?`;

    const [selectedMainCategories, setSelectedMainCategories] = useState([]);
    const [mainCategories, setMainCategories] = useState([]);

    const [newFolderName, setNewFolderName] = useState(categoryName);
    const [buttonStatus, setButtonStatus] = useState('none');

    const [errorMessage, setErrorMessage] = useState('');

    const closeModal = () => {
        onClose();
        setNewFolderName('');
    }

    useEscClose(closeModal, status);


    const handleCancelClick = () => {
        closeModal();
    }

    const validatePostCategory = (categoryName) => {
        if (!categoryName) {
            setErrorMessage('Please enter a category name');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    const handleMainCategorySelect = (selectedMainCategory) => {
        setSelectedMainCategories(selectedMainCategory);
    }

    const handleSubmitClick = async () => {
        const selectedMainCategoriesIds = selectedMainCategories.map((category) => category.id);
        const isValid = validatePostCategory(newFolderName);
        const newCategoryPayload = {
            category_name: newFolderName,
            main_category_ids: selectedMainCategoriesIds
        };
        if (!isValid) {
            return
        }
        if (onClick) {
            setButtonStatus('loading');
            try {
                await onClick(newCategoryPayload, id);
                setButtonStatus('completed');
                setTimeout(() => {
                    closeModal();
                }, 1000);
            } catch (err) {
                setButtonStatus('failure');
                setErrorMessage(err);
            } finally {
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


    useEffect(() => {
        const fetchMainCategories = async () => {
            try {
                const mainCategoriesData = await postsCategoriesService.getMainPostsCategories();
                setMainCategories(mainCategoriesData);
            } catch (err) {
                console.log(err);
            }
        }

        fetchMainCategories();
    }, [])



    if (!status) {
        return null;
    }

    return (
        <Dialog isShown hasOverlay size='lg' >
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

                    <div className="my-3">
                        <MainCategorySelector mainCategories={selectedMainCategories} onChange={handleMainCategorySelect} suggestions={mainCategories} />
                        {/* <Tags textBoxFieldProps={{ size: 'sm', placeholder: 'Choose tags (press Enter to add)' }} tags={[]} onChange={()=>{}} suggestions={mainCategories} /> */}
                    </div>

                    <Alerts type='info'>
                    <Typography textVariant='light' size='xs'>- While creating a new category, please verify the main categories/tags below.</Typography>
                    <Typography textVariant='light' size='xs'>- This ensures your category and posts can be easily found in user suggestions and properly grouped for processing.</Typography>
                    
                        </Alerts>
                   
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