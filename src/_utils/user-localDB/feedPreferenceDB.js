import { CATEGORY_TRACKING_DBKEY, SUBSCRIBERS_TRACKING_DBKEY, SUBSCRIPTIONS_TRACKING_DBKEY, TRACKING_DBKEY, USERS_TRACKING_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";

export const setFontToLocal = (data) => {
    saveToLocalDB(TRACKING_DBKEY, data);
}


export const getLastSavedPreferenceKey = () => {
    return getFromLocalDB(TRACKING_DBKEY)
}


export const getLastSavedPreference = () => {
    const lastSavedPreferenceKey = getLastSavedPreferenceKey();
    switch (lastSavedPreferenceKey) {
        case CATEGORY_TRACKING_DBKEY:
            return 'category';
        case USERS_TRACKING_DBKEY:
            return 'user';
        case SUBSCRIBERS_TRACKING_DBKEY:
            return 'subscribers';
        case SUBSCRIPTIONS_TRACKING_DBKEY:
            return 'subscriptions';
        default:
            return 'category';
    }
}