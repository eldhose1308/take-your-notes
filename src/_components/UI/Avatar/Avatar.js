import React from "react"

import cva from '_utils/createVariantClassNames';

const buttonVariants = cva(
    'avatar flex justify-center items-center overflow-hidden outline-none text-sm bg-another text-default-foreground rounded-full',
    {
        variants: {
    
            size: {
                xs: "w-8 h-7",
                sm: "w-10 h-10",
                md: "w-10 h-10",
                lg: "h-11 w-16",
                xl: ""
            },
            
        },
        defaultVariants: {
            size: 'sm',
        }
    }
)

const Avatar = ({ src, name='', alt='Avatar', size, className, ...props }) => {
    const classNames = buttonVariants({
        size, className,
    });

    const nameImg = name.split(' ').map(word => word[0]).join('').slice(0,3).toUpperCase();

    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU"

    return (
        <span className={classNames} {...props}>
            {/* {nameImg ? nameImg : null} */}
            {src ? <img alt={name || alt} className="flex object-cover w-full h-full transition-opacity duration-500" src={src} /> : 
            <div>{nameImg}</div>}
        </span>
    )
}

export default Avatar