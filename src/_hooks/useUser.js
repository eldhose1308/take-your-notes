import { getCategoryFromLocal } from "_utils/user-localDB/categoryDB"
import { getLastSavedPreference, getLastSavedPreferenceKey } from "_utils/user-localDB/feedPreferenceDB"
import { getFontFromLocal } from "_utils/user-localDB/fontDB"
import { getNavigatorFromLocal } from "_utils/user-localDB/navigatorDB"
import { getThemeFromLocal } from "_utils/user-localDB/themeDB"
import { getUserFeedPreferenceFromLocal } from "_utils/user-localDB/usersFeedDB"
import { getUserSubscriberFeedPreferenceFromLocal, getUserSubscriptionFeedPreferenceFromLocal } from "_utils/user-localDB/usersSubFeedDB"

const useUser = () => {
   
    const getUserToken = () => {

    }

    const setUserPreferences = (data) => {

    }
    
    const getPostFeedPreferences = () => {
        const usersList = getUserFeedPreferenceFromLocal();
        const categoriesList = getCategoryFromLocal();
        const hasSubscriber = getUserSubscriberFeedPreferenceFromLocal();
        const hasSubscription = getUserSubscriptionFeedPreferenceFromLocal();
        const lastSavedPreference = getLastSavedPreference();
        
        const users = usersList || '';
        const categories = categoriesList || '';
        const subscribers = hasSubscriber || '';
        const subscriptions = hasSubscription || '';

        const userIds = usersList.map((user) => user.id);
        const categoryIds = categoriesList.map((user) => user.id);

        const filterPayload = {};

        if(lastSavedPreference === 'user'){
            filterPayload.users = userIds;
        }

        if(lastSavedPreference === 'category'){
            filterPayload.categories = categoryIds;
        }

        if(lastSavedPreference === 'subscribers' && hasSubscriber){
            filterPayload.subscribers = hasSubscriber;
        }
        if(lastSavedPreference === 'subscriptions' && hasSubscription){
            filterPayload.subscriptions = hasSubscription;
        }


        return {
            data: {
                users,
                categories,
                subscribers,
                subscriptions
            },
            payload: filterPayload
        }
    }

    const getUserPreferences = () => {
        const localDBTheme = getThemeFromLocal();
        const localDBFont = getFontFromLocal();
        const localDBNavigatorMode = getNavigatorFromLocal();
        
        const theme = localDBTheme || 'system';
        const font = localDBFont || 'classic-font';
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
        getUserPreferences,
        getPostFeedPreferences
    }
}

export default useUser;