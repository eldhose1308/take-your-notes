import React, { createContext, useContext, useState } from "react";
import TopLoader  from '_components/UI/TopLoader/TopLoader'

const LoaderContext = createContext();

const TopLoaderProvider = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ progress, setProgress ] = useState(0)

    const showTopLoader = () => {
        setProgress(0)
        setIsLoading(true)
    }

    const hideTopLoader = () => {
        setTimeout(() => {
            setProgress(0)
            setIsLoading(false)
        }, 1000)
    }

    const loaderObj = {
        showTopLoader, hideTopLoader, isLoading, progress, setProgress
    }

    return (
        <LoaderContext.Provider value={loaderObj}>
            <TopLoader progress={progress} isLoading={isLoading} />
            {children}
        </LoaderContext.Provider>
    )
}

const useTopLoader = () => {
    const context = useContext(LoaderContext);

    if(!context){
        throw new Error('useTopLoader must be used within TopLoaderProvider')
    }

    return context
}

export { TopLoaderProvider, useTopLoader };