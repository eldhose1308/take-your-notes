import Separator from "_components/Misc/Separator/Separator";
import { TextBox } from "_components/Form";
import React, { useState, useRef, createContext, useContext, useMemo, useEffect } from "react";
import { highlightText } from "./_utils/utils";

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

const ComboboxContent = ({ heading = 'Heading', children, options = [], selectedValue, renderAdd, renderItemAction, onChange, onSearch }) => {
  const { isMenuOpen, hide, searchQuery, setSearchQuery } = useContext(ComboboxContext)
  // call debounced search func

  const dropdownRef = useRef(null);
  const filteredItems = useMemo(() =>
    options.filter(({ label = '' }) => label.toLowerCase().includes(searchQuery.toLowerCase())),
    [options, searchQuery]
  );


  const handleSearch = (value, e) => {
    setSearchQuery(value);
    onSearch && onSearch(value, e); // call debounced search func
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
        <div ref={dropdownRef} className="absolute my-2 top-100 right-0 left-0 text-xs flex flex-row bg-default min-w-sm max-w-xs overflow-y-scroll rounded-md border border-another px-1 py-1 z-10">
          <div className="flex items-center justify-between w-full px-2">
            <span>
              {heading}
            </span>
            <span onClick={hide} className="flex items-center rounded-md cursor-pointer hover-accent hover-text-custom p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
            </span>
          </div>
          <div className="Combobox-search my-2 w-full">
            <TextBox size='xs' placeholder='Search' onChange={handleSearch} value={searchQuery} placeholderFocus isFocused />
          </div>
          <Separator className='w-full' />
          <div className="flex max-h-md overflow-y-scroll pr-1 my-1 w-full">
            {!filteredItems.length && (
              <span className="py-2 px-2 flex items-center">No results found.</span>
            )}

            {filteredItems.map(option => {
              const { id, label, value } = option;
              return (
                <span key={`combobox_item_${value}`} onClick={(e) => { onChange(id, option, e); hide(); }} className={`flex flex-nowrap justify-between items-center w-full py-1.5 mb-1 px-2 cursor-pointer rounded-md ${selectedValue === id ? 'bg-highlight' : 'hover-custom'} text-secondary group-hover`}>
                  <span className={`${renderItemAction ? 'w-60' : ''}`}>
                    {highlightText(label, searchQuery)}
                  </span>
                  {renderItemAction && renderItemAction(id, option)}
                </span>
              )
            })}
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

const ComboboxItem = ({ onChange, value, children, ...props }) => {

  return (
    <span className={`w-full py-1.5 px-2 cursor-pointer hover-custom`} {...props}>
      {children}
    </span>
  )
}


export {
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItem,
}
export default Combobox;