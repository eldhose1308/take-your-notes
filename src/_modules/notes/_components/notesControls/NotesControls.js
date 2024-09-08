import React, { useState } from "react"

import SearchBar from "_components/UI/SearchBar/SearchBar";
import NotesFilterBar from "_modules/filters/_components/NotesFilterBar";


const NotesControls = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const openSearch = () => {
        setIsSearchVisible(previousState => !previousState)
    }

    const openFilter = () => {
        setIsFilterVisible(previousState => !previousState)
    }


    return (
        <React.Fragment>
            <div className='flex justify-end pr-4 my-2 text-default'>
                <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${isSearchVisible ? 'border-custom' : ''}`} onClick={() => alert('Download to system')}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive-download"><path d="M12 2v8" /><path d="m16 6-4 4-4-4" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 18h.01" /><path d="M10 18h.01" /></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download"><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                </div>
                <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${isSearchVisible ? 'border-custom' : ''}`} onClick={openSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg> */}
                </div>
                <div className={`flex items-center cursor-pointer mx-1 px-1 py-1 rounded-md border hover-custom ${isFilterVisible ? 'border-custom' : ''}`} onClick={openFilter}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z"></path></svg> */}
                    {isFilterVisible && <NotesFilterBar />}
                </div>
            </div>

            {isSearchVisible && <div className='notes-search-bar my-2'>
                <SearchBar size='sm' textBoxProps={{
                    placeholder: 'Enter note content to search',
                    placeholderFocus: 'default',
                    isFocused: true
                }}
                    buttonProps={{
                        size: 'xs'
                    }}
                />
            </div>
            }

        </React.Fragment>
    )
}

export default NotesControls;