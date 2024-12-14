import React, { useState } from "react"

import cva from '_utils/createVariantClassNames';

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

const Avatar = ({ src, name = '', alt = 'Avatar', size, hasPreview=true, className, ...props }) => {
    const [imageError, setImageError] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const classNames = buttonVariants({
        size, className,
    });

    const nameImg = name && name.split(' ').map(word => word[0]).join('').slice(0, 3).toUpperCase();

    const handleImageClick = (e) => {
        if(hasPreview){
            e.preventDefault();
            e.stopPropagation();
            setIsPreviewOpen(true);
        }
    }

    const handleImageClose = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsPreviewOpen(false);
    }

    const handleError = () => {
        setImageError(true);
    }

    // load a placeholder span and hide img src, then onLoad show the img src
    return (
        <React.Fragment>
            <span className={classNames} {...props}>
                {src && !imageError ? <img onClick={handleImageClick} onError={handleError} alt={name || alt} className="flex object-cover w-full h-full transition-opacity duration-500 border-2 scale-150" src={src} /> :
                    <div>{nameImg}</div>}
            </span>
            {isPreviewOpen && (<div className="flex items-center justify-center overlay overlay-semi z-50">
                <div className="relative">
                    <img src={src} alt="Full Preview" className="h-48 w-48 object-cover" />

                    <span onClick={handleImageClose} className="absolute border text-destructive rounded-full p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-x"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                    </span>
                </div>
            </div>)}

        </React.Fragment>
    )
}

export default Avatar