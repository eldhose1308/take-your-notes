import React, { useState } from "react";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false)

    const Loader = () => {
        // render loader with the type given
        return (
            <div className="w-full animate-pulse">
                <div className="h-3 bg-custom rounded-md mb-3"></div>
                <div className="h-3 bg-custom rounded-md mb-3 w-half"></div>
                <div className="h-3 bg-custom rounded-md mb-3 w-1/4"></div>
                <div className="h-3 bg-custom rounded-md mb-3 w-3/4"></div>
            </div>
        )
    }

    return {
        isLoading,
        setIsLoading,
        Loader
    }
}

export default useLoading;