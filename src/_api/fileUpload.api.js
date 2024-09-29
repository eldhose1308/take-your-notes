import { BASE_URL } from "_constants"
import { AccessAPI } from "_utils"

const upload = (payload) => {
    return new AccessAPI(BASE_URL + 'fileUpload').post(payload)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err.response
        })
} 

const get = async (data, config = {}) => {
    return new AccessAPI(BASE_URL + 'fileUpload').get()
    .then((res) => {
        return res
    }).catch((err) => {
        throw err.response
    })
}


export {
    upload,
    get
}
