import React from "react";

const UserProfileItems = (props) => {
    const { icon, text, link, action, className, ...extraProps } = props;

    return (
        <div className={`flex cursor-pointer my-2 text-sm w-full justify-between ${className}`} {...extraProps}>
            <div className="flex px-2 py-2">

                <span className="">
                    {icon}
                </span>
                <span className="mx-2">
                    {text}
                </span>
            </div>

            {action ? (
                <span className="flex px-2 py-2 mx-2">
                    {action}
                </span>
            ) : null}
        </div>
    )
}

export default UserProfileItems