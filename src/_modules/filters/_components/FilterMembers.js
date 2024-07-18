import React from "react";
import Filter from "./Filter";

const FilterMembers = (props) => {
    const { label='Members', onSelect } = props

    return (
        <Filter 
            label={label}
            onSelect={onSelect}
            options={[{ id: 'most_members', text: 'Most Members' }, { id: 'least_members', text: 'Least Members' }]}
            />
    )
}

export default FilterMembers