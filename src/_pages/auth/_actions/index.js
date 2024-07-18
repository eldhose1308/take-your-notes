import { BASE_URL } from "_constants";
import { AccessAPI } from "_utils";

const signupUser = (payload = {}) => {
        return new AccessAPI(BASE_URL + 'auth/signup').post(payload)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err.response
        })
    
}

export {
    signupUser
}