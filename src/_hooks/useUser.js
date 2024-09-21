import { getThemeFromLocal } from "_utils/user-localDB/themeDB"

const useUser = () => {
   
    const getUserToken = () => {

    }

    const setUserPreferences = (data) => {

    }

    const getUserPreferences = () => {
        const localDBTheme = getThemeFromLocal();
        const theme = localDBTheme || 'system';
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