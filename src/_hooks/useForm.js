import { useToast } from "_contexts/ToastProvider";
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

const useForm = ({ schema, initialValues={}, messages={} }) => {
    const { success, error } = messages || {};
    const { heading: successHeading='The request is submitted succesfully', description: successDescription } = success || {};
    const { heading: errorHeading='The request is not submitted succesfully', description: errorDescription } = error || {};

    const { toast } = useToast()

    // rename error variable into formState which holds messages and message types
    const [ validations, setValidations ] = useReducer(validationStateReducer, {})

    const [ formFields, setFormFields ] = useState(initialValues)

    const [ isSubmitting, setIsSubmitting ] = useState(false)

    const [ errorMessages, setErrorMessages ] = useState([]);

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
            setErrorMessages([]);
            const validationObj = schema.validate(formFields)
            if(Object.keys(validationObj).length === 0){
                setValidations({ type: 'RESET_ALL' })

                setIsSubmitting(true)
                try{
                    await submitCallback(formFields)
                    toast({
                        heading: successHeading,
                        description: successDescription,
                        options: { position: 'top-right' }
                    }).success()
                }catch(err){
                    const { message } = err;
                    toast({
                        heading: errorHeading,
                        description: message,
                        options: { position: 'top-right' }
                    }).error()
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
        setErrorMessages([]);
    }

    return {
        submit,
        reset,
        register,
        errors: validations,
        errorMessages,
        formFields,
        isSubmitting
    }
}

export default useForm;