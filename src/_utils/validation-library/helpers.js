import VALIDATION_MSG, { formatString } from "./messages";

export const isRequired = (value, fieldName = null) => {
    if(!value.length) 
        return formatString(VALIDATION_MSG.REQUIRED, fieldName)
    
    return false;
}

export const isExact = (value, exact, fieldName = null) => {
    if(!value.length) return false;

    return value.length !== exact ? formatString(VALIDATION_MSG.EXACT ,fieldName, exact) : false
}

export const isMin = (value, min, fieldName = null) => {
    if(!value.length) return false;

    return value.length < min ? formatString(VALIDATION_MSG.MIN ,fieldName, min) : false
}

export const isMax = (value, max, fieldName = null) => {
    if(!value.length) return false;

    return value.length > max ? formatString(VALIDATION_MSG.MAX ,fieldName, max) : false    
} 

export const isAValidEmail = (value, fieldName = null) => {
    if(!value.length) return false;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    return !regex.test(value) ? formatString(VALIDATION_MSG.VALID_EMAIL, fieldName) : false;
}



export const isNotAValidPassword = (value, fieldName = null) => {
    if(!value.length) return false;
    
    const regexLowerCase = /[a-z]/;
    const regexUpperCase = /[A-Z]/;
    const regexDigit = /[0-9]/;
    const regexSpecialChar = /[!@#$%^&*(),.?"':{}|<>`~;]/;
    
    const err = [];
    if(!regexLowerCase.test(value)) err.push(formatString(VALIDATION_MSG.MIN_LOWERCASE, fieldName));
    if(!regexUpperCase.test(value)) err.push(formatString(VALIDATION_MSG.MIN_UPPERCASE, fieldName));
    if(!regexDigit.test(value)) err.push(formatString(VALIDATION_MSG.MIN_DIGIT, fieldName));
    if(!regexSpecialChar.test(value)) err.push(formatString(VALIDATION_MSG.MIN_SPCL_CHAR, fieldName));


    return err.length ? err : false;
}

