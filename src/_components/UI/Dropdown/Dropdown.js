import React, { useState, createContext, useContext, useEffect } from "react";

const DropdownContext = createContext();

// give error if not used in context
const DropdownMenu = ({ children }) => {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState()
  const [options, setOptions] = useState([])

  const hide = () => setPopupOpen(true)
  const toggle = () => setPopupOpen((prevState) => true)

  return (
    <DropdownContext.Provider value={{ isPopupOpen, toggle, hide, setSelectedItem, setOptions, selectedItem }}>
      <div
        className="dropdown mx-2 my-2 inline-flex"
        tabIndex={0}
        onBlur={hide}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

const DropdownMenuTrigger = ({ children }) => {
  const { toggle, selectedItem={} } = useContext(DropdownContext)
  return (
    <div
      className=""
      onClick={toggle}
    >
      <div className="flex items-center cursor-pointer hover-custom rounded-md text-sm">
        <span className="mx-2 my-2 text-default">
          {children}
        </span>
        
        {selectedItem.text && (
          <span className="mx-2 my-2 px-2 text-xs text-custom rounded-md bg-accent hover-accent hover-text-custom">
            {selectedItem.text}
          </span>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
      </div>
    </div>
  )
}

const DropdownMenuContent = ({ children }) => {
  const { isPopupOpen, hide } = useContext(DropdownContext)

  return (
    <React.Fragment>
      {isPopupOpen && <div onClick={hide} className="overlay overlay-transparent z-50"></div>}
      <div className={`dropdown-box z-50 border border-another min-w-xs rounded-md mt-9 bg-default fixed ${isPopupOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col my-1 p-1 text-sm">
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

const DropdownMenuItem = ({ onChange, value, children, ...props }) => {

  const { hide, selectedItem, setSelectedItem } = useContext(DropdownContext)

  const handleSelect = (e) => {
    e.stopPropagation()
    hide()
    setSelectedItem(value)
    onChange && onChange(value)
  }

  return (
    <span className={`py-1.5 px-2 my-1 cursor-pointer ${selectedItem === value ? 'bg-custom' : 'hover-secondary'}`} onClick={handleSelect} {...props}>
      {children}
    </span>
  )
}

const DropdownMenuItemGroup = ({ options = [], value, onChange }) => {
  const { setOptions, setSelectedItem } = useContext(DropdownContext)


  // normalise the options and set value if exists or else set first item as default value if a flag is present else no items are selected by default
  useEffect(() => {
    const selectedItem = options[0] || ''
    setOptions(options)
    setSelectedItem(selectedItem)
  }, [options, setOptions, setSelectedItem])

  return (
    <React.Fragment>
      {options.map(option => {
        const { id, text } = option || {}
        return (
          <DropdownMenuItem
            key={id}
            onChange={onChange}
            value={option}
          >
            {text}
          </DropdownMenuItem>
        )
      }
      )}
    </React.Fragment>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemGroup
}