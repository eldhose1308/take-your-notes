import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";
import { constructUrl } from "_utils/AccessAPI";

const getFeedbacks = async (data, config = {}) => {
    const postsURL = constructUrl(BASE_URL + 'feedbacks', data);
    return new AccessAPI(postsURL).get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

const saveBasicInformation = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'publish/basic-info').post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

export {
    saveBasicInformation,
    getFeedbacks
}