import * as publish from '_api/publish.api';
import { USER_AVATAR_URL } from '_constants/API';
import { formatToLocalTime } from '_utils/timestampUtils';

export const formatFeedbackData = (data) => {
    const { createdAt } = data;
    const formattedResponse = { ...data, createdAt: createdAt };
    return formattedResponse;
}


const getFeedbacks = async (data, config = {}) => {
    try {
        // const response = await feedbacks.getFeedbacks(data, config);
        // const { data: feedbackData = [] } = response;
        // const formattedFeedbackData = feedbackData.map(formatFeedbackData)
        // return feedbackData || [];
    } catch (err) {
        throw err
    }
}


const saveBasicInformation = async (data, config = {}) => {
    try {
        const response = await publish.saveBasicInformation(data, config);
        const { data: feedbackData = {} } = response;
        // const formattedFeedbackData = formatFeedbackData(feedbackData);
        return feedbackData;
    } catch (err) {
        throw err
    }
}



export {
    saveBasicInformation,
    getFeedbacks
}