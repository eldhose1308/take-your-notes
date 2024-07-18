import { isRequired, isMin, isMax, isExact, isAValidEmail, isNotAValidPassword } from "./helpers";

const validators = (fieldId) => {
    const fieldName = fieldId ? (fieldId.charAt(0).toUpperCase() + fieldId.substring(1)) : 'This';

    const funcs = {
        isRequired : (value) => isRequired(value, fieldName),
        isExact: (value, exact) => isExact(value, exact, fieldName),
        isMin: (value, min) => isMin(value, min, fieldName),
        isMax: (value, max) => isMax(value, max, fieldName),
        isAValidEmail : (value) => isAValidEmail(value, fieldName),
        isNotAValidPassword: (value) => isNotAValidPassword(value, fieldName)
    }

    return funcs
}

export default validators;