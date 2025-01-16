import { TRACKING_DBKEY, USERS_TRACKING_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";

const maxCategoriesToTrack = 10;

export const setUserFeedPreferenceToLocal = (data) => {
    const { id, categoryId, userName, fullName } = data;
    const categoryData = { id: id || categoryId, userName, fullName };
    const trackedCategories = getUserFeedPreferenceFromLocal();

    if(trackedCategories.length > maxCategoriesToTrack){
        trackedCategories.splice(0, maxCategoriesToTrack - 1);
    }

    if(!trackedCategories.find(({ userName: trackedDataCategorySlug }) => trackedDataCategorySlug === userName)){
        trackedCategories.push(categoryData);
    }

    saveToLocalDB(TRACKING_DBKEY, USERS_TRACKING_DBKEY);

    saveToLocalDB(USERS_TRACKING_DBKEY, trackedCategories);
}


export const removeUserFeedPreferenceFromLocal = (data) => {
    const { id, categoryId, userName, fullName } = data;
    const trackedCategories = getUserFeedPreferenceFromLocal();

    const deletedCategoryIndex = trackedCategories.findIndex(({ userName: trackedDataCategorySlug }) => trackedDataCategorySlug === userName);
    trackedCategories.splice(deletedCategoryIndex, 1);

    saveToLocalDB(TRACKING_DBKEY, USERS_TRACKING_DBKEY);
    saveToLocalDB(USERS_TRACKING_DBKEY, trackedCategories);
}

export const getUserFeedPreferenceFromLocal = () => {
    return getFromLocalDB(USERS_TRACKING_DBKEY) || [];
}