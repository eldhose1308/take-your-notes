import React from "react";

import Filter from "_modules/filters/_components/Filter";
import SearchBar from "_components/UI/SearchBar/SearchBar";

export const filterOptions = [
    { id: 'none', text: 'None' },
    { id: 'recent', text: 'Most Recent' }, // sort_by: desc
    { id: 'oldest', text: 'Oldest' }, // sort_by: asc
    { id: 'most_posts', text: 'Most Posts' }, // sort_by: likes
    { id: 'least_posts', text: 'Least Posts' }, // sort_by: likes
    { id: 'most_followers', text: 'Most Followers' }, // sort_by: followers
    { id: 'least_followers', text: 'Least Followers' }, // sort_by: followers
    // { id: 'random', text: 'Random' }, // sort_by: random
];

export const filterQueryParamMappings = {
    recent: { sort_by: 'date', sort_order: 'desc' },
    oldest: { sort_by: 'date', sort_order: 'asc' },
    most_posts: { sort_by: 'posts', sort_order: 'desc' },
    least_posts: { sort_by: 'posts', sort_order: 'asc' },
    most_followers: { sort_by: 'followers', sort_order: 'desc' },
    least_followers: { sort_by: 'followers', sort_order: 'asc' },
    // random: { sort_by: 'random' },
}

const PostCategoryFilters = (props) => {
    const { onChange = () => { }, resetPagination = () => { } } = props;

    const handleFilterChange = (selectedFilter) => {
        const { id } = selectedFilter;
        const filterQueryParams = filterQueryParamMappings[id];
        resetPagination();
        onChange(filterQueryParams);
    }

    const handleSearchCategories = (searchQuery) => {
        onChange({ search: searchQuery });
    }

    return (
        <React.Fragment>
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

            <SearchBar size='sm' textBoxProps={{
                placeholder: 'Search Categories',
                placeholderFocus: 'default',
                // isFocused: true
            }}
                buttonProps={{
                    size: 'xs'
                }}
                hasSearchIcon={false}
                onSearch={handleSearchCategories}
            />

        </React.Fragment>
    )
}

export default PostCategoryFilters;