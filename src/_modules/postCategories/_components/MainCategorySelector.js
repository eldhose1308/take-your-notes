import React, { useState } from "react"

import TextBoxWithSuggestions from "_components/UI/TextBoxWithSuggestions/TextBoxWithSuggestions";

const MainCategorySelector = (props) => {
    const { mainCategories = [], suggestions=[], onChange = () => { }, onCreate = () => { }, className, ...textBoxProps } = props;
    const extraProps = {
        placeholder: 'Type and press Enter to select',
        labelName: 'Related Tags',
    }

    const [value, setValue] = useState('')

    const removeItem = (index) => {
        const newTags = mainCategories.slice(0, index).concat(mainCategories.slice(index + 1))
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
            onCreate(value)
        }

        if (e.key === 'Backspace' && value.length === 0) {
            const tagsSize = mainCategories.length
            const tagsWithoutLastOne = removeItem(tagsSize - 1)
            onChange(tagsWithoutLastOne)
        }
    }

    const handleChange = (value, e) => {
        setValue(value)
    }

    const handleSuggestionClick = (id, selectedValues) => {
        onChange(selectedValues)
        // setValue('')
    }

    const handleCreate = (value, selectedValues) => {
        // alert('Create')
        onCreate(value)
        setValue('')
    }

    return (
        <React.Fragment>
            <div>
            <div className={`flex max-w-mds justify-ends text-default  ${className}`}>
                {mainCategories.map((tag, index) => {
                    const { mainCategoryName: tagItem } = tag;
                    return (
                    <div key={index} className="flex bg-custom mx-1 my-1 text-xs rounded-md">
                        <span className="mx-1 px-2 py-1">#{tagItem}</span>
                        <span className="flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom" onClick={() => handleRemoveTag(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </span>
                    </div>
                )})}
                {mainCategories.length > 2 && (
                    <div className="flex mx-1 my-1 text-xs rounded-md">
                        <span className="flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom" onClick={handleRemoveAll}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-delete"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><line x1="18" x2="12" y1="9" y2="15" /><line x1="12" x2="18" y1="9" y2="15" /></svg>
                        </span>
                    </div>
                )}
            </div>
            <div className="flex justify-ends">
                <div className="min-w-md">
                    <TextBoxWithSuggestions {...extraProps} {...textBoxProps} onKeyDown={handleKeyDown} onChange={handleChange} onSuggestionClick={handleSuggestionClick} onCreate={handleCreate} value={value} selectedOptions={mainCategories} suggestions={suggestions} labelKey="mainCategoryName" idKey="id" hasCreateNew={false} />
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default MainCategorySelector