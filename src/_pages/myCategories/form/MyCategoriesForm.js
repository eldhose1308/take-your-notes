import React, { useEffect, useReducer, useState } from "react";

import { Card, CardHeader, CardContent, CardFooter } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button, TextBox } from "_components/Form";
import MainCategorySelector from "_modules/postCategories/_components/MainCategorySelector";
import { Alerts } from "_components/UI";

import * as postsCategoriesService from "_services/postsCategories.service";
import { useParams } from "react-router-dom";


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

const MyCategoriesForm = (props) => {
    const { id: categorySlug } = useParams();

    const { categoryModalData, onClose = () => { } } = props;
    const { data = {}, onClick } = categoryModalData || {};
    const { categoryName = '' } = data;

    const buttonStateValues = categorySlug ? buttonUpdateStateValues : buttonCreateStateValues;
    const heading = `${categorySlug ? 'Update Category' : 'Create Category'}`;
    const subHeading = `Are you sure you want to ${categorySlug ? `update the category` : 'create a new category'}?`;

    const [selectedMainCategories, setSelectedMainCategories] = useState([]);
    const [mainCategories, setMainCategories] = useState([]);

    const [categoryId, setCategoryId] = useState();
    const [newFolderName, setNewFolderName] = useState(categoryName);
    const [buttonStatus, setButtonStatus] = useState('none');
    const [fetchStatus, setFetchStatus] = useState('none');

    const [errorMessage, setErrorMessage] = useState('');

   
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

        if (categorySlug) {
            setButtonStatus('loading');
            try {
                const postsResponse = await postsCategoriesService.updatePostCategory(newCategoryPayload, categoryId);
                // await onClick(newCategoryPayload, categorySlug);
                setButtonStatus('completed');               
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


    useEffect(() => {
        if (!categorySlug) {
            return
        }

        const fetchUsersPostItem = async () => {
            try {
                setFetchStatus('loading');
                const postCategoryData = await postsCategoriesService.getAuthPostsCategoriesBySlug(categorySlug);
                const { id: categoryId, mainCategories, categoryName } = postCategoryData || {};
               
                setCategoryId(categoryId);
                setNewFolderName(categoryName);
                setSelectedMainCategories(mainCategories);

                setFetchStatus('success');
            } catch (error) {
                setFetchStatus('failure');
            }
        }

        fetchUsersPostItem();
    }, [categorySlug])


    return (
        <React.Fragment>
            <div className="flex flex-col">

            {/* <Card variant='ghost' rounded='lg'>
                <CardHeader> */}
                <div className="flex flex-col px-3 py-2">

                    <Typography size='lg'>{heading}</Typography>
                    <Typography size='xs' textVariant='default'>{subHeading}</Typography>
                    {categorySlug ? <Typography size='xs' textVariant='bold'>{categoryName}</Typography> : null}
                </div>
                {/* </CardHeader>

                <CardContent> */}
                <div className="flex flex-col mx-3 px-3 py-2 bg-default">
                <div className="my-3">
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
                    </div>

                    <div className="my-3">
                        <MainCategorySelector mainCategories={selectedMainCategories} onChange={handleMainCategorySelect} suggestions={mainCategories} />
                        {/* <Tags textBoxFieldProps={{ size: 'sm', placeholder: 'Choose tags (press Enter to add)' }} tags={[]} onChange={()=>{}} suggestions={mainCategories} /> */}
                    </div>


                    <Alerts type='info'>
                    <Typography textVariant='light' size='xs'>- While creating a new category, please verify the main categories/tags below.</Typography>
                    <Typography textVariant='light' size='xs'>- This ensures your category and posts can be easily found in user suggestions and properly grouped for processing.</Typography>
                    
                        </Alerts>
                   
</div>

                {/* </CardContent>

                <CardFooter className='p-0 flex justify-between'> */}
                <div className="items-center px-2 py-4 flex justify-between">

                    <Button size='xs' width='none' variant='custom' onClick={()=>{}}>Cancel</Button>
                    <Button size='xs' width='none' variant='accent' onClick={handleSubmitClick} buttonStatus={buttonStatus}>
                        {buttonStateValues[buttonStatus]}
                    </Button>
                </div>
                {/* </CardFooter>
            </Card> */}
            </div>

        </React.Fragment>
    )
}

export default MyCategoriesForm;