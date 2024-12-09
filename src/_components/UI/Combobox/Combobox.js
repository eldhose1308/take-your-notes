import Separator from "_components/Misc/Separator/Separator";
import { TextBox } from "_components/Form";
import React, { useState, useRef, createContext, useContext, useMemo, useEffect } from "react";
import { highlightText } from "./_utils/utils";
import Loader from "_components/Loader/Loader";

const ComboboxContext = createContext();

const Combobox = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');

  const hide = () => {
    setIsMenuOpen(false);
    setSearchQuery('');
  }

  const toggle = (e) => {
    e.stopPropagation()
    setIsMenuOpen((prevState) => !prevState)
  }


  return (
    <ComboboxContext.Provider value={{ isMenuOpen, toggle, hide, searchQuery, setSearchQuery }}>
      <div className="Combobox-group text-default inline-flex relative" tabIndex={0}
      // onBlur={hide}
      >
        {children}
      </div>
    </ComboboxContext.Provider>
  )
}


const ComboboxTrigger = ({ children }) => {
  const { toggle } = useContext(ComboboxContext);

  return (
    <div className="Combobox-trigger" onClick={toggle}>
      {children}
    </div>
  )
}

const ComboboxContent = ({ heading = 'Heading', children, options = [], isFetching = false, isAllDataFetched = false, onNewOptions = () => { }, selectedValue, renderAdd, renderItemAction, onChange, onSearch, idKey = 'id', labelKey = 'label' }) => {
  const { isMenuOpen, hide, searchQuery, setSearchQuery } = useContext(ComboboxContext)
  // call debounced search func
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const dropdownRef = useRef(null);
  const filteredItems = useMemo(() =>
    options.filter(({ [labelKey]: label = '' }) => label.toLowerCase().includes(searchQuery.toLowerCase())),
    [options, searchQuery]
  );


  const handleSearch = (value, e) => {
    setSearchQuery(value);
    onSearch && onSearch(value, e); // call debounced search func
  }


  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
    } else if (event.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < filteredItems.length) {
        const selectedSuggestion = filteredItems[highlightedIndex]
        onChange(selectedSuggestion.id, selectedSuggestion, highlightedIndex)
      }
    } else
      if (event.key === 'Escape') {
        event.preventDefault();
        hide();
      }
  }

  useEffect(() => {

  }, [searchQuery])

  useEffect(() => {
    const closeDropdown = () => {
      hide();
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown()
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [hide]);

  return (
    <React.Fragment>
      {isMenuOpen && (
        <div ref={dropdownRef} onKeyDown={handleKeyDown} className="absolute my-2 top-100 right-0 left-0 text-xs flex flex-row bg-default min-w-md max-w-sm overflow-y-scroll rounded-md border border-another px-1 py-1 z-10">
          <div className="flex items-center justify-between w-full px-2">
            <span>
              {heading}
            </span>
            {/* <span onClick={hide} className="flex items-center rounded-md cursor-pointer hover-accent hover-text-custom p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
            </span> */}
            <span onClick={hide} className="flex items-center text-default hover-text-custom hover-accent p-1 rounded-md cursor-pointer">
              <span className="text-xs bg-secondary text-secondary border border-secondary px-1 mx-1 rounded-md">Esc</span>
            </span>
          </div>
          <div className="Combobox-search my-2 w-full">
            <TextBox size='xs' placeholder='Search' onChange={handleSearch} value={searchQuery} placeholderFocus isFocused />
          </div>
          <Separator className='w-full' />
          <div className="flex max-h-md overflow-y-scroll pr-1 my-1 w-full">
            {!isFetching && !filteredItems.length && (
              <span className="py-2 px-2 flex items-center">No results found.</span>
            )}

            {filteredItems.map((option, index) => {
              return (
                <ComboboxItem 
                  key={`combobox_item_${index}`} 
                  index={index}
                  idKey={idKey}
                  labelKey={labelKey}
                  onChange={onChange} 
                  hide={hide} 
                  renderItemAction={renderItemAction} 
                  selectedValue={selectedValue} 
                  highlightedIndex={highlightedIndex} 
                  option={option}
                  searchQuery={searchQuery}
                />
              )
              // const { [idKey]: id, [labelKey]: label, [idKey]: value } = option;
              // return (
              //   <span key={`combobox_item_${value}`} onClick={(e) => { onChange(id, option, e); hide(); }} className={`flex flex-nowrap justify-between items-center w-full py-1.5 mb-1 px-2 cursor-pointer rounded-md ${selectedValue === id ? 'bg-highlight' : 'hover-custom'} ${highlightedIndex === index ? 'bg-custom' : ''} text-secondary group-hover`}>
              //     <span className={`${renderItemAction ? 'w-60' : ''}`}>
              //       {highlightText(label, searchQuery)}
              //     </span>
              //     {renderItemAction && renderItemAction(id, option)}
              //   </span>
              // )
            })}

            {isFetching && <div className="w-full text-center"><Loader type='spinner' /></div>}

            {!isAllDataFetched && <span onClick={onNewOptions} className="w-full text-center hover-secondary py-2 rounded-md my-2">
              Show more
            </span>}

          </div>

          {renderAdd && (
            <React.Fragment>
              <Separator className='w-full' />

              <div className="my-1 p-2 w-full cursor-pointer hover-highlight rounded-md">
                {renderAdd(searchQuery)}
                {/* {!searchQuery ? 'Type a new item and click' : `Create new "${searchQuery}"`} */}
              </div>
            </React.Fragment>
          )}
        </div>
      )}

    </React.Fragment>
  )
}

const ComboboxItem = ({ option, index, onChange, hide, renderItemAction, selectedValue, searchQuery, idKey, labelKey, highlightedIndex, children, ...props }) => {
  const { [idKey]: id, [labelKey]: label, [idKey]: value } = option;

  return (
    <span key={`combobox_item_${value}`} onClick={(e) => { onChange(id, option, e); hide(); }} className={`flex flex-nowrap justify-between items-center w-full py-1.5 mb-1 px-2 cursor-pointer rounded-md ${selectedValue === id ? 'bg-highlight' : 'hover-custom'} ${highlightedIndex === index ? 'bg-custom' : ''} text-secondary group-hover`}>
      <span className={`${renderItemAction ? 'w-60' : ''}`}>
        {highlightText(label, searchQuery)}
      </span>
      {renderItemAction && renderItemAction(id, option)}
    </span>
  )
  // return (
  //   <span className={`w-full py-1.5 px-2 cursor-pointer hover-custom`} {...props}>
  //     {children}
  //   </span>
  // )
}


export {
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItem,
}
export default Combobox;