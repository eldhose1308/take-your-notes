import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";


const interactionWithPost = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'interactions').post(data)
    .then((res) => {
        return res
    }).catch((err) => {
        throw err
    })
}

export {  
    interactionWithPost,
}