import { useReducer } from 'react'

const validationStateReducer = (state, action) => {
    const { type, data={} } = action;
    switch(type){
        case 'SET':
            return {...state, ...data}
        case 'RESET':
            return {...state, [data] : {}}   
        case 'RESET_ALL':
            return {}    
        default:
            return state;    
    }
}

const useValidationMsg = (initialState = {}) => {
    const [ validationObj, setValidationObj ] = useReducer(validationStateReducer, initialState)
    
    const resetValidationObj = (key) => setValidationObj({ type: 'RESET', data: key })
    const resetAllValidationObj = (key) => setValidationObj({ type: 'RESET_ALL' })

    const setValidationObjError = (message, key) => setValidationObj({ type: 'SET', data: {[key]: {type: message ? 'error' : 'info', message}  } })
    const setValidationObjInfo = (message, key) => setValidationObj({ type: 'SET', data: {[key]: {type: 'info', message}  } })

    return { 
        validationObj, setValidationObj, 
        setValidationObjError, setValidationObjInfo, 
        resetValidationObj, resetAllValidationObj 
    };
}

export default useValidationMsg;