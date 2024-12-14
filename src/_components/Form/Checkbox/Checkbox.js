import React from "react";

import './Checkbox.css';
import cva from '_utils/createVariantClassNames';


const Checkbox = (props) => {
    const { variant, width, size, validationMsg = {}, onChange = () => { }, placeholderFocus, className, labelName, labelClassName, labelProps, ...remainingProps } = props;
    const { type: messageType = 'default', messages = [] } = validationMsg;


    const handleChange = (e) => {
        const { checked } = e.target
        onChange(checked, e)
    }


    return (
        <div className="flex flex-col">
            <div className="inline-flex relative">

                <input 
                    type="checkbox" 
                    value="" 
                    onChange={handleChange}
                />

                {labelName && (
                    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {labelName}
                    </label>
                )}

            </div>

        </div>
    )
}

export default Checkbox;