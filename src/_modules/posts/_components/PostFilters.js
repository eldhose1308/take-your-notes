import React, { useMemo } from "react";

import Filter from "_modules/filters/_components/Filter";

const filterOptions = [
    { id: 'none', text: 'None' },
    { id: 'recent', text: 'Most Recent' }, // sort_by: desc
    { id: 'oldest', text: 'Oldest' }, // sort_by: asc
    { id: 'most_liked', text: 'Most Liked' }, // sort_by: likes
    { id: 'random', text: 'Random' }, // sort_by: random
];

const filterQueryParamMappings = {
    recent: { sort_by: 'date', sort_order: 'desc' },
    oldest: { sort_by: 'date', sort_order: 'asc' },
    most_liked: { sort_by: 'likes', sort_order: 'desc' },
    random: { sort_by: 'random' },
}

const PostFilters = (props) => {
    const { filters, onChange = () => { }, resetPagination = () => { } } = props;


    const selectedValue = useMemo(() => Object.keys(filterQueryParamMappings).find(filterKey => {
        const filterItem = filterQueryParamMappings[filterKey];
        return (JSON.stringify(filterItem) === JSON.stringify(filters))
    }), [filters]);

    const selectedOption = useMemo(() => filterOptions.find(option => option.id === selectedValue), [selectedValue]);


    const handleFilterChange = (selectedFilter) => {
        const { id } = selectedFilter;
        const filterQueryParams = filterQueryParamMappings[id];
        resetPagination();
        onChange(filterQueryParams, id);
    }

    return (
        <div className="flex">
            <Filter
                label='Filter by'
                onSelect={handleFilterChange}
                options={filterOptions}
                selectedOption={selectedOption}
            />

            {/* <Filter
                label='Category'
                onSelect={() => { }}
            /> */}
        </div>
    )
}

export default PostFilters;