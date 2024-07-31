import React, { useState } from "react";

import { Button, TextBox } from "_components/Form";

const SearchBar = (props) => {
    const { size, textBoxProps, buttonProps } = props;
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = () => {
        // setIsLoading(true)
    }

    return (
        <React.Fragment>
            <div className="flex items-center animate-slide-in-x-r">
                <div className='grow-1 mr-2'>
                    <TextBox onChange={handleChange} size={size} {...textBoxProps} />
                </div>

                {/* After user input is over, either trigger search automatically or with click(config via prop) */}
                {/* Put a clear icon in textbox component with prop configuration */}

                <Button variant='accent' size={size} width='none' {...buttonProps} isLoading={isLoading}>
                    {!isLoading && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg>
                        // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    )}
                </Button>
            </div>
        </React.Fragment>
    )
}

export default SearchBar