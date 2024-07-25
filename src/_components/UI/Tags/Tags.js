import React, { useState } from "react"

import TextBoxWithSuggestions from "../TextBoxWithSuggestions/TextBoxWithSuggestions";


const suggestions = [{
    id: 'One',
    text: 'One'
},
{
    id: 'Two',
    text: 'Two'
},{
    id: 'Three',
    text: 'Three'
},{
    id: 'Four',
    text: 'Four'
},{
    id: 'Five',
    text: 'Five'
},{
    id: 'Six',
    text: 'Six'
},{
    id: 'Six again',
    text: 'Six again'
},{
    id: 'Six new',
    text: 'Six new'
},
]

const Tags = (props) => {
    const { tags = [], onChange = () => { }, className, ...textBoxProps } = props;
    const extraProps = {
        placeholder: 'Type and press Enter'
    }

    const [value, setValue] = useState('')

    const removeItem = (index) => {
        const newTags = tags.slice(0, index).concat(tags.slice(index + 1))
        return newTags
    }


    const handleRemoveTag = (index) => {
        const newTags = removeItem(index)
        onChange(newTags)
    }

    const handleRemoveAll = () => {
        onChange([])
        // focus to textbox
    }

    const handleKeyDown = (value, e) => {
        if (e.key === 'Enter') {
            if (!value) { return }
            setValue('')
            onChange([...tags, value])
        }

        if (e.key === 'Backspace' && value.length === 0) {
            const tagsSize = tags.length
            const tagsWithoutLastOne = removeItem(tagsSize - 1)
            onChange(tagsWithoutLastOne)
        }
    }

    const handleChange = (value, e) => {
        setValue(value)
    }

    const handleSuggestionClick = (id, selectedValues) => {
        onChange(selectedValues)
        setValue('')
    }

    const handleCreate = (value, selectedValues) => {
        // alert('Create')
        onChange(selectedValues)
        setValue('')
    }

    return (
        <React.Fragment>
            <div className={`flex max-w-md justify-end ${className}`}>
                {tags.map((tagItem, index) => (
                    <div key={index} className="flex bg-custom mx-1 my-1 text-xs rounded-md">
                        <span className="mx-1 px-2 py-1">#{tagItem}</span>
                        <span className="flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom" onClick={() => handleRemoveTag(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </span>
                    </div>
                ))}
                {tags.length > 2 && (
                    <div className="flex mx-1 my-1 text-xs rounded-md">
                        <span className="flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom" onClick={handleRemoveAll}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><line x1="18" x2="12" y1="9" y2="15" /><line x1="12" x2="18" y1="9" y2="15" /></svg>
                        </span>
                    </div>
                )}
            </div>
            <div className="flex justify-end">
                <div className="min-w-md">
                    <TextBoxWithSuggestions {...extraProps} {...textBoxProps} onKeyDown={handleKeyDown} onChange={handleChange} onSuggestionClick={handleSuggestionClick} onCreate={handleCreate} value={value} selectedOptions={tags} suggestions={suggestions} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Tags