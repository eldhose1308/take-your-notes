import React from "react";
import { useDispatch } from 'react-redux';
import { setIsNoteAdding } from "store/actions/notesActions";


const CreateNoteButton = () => {
    const dispatch = useDispatch();

    const handleToggleLandingPage = () => {
        dispatch(setIsNoteAdding());
    }
    
    return (
        <span onClick={handleToggleLandingPage} className='text-xs py-2 px-2 bg-transparent text-default border border-accent hover-accent hover-text-custom flex justify-center rounded-md w-full cursor-pointer'>
            <span className='mx-2'>
                Click to create new note
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
        </span>
    )
}

export default CreateNoteButton;