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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    )}
                </Button>
            </div>
        </React.Fragment>
    )
}

export default SearchBar