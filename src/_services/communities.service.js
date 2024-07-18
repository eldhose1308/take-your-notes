import * as community from '_api/communities.api'

const getAllCommunities = async (data, config={}) => {
    const response = await community.getAll(data, config)
    return response
}

export {
    getAllCommunities
}