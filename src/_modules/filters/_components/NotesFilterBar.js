import React, { useState, useRef, useEffect, useMemo } from "react"
import { Button, TextBox } from "_components/Form"
import Separator from "_components/Misc/Separator/Separator"
import Typography from "_components/Misc/Typography/Typography"
import Flex from "_components/Misc/Flex/Flex"

const filterTypes = {
    Favourites: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
    Timestamp: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>,
    TimestampRange: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>,
    Tags: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" /><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="6.5" cy="9.5" r=".5" fill="currentColor" /></svg>,
}

const filterItems = [
    {
        id: 1,
        label: 'Favourites',
        type: 'Favourites',
    },
    {
        id: 2,
        label: 'Date Created',
        type: 'Timestamp',
    },
    {
        id: 3,
        label: 'Date Edited',
        type: 'Timestamp',
    },
    {
        id: 4,
        label: 'Date range',
        type: 'TimestampRange',
    },
    {
        id: 5,
        label: 'Tag 1',
        type: 'Tags',
    },
    {
        id: 6,
        label: 'Tag 2',
        type: 'Tags',
    }, {
        id: 7,
        label: 'Tag 3',
        type: 'Tags',
    }, {
        id: 8,
        label: 'Tag 4',
        type: 'Tags',
    }, {
        id: 9,
        label: 'Tag 5',
        type: 'Tags',
    },
    {
        id: 10,
        label: 'Tag 6 with Date',
        type: 'Tags',
    },
]

/// it should use the popup component splitted from optionsMenu
const NotesFilterBar = (props) => {
    // const { selectedFilters=[1,3,5] } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const scrollableDivRef = useRef(null);

    // move to props
    const [filterText, setFilterText] = useState('')
    const [selectedFilters, setSelectedFilters] = useState([])


    const filteredFilters = useMemo(() => filterItems.filter(suggestion =>
        suggestion.label.toLowerCase().includes(filterText.toLowerCase())
    ), [filterText])

    const hide = () => setIsMenuOpen(false)
    const show = () => setIsMenuOpen(true)
    const toggle = (e) => {
        e.stopPropagation()
        setIsMenuOpen((prevState) => !prevState)
    }

    const handleTextChange = (value) => {
        setFilterText(value)
    }

    const handleFilterItemClick = (id, selectedItem, index) => {
        let newSelectedValues = []
        if(selectedFilters.includes(id)){
            const selectedOptionId = selectedFilters.findIndex(optionId => optionId === id)
            newSelectedValues = selectedFilters.slice(0, selectedOptionId).concat(selectedFilters.slice(selectedOptionId + 1))
        }else{
            newSelectedValues = [...selectedFilters, id]
        }
        setSelectedFilters(newSelectedValues)
    }   

    const handleKeyDown = (event) => {
        console.log(event.key)
        if (event.key === 'ArrowDown') {
            setHighlightedIndex((prevIndex) => (prevIndex + 1) % filteredFilters.length)
        } else if (event.key === 'ArrowUp') {
            setHighlightedIndex((prevIndex) => (prevIndex - 1 + filteredFilters.length) % filteredFilters.length)
        } else if (event.key === 'Enter') {
            if (!(highlightedIndex >= 0 && highlightedIndex < filteredFilters.length)) {
                return
            }

            const selectedFilter = filteredFilters[highlightedIndex]
            handleFilterItemClick(selectedFilter.id, selectedFilter, highlightedIndex)
        } else if (event.key === 'Escape') {
            hide()
        }
    }

    useEffect(() => {
        const div = scrollableDivRef.current;
        if (!div) return;
    
        const focusedElement = div.children[highlightedIndex];
        if (!focusedElement) return;
    
        const elementRect = focusedElement.getBoundingClientRect();
        const divRect = div.getBoundingClientRect();
    
        // Check if the element is out of view
        if (elementRect.top < divRect.top || elementRect.bottom > divRect.bottom) {
          div.scrollTop = focusedElement.offsetTop - divRect.top;
        }
      }, [highlightedIndex, scrollableDivRef]);

      useEffect(() => {
        setHighlightedIndex(filterText.length ? 0 : -1)
    }, [filterText])

    return (
        <div className="note-menus menu inline-flex relative z-3">
            {isMenuOpen && (
                <div onClick={(e) => { e.stopPropagation() }} onKeyDown={handleKeyDown} className="absolute top-100 right-0 text-sm flex flex-col bg-default rounded-md border border-another px-1 py-1 min-w-sm">
                    <Flex justifyContent='spaceBetween' className='px-2 my-2'>
                        <Typography textVariant='default' type='h5'>Filters</Typography>
                        <Button size='xxs' variant='ghost' width='none' onClick={hide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </Button>
                    </Flex>
                    
                    <TextBox size='sm' placeholder='Filter by keywords/tags' placeholderFocus='default' onChange={handleTextChange} isFocused />
                    
                    
                    <div ref={scrollableDivRef} className="my-2 mx-1 max-h-md overflow-y-scroll">


                        {filteredFilters.map((filterItem, index) => {
                            const { id, type, label } = filterItem;
                            const icon = filterTypes[type];
                            const isFilterSelected = selectedFilters.includes(id)
                            
                            const isCurrentHighlightedItem = highlightedIndex === index;
                            const itemBg = isFilterSelected && !isCurrentHighlightedItem ? 'bg-highlight' : isCurrentHighlightedItem ? 'bg-custom border opacity-100' : ''; 


                            return (
                                <div key={index} onClick={() => handleFilterItemClick(id, filterItem, index)} className={`flex items-center justify-between px-2 py-1 rounded-md hover-custom ${!isFilterSelected && 'opacity-50'} ${itemBg} `}>
                                    <div className="flex items-center">
                                        {icon}
                                        <span className="mx-2">{label}</span>
                                    </div>

                                    {isFilterSelected && <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                                    </div>}
                                </div>
                            )

                        })}



                    </div>

                </div>
            )}
        </div>
    )
}

export default NotesFilterBar