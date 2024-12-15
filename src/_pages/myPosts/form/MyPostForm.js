import React, { useEffect, useReducer, useState } from "react";

import MarkdownEditor from "_modules/markdownEditor/_components/MarkdownEditor";
import BreadCrumbs from "_components/UI/BreadCrumbs/BreadCrumbs";
import Tags from "_components/UI/Tags/Tags";
import EditableText from "_components/UI/EditableText/EditableText";
import PostVisibilitySelector from "_modules/posts/_components/PostVisibilitySelector";

import PostCategory from "_modules/posts/_components/PostCategory";
import usePostsNavigation from "_modules/posts/_hooks/usePostsNavigation";
import useMyPosts from "_modules/posts/_hooks/useMyPosts";
import { POST_ACTIONS } from "_modules/posts/_constants/postReducerActionTypes";
import { Stencil } from "_components/Loader";
import usePostsCategories from "_modules/posts/_hooks/usePostsCategories";

const tagsSuggestions = [
    { id: 'JavaScript', text: 'JavaScript' },
    { id: 'React', text: 'React' },
    { id: 'Node.js', text: 'Node.js' },
    { id: 'CSS', text: 'CSS' },
    { id: 'HTML', text: 'HTML' },
    { id: 'Python', text: 'Python' },
    { id: 'Java', text: 'Java' },
    { id: 'C++', text: 'C++' },
    { id: 'Web Development', text: 'Web Development' },
    { id: 'Programming', text: 'Programming' },
    { id: 'Frontend', text: 'Frontend' },
    { id: 'Backend', text: 'Backend' },
    { id: 'Machine Learning', text: 'Machine Learning' },
    { id: 'Artificial Intelligence', text: 'Artificial Intelligence' },
    { id: 'DevOps', text: 'DevOps' },
    { id: 'Data Science', text: 'Data Science' },
    { id: 'Mobile Development', text: 'Mobile Development' },
    { id: 'UX/UI Design', text: 'UX/UI Design' },
    { id: 'Testing', text: 'Testing' },
    { id: 'Software Engineering', text: 'Software Engineering' },
    { id: 'Git', text: 'Git' },
    { id: 'Docker', text: 'Docker' },
    { id: 'GraphQL', text: 'GraphQL' },
    { id: 'REST API', text: 'REST API' },
    { id: 'AWS', text: 'AWS' },
    { id: 'Azure', text: 'Azure' },
    { id: 'SQL', text: 'SQL' },
    { id: 'NoSQL', text: 'NoSQL' },
    { id: 'TypeScript', text: 'TypeScript' },
    { id: 'Sass', text: 'Sass' },
    { id: 'PHP', text: 'PHP' },
    { id: 'Ruby', text: 'Ruby' },
    { id: 'Elixir', text: 'Elixir' },
    { id: 'Flutter', text: 'Flutter' },
    { id: 'Kotlin', text: 'Kotlin' },
    { id: 'Swift', text: 'Swift' },
];

const MyPostForm = () => {
    const { navigateToList } = usePostsNavigation();

    const { postFormState, postFormDispatcher, savePost, fetchStatus } = useMyPosts();

    const { postTags, currentVisibilityMode, postCategory, postTitle, markdownContent } = postFormState;
    const { categoryName } = postCategory || {};

    const handleCancel = () => {
        navigateToList();
    }

    const handleSave = async () => {
        const postResponse = await savePost();
        if(postResponse){
            setTimeout(() => {
                navigateToList();
            }, 1300);
        }
    }

    const handleSelectTags = (tagsList) => {
        postFormDispatcher({ type: POST_ACTIONS.SET_TAGS, payload: tagsList });
    }

    const handleTagCreate = (tag) => {
        // call create api
        // save the new one to postTags state
    }

    const handleVisibilityModeChange = (newMode) => {
        postFormDispatcher({ type: POST_ACTIONS.SET_VISIBILITY, payload: newMode });
    }


    const handleMarkdownChange = (value) => {
        postFormDispatcher({ type: POST_ACTIONS.SET_CONTENT, payload: value });
    }

    const handlePostTitleChange = (value) => {
        postFormDispatcher({ type: POST_ACTIONS.SET_TITLE, payload: value });
    }

    const handlePostCategoryChange = (id, option) => {
        postFormDispatcher({ type: POST_ACTIONS.SET_CATEGORY, payload: option });
    }


    if(fetchStatus === 'loading'){
        return <div className="m-5">
            <Stencil />
            <Stencil />
            <Stencil />
            <Stencil />
            <Stencil />
        </div>
    }

    if(fetchStatus === 'failure'){
        return <div>Failed</div>
    }

    return (
        <React.Fragment>
            <div className="text-default m-5">
                <div className="flex my-2">
                    <span onClick={handleCancel} className="flex text-sm p-2 bg-default hover-accent hover-text-custom rounded-md cursor-pointer mx-1">
                        <span className="flex items-center pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-left"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg>
                        </span>
                        Go Back
                    </span>
                    <div className="flex text-sm p-2 bg-highlight rounded-md cursor-pointer mx-1">
                        <PostCategory category={postCategory} onChange={handlePostCategoryChange} />
                    </div>
                </div>
                <div className="flex justify-between w-full ">
                    <div className="flex flex-col w-3/4">
                        <div>
                            <BreadCrumbs items={[categoryName, postTitle]} />
                        </div>
                        <div className="flex">
                            <Tags textBoxFieldProps={{ size: 'sm', placeholder: 'Choose tags (press Enter to add)' }} tags={postTags} onChange={handleSelectTags} onCreate={handleTagCreate} suggestions={tagsSuggestions} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">
                            <PostVisibilitySelector onChange={handleVisibilityModeChange} currentMode={currentVisibilityMode} />
                        </div>
                        <div onClick={handleSave} className="bg-accent border border-accent hover-text-default hover-border-accent hover-transparent text-custom text-sm my-2 p-1 px-2 cursor-pointer rounded-md">
                            <span className="flex">
                                Save
                                <span className="text-xs bg-secondary text-secondary border border-secondary px-1 mx-1 rounded-md">⌘ + Enter</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="editing-note py-2 bg-default shadow-xl rounded-lg">
                    <EditableText className="text-default text-lg mx-2" text={postTitle} onSave={handlePostTitleChange} />
                    <div className="h-screen-1/2s overflow-scrolls">
                        <MarkdownEditor content={markdownContent} onChange={handleMarkdownChange} isPreviewEnabled />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyPostForm;