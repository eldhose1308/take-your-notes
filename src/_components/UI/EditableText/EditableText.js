import React, { useState, useEffect } from "react"

import Typography from "_components/Misc/Typography/Typography"
import { Button, TextBox } from "_components/Form"

const EditableText = (props) => {
    const { text = '', onSave = () => { } } = props

    const [value, setValue] = useState(text)
    const [isEditing, setIsEditing] = useState(false)

    const enterEditMode = () => {
        setIsEditing(true)
    }

    const exitEditMode = () => {
        setIsEditing(false)
    }

    const handleSave = () => {
        exitEditMode()
        onSave(value)
    }

    const handleTextChange = (value) => {
        setValue(value)
    }

    const handleKeyDown = (value, e) => {
        if (e.key === 'Enter') {
            handleSave()
        }
        if (e.key === 'Escape') {
            exitEditMode()
        }
    }


    return (
        <React.Fragment>
            {!isEditing ? (
                <div className="flex items-center cursor-pointer px-2 group-hover" onDoubleClick={enterEditMode}>
                    <Typography size='lg' className='mx-2'>{value}</Typography>
                    <span className="mt-1 text-default px-2 py-1 rounded-md hover-custom invisible group-hover-item" onClick={enterEditMode}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" /></svg>
                    </span>
                </div>
            ) : (
                <TextBox isFocused variant='dashed' className='text-lg w-full' value={value} onChange={handleTextChange} onKeyDown={handleKeyDown} onBlur={handleSave} />
            )}
        </React.Fragment>
    )
}

export default EditableText