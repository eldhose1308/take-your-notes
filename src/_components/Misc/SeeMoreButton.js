import React from "react";
import { Link } from "react-router-dom";

const SeeMoreButton = (props) => {
    const { linkUrl, text='See More ...' } = props;

    return (
            <Link to={linkUrl} className="text-xs py-2 px-2 bg-transparent text-default border border-secondary hover-custom hover-text-accent flex justify-center rounded-md w-full cursor-pointer">
                <span className=''>
                    {text}
                </span>
            </Link>
    )
}

export default SeeMoreButton;