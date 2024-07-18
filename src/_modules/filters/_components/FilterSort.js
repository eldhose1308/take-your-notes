import React from "react";
import Filter from "./Filter";

const FilterSort = (props) => {
    const { label='Filter By', onSelect } = props

    return (
        <Filter 
            label={label}
            onSelect={onSelect}
            options={[{ id: 'newest', text: 'Newest' }, { id: 'oldest', text: 'Oldest' }, { id: 'most_viewed', text: 'Most Viewed' }]}
        />
    )
}

export default FilterSort