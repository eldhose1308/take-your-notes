import { BASE_URL } from "_constants";
import userData from "_mockData/user.mock";
import { AccessAPI } from "_utils";

const login = (data, config={}) => {
    const { setProgress, abortRequest } = config;

    
    let progress = 0;
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            progress = progress + 10
            setProgress && setProgress(progress)
            if (progress === 100) {
                clearInterval(intervalId);
                if(Math.floor(Math.random()*10)%2===0)
                    resolve(userData)
                else
                    reject('Byee')    
            }
        }, 100)
    })
}

const signin = (payload) => {
    return new AccessAPI(BASE_URL + 'auth/signin').post(payload)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
} 

const signup = (payload) => {
    return new AccessAPI(BASE_URL + 'auth/signup').post(payload)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
} 

export {
    login,
    signin,
    signup
}

