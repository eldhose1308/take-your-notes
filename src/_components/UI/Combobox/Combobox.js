import Separator from "_components/Misc/Separator/Separator";
import { TextBox } from "_components/Form";
import React, { useState, createContext, useContext, useMemo, useEffect } from "react";

const ComboboxContext = createContext();

const Combobox = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hide = () => setIsMenuOpen(true)
  const toggle = (e) => {
    e.stopPropagation()
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <ComboboxContext.Provider value={{ isMenuOpen, toggle, hide }}>
      <div className="Combobox-group text-default inline-flex relative" tabIndex={0} onBlur={hide}>
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

const ComboboxContent = ({ children, options=[], onSearch }) => {
  const { isMenuOpen, hide } = useContext(ComboboxContext)
  const [searchQuery, setSearchQuery] = useState('');
  // call debounced search func
  
  const filteredItems = useMemo(() =>
    options.filter(({ label='' }) => label.toLowerCase().includes(searchQuery.toLowerCase())),
    [options, searchQuery]
  );


  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <span key={index} className="w-full highlighted border-b border-success text-success">{part}</span> : part
    );
  };


  const handleSearch = (value, e) => {
    setSearchQuery(value);
    onSearch && onSearch(value, e); // call debounced search func
  }

  useEffect(() => {

  }, [searchQuery])

  return (
    <React.Fragment>
      {isMenuOpen && (
        <div className="absolute my-2 top-100 right-0 left-0 text-xs flex flex-row bg-default min-w-sm overflow-y-scroll rounded-md border border-another px-1 py-1">
          <div className="Combobox-search my-2 w-full">
            <TextBox size='xs' placeholder='Search' onChange={handleSearch} value={searchQuery} placeholderFocus />
          </div>
          <Separator className='w-full' />
          <div className="flex max-h-md overflow-y-scroll">
            {!filteredItems.length && (
              <span>No results found.</span>
            )}

            {filteredItems.map(option => {
              const { label, value } = option;
              return (
                <span className='w-full py-1.5 px-2 cursor-pointer hover-custom text-secondary'>
                  {highlightText(label, searchQuery)}
                </span>
              )
            })}
          </div>
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