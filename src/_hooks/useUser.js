const useUser = () => {
   
    const getUserToken = () => {

    }

    const setUserPreferences = (data) => {

    }

    const getUserPreferences = () => {
        const theme = localStorage.getItem('theme') || 'system';
        return {
            theme,
            fontMode: 'casual',
            navigatorMode: 'compact'
        }
    }

    return {
        getUserToken,
        setUserPreferences,
        getUserPreferences
    }
}

export default useUser;