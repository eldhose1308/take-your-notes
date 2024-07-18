import React from "react";
import Filter from "./Filter";

const FilterViews = (props) => {
    const { label='Views', onSelect } = props

    return (
        <Filter 
            label={label}
            onSelect={onSelect}
            options={[{ id: 'most_views', text: 'Most Views' }, { id: 'least_views', text: 'Least Views' }]}
            />
    )
}

export default FilterViews