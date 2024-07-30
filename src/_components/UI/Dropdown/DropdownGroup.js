import Separator from "_components/Misc/Separator/Separator";
import { TextBox } from "_components/Form";
import React, { useState, createContext, useContext, } from "react";

const DropdownContext = createContext();

const DropdownGroup = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hide = () => setIsMenuOpen(true)
  const toggle = (e) => {
    e.stopPropagation()
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <DropdownContext.Provider value={{ isMenuOpen, toggle, hide }}>
      <div className="dropdown-group text-default inline-flex relative" tabIndex={0} onBlur={hide}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}


const DropdownTrigger = ({ children }) => {
  const { toggle } = useContext(DropdownContext);

  return (
    <div className="dropdown-trigger" onClick={toggle}>
      {children}
    </div>
  )
}

const DropdownContent = ({ children, onSearch }) => {
  const { isMenuOpen, hide } = useContext(DropdownContext)

  const handleSearch = () => {
    // do local search
    onSearch && onSearch();
  }

  return (
    <React.Fragment>
      {isMenuOpen && (
        <div className="absolute my-2 top-100 right-0 left-0 text-xs flex flex-row bg-default min-w-sm overflow-y-scroll rounded-md border border-another px-1 py-1">
          <div className="dropdown-search my-2 w-full">
            <TextBox size='xs' placeholder='Search' onChange={handleSearch} placeholderFocus />
          </div>
          <Separator className='w-full' />
          <div className="flex max-h-md overflow-y-scroll">
          {children}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

const DropdownItem = ({ onChange, value, children, ...props }) => {

  return (
    <span className={`w-full py-1.5 px-2 cursor-pointer hover-custom`} {...props}>
      {children}
    </span>
  )
}


export {
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
}
export default DropdownGroup;