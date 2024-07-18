import { useState } from "react";

const useDrawer = () => {
    const [ isDrawerOpen, setIsDrawerOpen ] = useState(false)

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    const openDrawer = () => {
        setIsDrawerOpen(true)
    }

    return {
        isDrawerOpen,
        closeDrawer,
        openDrawer
    }
}

export default useDrawer;