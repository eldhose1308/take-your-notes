import { SUBSCRIBERS_TRACKING_DBKEY, SUBSCRIPTIONS_TRACKING_DBKEY, TRACKING_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, removeFromLocalDB, saveToLocalDB } from "_utils/localDB";


export const setUserSubscriberFeedPreferenceToLocal = (data) => {
    saveToLocalDB(TRACKING_DBKEY, SUBSCRIBERS_TRACKING_DBKEY);
    data ? saveToLocalDB(SUBSCRIBERS_TRACKING_DBKEY, data) : removeUserSubscriberFeedPreferenceFromLocal();
}

export const removeUserSubscriberFeedPreferenceFromLocal = () => {
    removeFromLocalDB(SUBSCRIBERS_TRACKING_DBKEY);
}

export const getUserSubscriberFeedPreferenceFromLocal = () => {
    return getFromLocalDB(SUBSCRIBERS_TRACKING_DBKEY);
}


export const setUserSubscriptionFeedPreferenceToLocal = (data) => {
    saveToLocalDB(TRACKING_DBKEY, SUBSCRIPTIONS_TRACKING_DBKEY);
    data ? saveToLocalDB(SUBSCRIPTIONS_TRACKING_DBKEY, data) : removeUserSubscriptionFeedPreferenceFromLocal();
}

export const removeUserSubscriptionFeedPreferenceFromLocal = () => {
    removeFromLocalDB(SUBSCRIPTIONS_TRACKING_DBKEY);
}

export const getUserSubscriptionFeedPreferenceFromLocal = () => {
    return getFromLocalDB(SUBSCRIPTIONS_TRACKING_DBKEY);
}