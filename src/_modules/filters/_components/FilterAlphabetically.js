import React from "react";
import Filter from "./Filter";

const FilterAlphabetically = (props) => {
    const { label='Alphabetical Order', onSelect } = props

    return (
        <Filter 
            label={label}
            onSelect={onSelect}
            options={[{ id: 'asc', text: 'A-Z' }, { id: 'desc', text: 'Z-A' }]}
            />
    )
}

export default FilterAlphabetically