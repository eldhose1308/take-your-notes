const validationRules = () => {

    const validator = {
        fieldProperties: {},

        required: function() {
            this.fieldProperties.isRequired = true;
            return this;
        },

        min: function (value) {
            this.fieldProperties.min = value;
            return this;
        },

        max: function (value) {
            this.fieldProperties.max = value;
            return this;
        },

        exact: function (value) {
            this.fieldProperties.exact = value;
            return this;
        },
    };
    return validator
}




const createValidation = (formSchema) => {
    const fieldsNormalised = {}
    for(const field in formSchema){
        fieldsNormalised[field] = formSchema[field].fieldProperties
    }
    
    return {
        rules: fieldsNormalised,
        validate: (formValues) => {
            const errors = {};
            for (const field in fieldsNormalised) {
                const fieldProperties = fieldsNormalised[field]
                const value = formValues[field];
                errors[field] = [];
                if (fieldProperties.exact && value.length !== fieldProperties.exact) {
                    errors[field].push(`Value "${field}" does not have exact length of ${fieldProperties.exact}.`);
                }
                if (fieldProperties.min && value.length < fieldProperties.min) {
                    errors[field].push(`Value "${field}" is too short. Minimum length is ${fieldProperties.min} characters.`);
                }
                if (fieldProperties.max && value.length > fieldProperties.max) {
                    errors[field].push(`Value "${field}" is too long. Maximum length is ${fieldProperties.max} characters.`);
                }
            }
            return errors;
        }
    }
}




const formSchema = createValidation({
    username: validationRules().min(1).exact(2),
    password: validationRules().exact(3).max(4),
})


const formValues = {
    username: 'Joe',
    password: '1112223'
}

console.log(formSchema)

console.log(formSchema.validate(formValues))



// const formSchema = {
//     username: validationRules().min(1).exact(2),
//     password: validationRules().min(3).max(4),
// }









// console.log('formSchema', formSchema)



// for (let field in formSchema) {
//     const validator = formSchema[field];
//     console.log(validate(field, validator, formValues))
// }



