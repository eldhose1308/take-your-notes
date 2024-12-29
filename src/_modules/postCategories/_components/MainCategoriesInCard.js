import React, { useState } from "react";

import * as postsCategoriesService from "_services/postsCategories.service";
import { Link } from "react-router-dom";
import Separator from "_components/Misc/Separator/Separator";
import CLIENT_ROUTES from "_routes/clientRoutes";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";
import { useConfirmDeleteDialog } from "_contexts/ConfirmDeleteDialogProvider";


const buttonStateValues = {
    none: 'Undo Delete',
    loading: 'Restoring...',
    failure: 'Failed to Restore',
    completed: 'Restored',
}

const MainCategoriesInCard = (props) => {
    const { categoryData } = props;
    const { id, categorySlug } = categoryData;

    const { deletePostCategory, restorePostCategory } = usePostsCategories();
    const { confirmDelete } = useConfirmDeleteDialog();

    const [isDeleted, setIsDeleted] = useState(false);
    const [buttonStatus, setButtonStatus] = useState('none');

    const [mainCategories, setMainCategories] = useState([]);
    const [isMainCategorisShown, setIsMainCategorisShown] = useState(false);
    const [fetchStatus, setFetchStatus] = useState('none');

    const categoryEditRoute = CLIENT_ROUTES.CATEGORY_EDIT(categorySlug);


    const handleUndoDelete = async () => {
        setButtonStatus('loading');

        try {
            await restorePostCategory(id);
            setIsDeleted(false);
            setButtonStatus('success');
        } catch {
            console.log('Failed to restore post category');
            setButtonStatus('failure');
        } finally {
            setTimeout(() => {
                setButtonStatus('none');
            }, 1000);
        }
    }

    const handleDelete = async () => {
        const isConfirmed = await confirmDelete(() => deletePostCategory(id));

        if (isConfirmed) {
            try {
                setIsDeleted(true);
                return true;
            } catch {
                return false;
            }
        }
        return false;
    }

    const renderMainCategories = async () => {
        const { categorySlug } = categoryData;
        if (!mainCategories.length && fetchStatus !== 'success') {
            setFetchStatus('loading');
            const mainCategoriesOfCategory = await postsCategoriesService.getMainPostsCategories({ category: categorySlug });
            setMainCategories(mainCategoriesOfCategory);
            setFetchStatus('success');
        }
        setIsMainCategorisShown(true);
    }

    return (
        <div>
            {!isMainCategorisShown ? <div className="flex w-full justify-center text-xs my-1 mb-2 mx-2">
                <span onClick={renderMainCategories} className="flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-another text-accent bg-another hover-default hover-border-accent hover-text-default">
                    <span className="flex">
                        {fetchStatus === 'loading' ? <svg className="lucide lucide-loader-circle mx-2 animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-down"><circle cx="12" cy="12" r="10" /><path d="m16 10-4 4-4-4" /></svg>}
                    </span>
                </span>
            </div> : <div className="flex w-full justify-center text-xs my-1 mb-2 mx-2">
                <span onClick={() => setIsMainCategorisShown(false)} className="flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-another text-accent bg-another hover-default hover-border-accent hover-text-default">
                    <span className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-up"><circle cx="12" cy="12" r="10" /><path d="m8 14 4-4 4 4" /></svg>
                    </span>
                </span>
            </div>}

            {isMainCategorisShown && <div className="flex flex-col w-full text-xs my-1 mb-2 mx-2">
                {mainCategories.length === 0 && <div>No Parent Categories</div>}
                {mainCategories.map((category) => {
                    const { mainCategoryName } = category;
                    return (
                        <span>{mainCategoryName}</span>
                    )
                })}
            </div>}


            <React.Fragment>
                <Separator variant='another' className='my-2' />
                <div className="flex text-xs">
                    <Link to={categoryEditRoute} className='cursor-pointer'>
                        <span className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer' onClick={() => { }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" /></svg>
                            <span className='pl-1'>
                                Edit
                            </span>
                        </span>
                    </Link>

                    {isDeleted ? (
                        <span onClick={buttonStatus === 'loading' ? ()=>{} : handleUndoDelete} className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-info rounded-md cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo"><path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" /></svg>
                            <span className='pl-1'>
                            {buttonStateValues[buttonStatus]}
                            </span>
                        </span>
                    ) : (<span onClick={handleDelete} className='flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                        <span className='pl-1'>
                            Delete
                        </span>
                    </span>)}
                </div>
            </React.Fragment>
        </div>
    )
}

export default MainCategoriesInCard;