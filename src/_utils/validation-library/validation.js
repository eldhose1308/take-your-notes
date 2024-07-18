import validators, { isAValidEmail } from "./validators";

const createSchema = (formSchema) => {
    const rules = {}
    for(const field in formSchema){
        const fieldProperties = formSchema[field] || {};
        rules[field] = fieldProperties
    }
    
    // needs revamping and error handling fallbacks
    const validateObj = {
        rules: rules,
        validateField: (field, value='') => {
            const errors = [];
            const validator = validators(field)

            const fieldProperties = rules[field]

            const { required, min, max, exact, email, password } = fieldProperties;
            if (required) {
                const error = validator.isRequired(value);
                error && errors.push(error);
            }


            if (email) {
                const error = validator.isAValidEmail(value);
                error && errors.push(error);
            }

            if (password) {
                const error = validator.isNotAValidPassword(value);
                error && error.forEach(errorItem => errors.push(errorItem))
            }

            if (exact && value.length !== exact) {
                const error = validator.isExact(value, exact);
                error && errors.push(error);
            }
            if (min && value.length < min) {
                const error = validator.isMin(value, min);
                error && errors.push(error);
            }
            if (max && value.length > max) {
                const error = validator.isMax(value, max);
                error && errors.push(error);
            }

            return errors;
        },
        validate: (formValues) => { 
            const errors = {};
            for (const field in rules) {
                const fieldErrors = validateObj.validateField(field, formValues[field])
                if(fieldErrors.length){
                    errors[field] = {}
                    errors[field].type = 'ERROR'
                    errors[field].messages = fieldErrors
                }
            }
            return errors;
        }
    }

    return validateObj;
}

export default createSchema;