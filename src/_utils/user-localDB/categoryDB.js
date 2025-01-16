import { CATEGORY_TRACKING_DBKEY, TRACKING_DBKEY } from "_constants/localStorageKeys";
import { getFromLocalDB, saveToLocalDB } from "_utils/localDB";

const maxCategoriesToTrack = 10;

export const setCategoryToLocal = (data) => {
    const { id, categoryId, categorySlug, categoryName } = data;
    const categoryData = { id: id || categoryId, categorySlug, categoryName };
    const trackedCategories = getFromLocalDB(CATEGORY_TRACKING_DBKEY) || [];

    if(trackedCategories.length > maxCategoriesToTrack){
        trackedCategories.splice(0, maxCategoriesToTrack - 1);
    }

    if(!trackedCategories.find(({ categorySlug: trackedDataCategorySlug }) => trackedDataCategorySlug === categorySlug)){
        trackedCategories.push(categoryData);
    }

    saveToLocalDB(TRACKING_DBKEY, CATEGORY_TRACKING_DBKEY);
    saveToLocalDB(CATEGORY_TRACKING_DBKEY, trackedCategories);
}


export const removeCategoryFromLocal = (data) => {
    const { id, categoryId, categorySlug, categoryName } = data;
    const trackedCategories = getFromLocalDB(CATEGORY_TRACKING_DBKEY) || [];

    const deletedCategoryIndex = trackedCategories.findIndex(({ categorySlug: trackedDataCategorySlug }) => trackedDataCategorySlug === categorySlug);
    trackedCategories.splice(deletedCategoryIndex, 1);

    saveToLocalDB(TRACKING_DBKEY, CATEGORY_TRACKING_DBKEY);
    saveToLocalDB(CATEGORY_TRACKING_DBKEY, trackedCategories);
}

export const getCategoryFromLocal = () => {
    return getFromLocalDB(CATEGORY_TRACKING_DBKEY) || [];
}