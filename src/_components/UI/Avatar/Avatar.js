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

const Avatar = ({ src, name = '', alt = 'Avatar', size, hasPreview=true, hasZoom=true, className, ...props }) => {
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
                {src && !imageError ? <img onClick={handleImageClick} onError={handleError} alt={name || alt} className={`flex object-cover w-full h-full transition-opacity duration-500 border-2 ${hasZoom ? 'scale-150' : ''}`} src={src} /> :
                    <div>{nameImg}</div>}
            </span>
            {isPreviewOpen && (<div className="flex items-center justify-center overlay overlay-semi z-250">
                <div onClick={handleImageClose} className="relative flex w-full h-full items-center justify-center">
                    <img src={src} alt="Full Preview" className="h-48 w-48 object-cover" />

                    <span onClick={handleImageClose} className="absolute top-0 right-0 border hover-text-destructive rounded-full p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-square-x"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                    </span>
                </div>
            </div>)}

        </React.Fragment>
    )
}

export default Avatar