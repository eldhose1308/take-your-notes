import React, { useState, useEffect } from "react"

import { TextBox } from "_components/Form"

const SUGGESTIONS_THRESHOLD = 1;
const MAX_SELECTED_OPTIONS = 5;

// change textbox to bottomBorder
const TextBoxWithSuggestions = (props) => {
    const { selectedOptions = [], suggestions = [], onSuggestionClick = () => { }, onCreate = () => { }, ...textBoxProps } = props
    const { value: textBoxValue } = textBoxProps
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(textBoxValue.toLowerCase())
    )
    const shouldShowCreateNewButton = !filteredSuggestions.length && textBoxValue
    const shouldShowSuggestions = textBoxValue.length > SUGGESTIONS_THRESHOLD && showSuggestions
    const isMaxSuggestionsReached = selectedOptions.length >= MAX_SELECTED_OPTIONS
    const maxSuggestionMessage = isMaxSuggestionsReached && { type: 'error', messages: ['Maximum Number of Tags reached'] }
    
    const handleSuggestionClick = (id, suggestion, index) => {
        const selectedOptionId = selectedOptions.findIndex(optionId => optionId === id)
        if (selectedOptionId !== -1) {
            const newSuggestions = selectedOptions.slice(0, selectedOptionId).concat(selectedOptions.slice(selectedOptionId + 1))
            onSuggestionClick(id, newSuggestions, suggestion, index)
            return
        }
        const selectedValues = [...selectedOptions, id]
        onSuggestionClick(id, selectedValues, suggestion, index)
    }

    const handleSuggestionCreate = () => {
        const selectedValues = [...selectedOptions, textBoxValue]
        onCreate(textBoxValue, selectedValues)
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
            setShowSuggestions(false)
        }
    }

    useEffect(() => {
        setHighlightedIndex(textBoxValue.length ? 0 : -1)
        setShowSuggestions(true);
    }, [textBoxValue])

    return (
        <div className="flex flex-col relative max-w-md" onKeyDown={handleKeyDown}>
            <TextBox {...textBoxProps} placeholder='Enter new tags here...' placeholderFocus='default' disabled={isMaxSuggestionsReached} validationMsg={maxSuggestionMessage} />
            {shouldShowSuggestions && (
                <div className="bg-default border border-another rounded-md mx-3 my-2 absolute top-100 w-4/5">
                    <div className="flex flex-col p-1 text-sm">

                        {shouldShowCreateNewButton && (
                            <div key={`suggestion_item_createNew`} className={`w-full hover-custom cursor-pointer flex items-center justify-between ${highlightedIndex === 0 ? 'bg-custom' : ''}`} onClick={handleSuggestionCreate} >
                                <span className={`px-2 py-1 flex items-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    {textBoxValue}
                                </span>
                                <span className="text-xs px-2 py-1 bg-custom text-secondary border border-secondary rounded-md">
                                    Press Enter to Create
                                </span>
                            </div>
                        )}

                        {filteredSuggestions.map((suggestion, index) => {
                            const { id, text } = suggestion; // if not object, then take it both as same
                            const isOptionSelected = selectedOptions.includes(id) // make slectedOptions as object for O(1)
                            return (
                                <div key={`suggestion_item_${id}`} className={`w-full hover-custom cursor-pointer  flex ${isOptionSelected ? 'justify-between' : ''} ${highlightedIndex === index ? 'bg-custom' : ''}`} onClick={() => handleSuggestionClick(id, suggestion, index)} >
                                    <span className={`px-2 py-1 ${isOptionSelected ? 'opacity-50' : ''}`}>{text}</span>
                                    {isOptionSelected && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TextBoxWithSuggestions