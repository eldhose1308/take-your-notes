import React from "react";

import Filter from "_modules/filters/_components/Filter";

const filterOptions = [
    { id: 'recent', text: 'Most Recent' }, // sort_by: desc
    { id: 'oldest', text: 'Oldest' }, // sort_by: asc
];

const filterQueryParamMappings = {
    recent: { sort_by: 'date', sort_order: 'desc' },
    oldest: { sort_by: 'date', sort_order: 'asc' },
}

const FeedbackFilters = (props) => {
    const { onChange=()=>{}, resetPagination=()=>{} } = props;

    const handleFilterChange = (selectedFilter) => {
        const { id } = selectedFilter;
        const filterQueryParams = filterQueryParamMappings[id];
        resetPagination();
        onChange(filterQueryParams);
    }

    return (
        <div className="flex">
            <Filter
                label='Filter by'
                onSelect={handleFilterChange}
                options={filterOptions}
            />

            {/* <Filter
                label='Category'
                onSelect={() => { }}
            /> */}
        </div>
    )
}

export default FeedbackFilters;