import { communitiesList, communityById } from "_mockData/communities.mock"

const getAll = (data, config={}) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(communitiesList)
        }, 1200)
    })
}

const getById = (data, config={}) => {
    return Promise.resolve(communityById)
}

export {
    getAll,
    getById
}