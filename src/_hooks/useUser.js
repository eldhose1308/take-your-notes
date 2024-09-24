import { getNavigatorFromLocal } from "_utils/user-localDB/navigatorDB"
import { getThemeFromLocal } from "_utils/user-localDB/themeDB"

const useUser = () => {
   
    const getUserToken = () => {

    }

    const setUserPreferences = (data) => {

    }

    const getUserPreferences = () => {
        const localDBTheme = getThemeFromLocal();
        const localDBNavigatorMode = getNavigatorFromLocal();
        
        const theme = localDBTheme || 'system';
        const navigatorMode = localDBNavigatorMode || 'explorer';
        return {
            theme,
            fontMode: 'casual',
            navigatorMode
        }
    }

    return {
        getUserToken,
        setUserPreferences,
        getUserPreferences
    }
}

export default useUser;