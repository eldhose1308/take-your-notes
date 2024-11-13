import { getFontFromLocal } from "_utils/user-localDB/fontDB"
import { getNavigatorFromLocal } from "_utils/user-localDB/navigatorDB"
import { getThemeFromLocal } from "_utils/user-localDB/themeDB"

const useUser = () => {
   
    const getUserToken = () => {

    }

    const setUserPreferences = (data) => {

    }

    const getUserPreferences = () => {
        const localDBTheme = getThemeFromLocal();
        const localDBFont = getFontFromLocal();
        const localDBNavigatorMode = getNavigatorFromLocal();
        
        const theme = localDBTheme || 'system';
        const font = localDBFont || 'modern-font';
        const navigatorMode = localDBNavigatorMode || 'explorer';
        return {
            theme,
            fontMode: font,
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