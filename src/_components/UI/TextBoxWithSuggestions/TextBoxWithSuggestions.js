import React, { useState, useMemo, useEffect } from "react"

import { TextBox } from "_components/Form"

const SUGGESTIONS_THRESHOLD = 0;
const MAX_SELECTED_OPTIONS = 10;

// change textbox to bottomBorder
const TextBoxWithSuggestions = (props) => {
    const { selectedOptions = [], suggestions = [], onSuggestionClick = () => { }, onCreate = () => { }, idKey = 'id', labelKey = 'text', hasCreateNew = true, ...textBoxProps } = props
    const { value: textBoxValue, textBoxFieldProps } = textBoxProps
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [showSuggestions, setShowSuggestions] = useState(false);

    const selectedOptionIds = useMemo(() => selectedOptions.map(({ id }) => id), [selectedOptions])

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion[labelKey].toLowerCase().includes(textBoxValue.toLowerCase())
    )
    const shouldShowCreateNewButton = hasCreateNew && !filteredSuggestions.length && textBoxValue
    const shouldShowSuggestions = textBoxValue.length > SUGGESTIONS_THRESHOLD || showSuggestions
    const isMaxSuggestionsReached = selectedOptions.length >= MAX_SELECTED_OPTIONS
    const maxSuggestionMessage = isMaxSuggestionsReached && { type: 'error', messages: ['Maximum Number of Tags reached'] }

    const handleSuggestionClick = (id, suggestion, index) => {
        const selectedOptionId = selectedOptions.findIndex(({ [idKey]: optionId }) => optionId === suggestion[idKey])
        if (selectedOptionId !== -1) {
            const newSuggestions = selectedOptions.slice(0, selectedOptionId).concat(selectedOptions.slice(selectedOptionId + 1))
            onSuggestionClick(id, newSuggestions, suggestion, index)
            return
        }
        const selectedValues = [...selectedOptions, suggestion]
        onSuggestionClick(id, selectedValues, suggestion, index)
    }

    const handleSuggestionCreate = () => {
        const selectedValues = [...selectedOptions, textBoxValue]
        onCreate(textBoxValue, selectedValues)
    }

    const handleFocus = () => {
        setShowSuggestions(true)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            setHighlightedIndex((prevIndex) => (prevIndex + 1) % filteredSuggestions.length)
        } else if (event.key === 'ArrowUp') {
            setHighlightedIndex((prevIndex) => (prevIndex - 1 + filteredSuggestions.length) % filteredSuggestions.length)
        } else if (event.key === 'Enter') {
            if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
                const selectedSuggestion = filteredSuggestions[highlightedIndex]
                handleSuggestionClick(selectedSuggestion.id, selectedSuggestion, highlightedIndex)
            } else if (textBoxValue) {
                handleSuggestionCreate()
            }
        } else if (event.key === 'Escape') {
            event.preventDefault();
            setShowSuggestions(false)
        }
    }

    useEffect(() => {
        setHighlightedIndex(textBoxValue.length ? 0 : -1)
        if(textBoxValue){
            setShowSuggestions(true);
        }
    }, [textBoxValue])

    const handleCloseSuggestions = (event) => {
        event.stopPropagation();
        const relatedTarget = event.relatedTarget;
        const dropdownElement = event.currentTarget;

        if (!dropdownElement.contains(relatedTarget)) {
            setShowSuggestions(false)
        }
    }

    return (
        <React.Fragment>
        {/* <div onClick={()=>{alert(33)}} className="overlay z-10"></div> */}

        <div tabIndex={2} onBlur={handleCloseSuggestions} className="flex flex-col relative max-w-md text-default " onKeyDown={handleKeyDown}>
            {/* <div className="flex"> */}
                <div className="my-3">
                    <TextBox placeholder='Enter new tags here...' placeholderFocus='default' {...textBoxProps} {...textBoxFieldProps} isFocused={false} onFocus={handleFocus} disabled={isMaxSuggestionsReached} validationMsg={maxSuggestionMessage} />
                </div>
                {/* <span onClick={() => setShowSuggestions(previouState => !previouState)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/></svg>
                </span> */}
            {/* </div> */}
            {!isMaxSuggestionsReached && shouldShowSuggestions && (
                <div className="bg-default border border-another rounded-md mx-3 my-2 absolute top-100 w-4/5">
                    <div className="flex flex-col p-1 text-sm">
                        <div className="flex justify-between text-xs text-secondary px-2 my-2">
                            <span className="my-1">Suggestions</span>
                            <span onClick={() => setShowSuggestions(false)} className="flex items-center text-default hover-text-custom hover-accent p-1 rounded-md cursor-pointer">
                                <span className="text-xs bg-secondary text-secondary border border-secondary px-1 mx-1 rounded-md">Esc</span>
                            </span>
                        </div>
                        {shouldShowCreateNewButton && (
                            <div key={`suggestion_item_createNew`} className={`w-full hover-custom cursor-pointer flex items-center justify-between ${highlightedIndex === 0 ? 'bg-custom' : ''}`} onClick={handleSuggestionCreate} >
                                <span className={`px-2 py-1 flex items-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    {textBoxValue}
                                </span>
                                <span className="text-xs px-2 py-1 bg-custom text-secondary border border-secondary rounded-md">
                                    Press Enter to Create
                                </span>
                            </div>
                        )}

                        <div className="pr-4 max-h-md overflow-y-scroll">
                            {filteredSuggestions.map((suggestion, index) => {
                                const { [idKey]: id, [labelKey]: text } = suggestion; // if not object, then take it both as same
                                const isOptionSelected = selectedOptionIds.includes(id) // make slectedOptions as object for O(1)
                                return (
                                    <div key={`suggestion_item_${id}`} className={`w-full hover-custom cursor-pointer  flex ${isOptionSelected ? 'justify-between' : ''} ${highlightedIndex === index ? 'bg-custom' : ''}`} onClick={(e) => { e.preventDefault();  e.stopPropagation();handleSuggestionClick(id, suggestion, index) }} >
                                        <span className={`px-2 py-1 ${isOptionSelected ? 'opacity-50' : ''}`}>{text}</span>
                                        {/* {isOptionSelected && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>} */}
                                        {isOptionSelected && <span className="flex items-center mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg></span>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
        </React.Fragment>
    )
}

export default TextBoxWithSuggestions