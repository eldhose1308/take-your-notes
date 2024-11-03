import React, { useMemo } from "react";

import Combobox, { ComboboxContent, ComboboxTrigger } from "_components/UI/Combobox/Combobox";

const PostCategory = ({ category, categoryList, onChange=()=>{} }) => {
    const { id, categoryName: label } = useMemo(() => category || {}, [category]);

    return (
        <Combobox key={`${id}_${label}`} >
            <ComboboxTrigger>
                <span className='flex mx-1 items-center text-secondary cursor-pointer'>
                    <span className=''>{label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"></path></svg>
                </span>
            </ComboboxTrigger>
            <ComboboxContent
                heading='Select a category'
                options={categoryList}
                onChange={onChange}
                selectedValue={id}
                idKey='id'
                labelKey='categoryName'
            />
        </Combobox>)
}

export default PostCategory;