import React, { useState, useEffect } from "react";

import { Button } from "_components/Form";

const ContentSwitcher = ({ isVisible, children, ...props }) => {
    const { direction='right' } = props

    const [isContentVisible, setIsContentVisible] = useState(isVisible)
    const [isAnimating, setIsAnimating] = useState(false)


    const ANIMATION_DIR = {
        'right': {
            show: 'animate-slide-in-x',
            hide: 'animate-slide-out-x'
        },
        'left': {
            show: 'animate-slide-in-x-r',
            hide: 'animate-slide-out-x-l'
        }
    }

    const ARROW_ICONS = {
        'right': {
            show: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="m12 16 4-4-4-4" />
                </svg>
            ),
            hide: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-left">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 12H8" />
                    <path d="m12 8-4 4 4 4" />
                </svg>
            )
        },
        'left': {
            show: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-left">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 12H8" />
                    <path d="m12 8-4 4 4 4" />
                </svg>
            ),
            hide: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-right">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="m12 16 4-4-4-4" />
                </svg>
            )
        }
    };

    const handleToggleVisiblity = () => {
        if (isContentVisible) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsContentVisible(false);
                setIsAnimating(false);
            }, 500);
        } else {
            setIsContentVisible(true);
        }
    }

    return (
        <React.Fragment>
            <div className={`content-switcher ${isContentVisible ? ANIMATION_DIR[direction].show : ''} ${isAnimating ? ANIMATION_DIR[direction].hide : ''}`}>                
                <Button width='none' variant='ghost' size='xs' onClick={handleToggleVisiblity}>
                {isContentVisible ? (
                    ARROW_ICONS[direction].show
                ) : (
                    ARROW_ICONS[direction].hide
                )}
            </Button>
                {isContentVisible || isAnimating ? children : null}
            </div>
        </React.Fragment>
    )
}

export default ContentSwitcher