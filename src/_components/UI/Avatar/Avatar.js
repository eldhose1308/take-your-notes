import React, { useState } from "react"

import cva from '_utils/createVariantClassNames';
import { USER_AVATAR_URL } from "_constants/API";

const buttonVariants = cva(
    'avatar flex justify-center items-center overflow-hidden outline-none text-sm bg-another text-default-foreground rounded-full',
    {
        variants: {
    
            size: {
                xs: "w-10 h-8",
                sm: "w-10 h-10",
                md: "w-10 h-10",
                lg: "h-14 w-16",
                xl: ""
            },
            
        },
        defaultVariants: {
            size: 'sm',
        }
    }
)

const Avatar = ({ src, name='', alt='Avatar', size, className, ...props }) => {
    const [imageError, setImageError] = useState(false);

    const classNames = buttonVariants({
        size, className,
    });

    const nameImg = name && name.split(' ').map(word => word[0]).join('').slice(0,3).toUpperCase();
    
    const handleError = () => {
        setImageError(true);
    }

    // load a placeholder span and hide img src, then onLoad show the img src
    return (
        <span className={classNames} {...props}>
            {src && !imageError ? <img onError={handleError} alt={name || alt} className="flex object-cover w-full h-full transition-opacity duration-500" src={src} /> : 
            <div>{nameImg}</div>}
        </span>
    )
}

export default Avatar