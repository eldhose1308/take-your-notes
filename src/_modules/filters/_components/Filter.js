import React from "react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItemGroup, DropdownMenuTrigger } from "_components/UI/Dropdown/Dropdown";

const Filter = (props) => {
    const { label, options=[], selectedOption, onSelect } = props

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {label}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItemGroup
                    selectedOption={selectedOption}
                    options={options}
                    onChange={onSelect}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Filter