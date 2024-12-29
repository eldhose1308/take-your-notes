import React from "react";
import { Link } from "react-router-dom";

const SeeMoreButton = (props) => {
    const { linkUrl, text='See More ...' } = props;

    return (
        <div className='text-xs py-2 px-2 bg-transparent text-default border border-secondary hover-custom hover-text-accent flex justify-center rounded-md w-full cursor-pointer'>
            <Link to={linkUrl} className="flex w-full items-center justify-center">
                <span className=''>
                    {text}
                </span>
            </Link>
        </div>
    )
}

export default SeeMoreButton;