import { useState, useReducer, useEffect } from "react";

const validationStateReducer = (state, action) => {
    const { type, data={} } = action;
    switch(type){
        case 'SET':
            const { fieldName, payload } = data
            return {...state, [fieldName] : payload }
        case 'SET_ALL':
            return {...state, ...data}
        case 'RESET':
            return {...state, [data] : []}   
        case 'RESET_ALL':
            return {}    
        default:
            return state;    
    }
}

const useForm = ({ schema, initialValues={} }) => {
    // rename error variable into formState which holds messages and message types
    const [ validations, setValidations ] = useReducer(validationStateReducer, {})

    const [ formFields, setFormFields ] = useState(initialValues)

    const [ isSubmitting, setIsSubmitting ] = useState(false)

    const register = (fieldName) => {
        return {
            onChange: (value, e) => { 
                // const { value } = target
                const validationObj = schema.validateField(fieldName, value)
                setValidations({ type: 'SET', data: { fieldName, payload: { type: 'info', messages: validationObj } } }) // make this as type info
                setFormFields((prevFieldState) => ({ ...prevFieldState, [fieldName]: value  }))
            },

            value: formFields[fieldName],
            disabled: isSubmitting
        }

    }

    const submit = (submitCallback) => {
        return async () => {
            const validationObj = schema.validate(formFields)
            if(Object.keys(validationObj).length === 0){
                setValidations({ type: 'RESET_ALL' })

                setIsSubmitting(true)
                try{
                    await submitCallback(formFields)
                }catch(err){
                    throw err;
                }finally{
                    setIsSubmitting(false)
                }

            }else{
                setValidations({ type: 'SET_ALL', data: validationObj })
            }
        }
    }

    const reset = () => {
        setFormFields(initialValues)
        setValidations({ type: 'RESET_ALL' })
        setIsSubmitting(false);
    }

    return {
        submit,
        reset,
        register,
        errors: validations,
        formFields,
        isSubmitting
    }
}

export default useForm;