import * as interactions from '_api/interactions.api'

const interactionWithPost = async (data, config = {}) => {
    try{
        const response = await interactions.interactionWithPost(data, config);
        return response;
    }catch(err){
        throw err
    }
}





export {
    interactionWithPost,
}