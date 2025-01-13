import * as subscriptions from '_api/subscriptions.api'

const subscribeUser = async (data, config = {}) => {
    try{
        const response = await subscriptions.subscribeUser(data, config);
        return response;
    }catch(err){
        throw err
    }
}


const unSubscribeUser = async (data, config = {}) => {
    try{
        const response = await subscriptions.unSubscribeUser(data, config);
        return response;
    }catch(err){
        throw err
    }
}





export {
    subscribeUser,
    unSubscribeUser
}