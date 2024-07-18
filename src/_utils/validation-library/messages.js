export const formatString = (string, ...args) => {
    let formattedString = string;

    for(let i = 0; i < args.length; i++) {
        const placeholder = `\\{${i}\\}`
        const valueToReplace = args[i]

        if(formattedString.includes(`{${i}`))
            formattedString = formattedString.replace(new RegExp(placeholder, 'g'), valueToReplace) 
    }

    return formattedString;
}

const VALIDATION_MSG =  {
    REQUIRED: '{0} is a required field from.',
    MIN: '{0} should have minimum {1} characters.',
    MAX: '{0} should have maximum {1} characters.',
    EXACT: '{0} should have exactly {1} characters.',
    VALID_EMAIL: '{0} should be a valid email',
    MIN_LOWERCASE: '{0} should have at least one lower case character',
    MIN_UPPERCASE: '{0} should have at least one upper case character',
    MIN_DIGIT: '{0} should have at least one digit',
    MIN_SPCL_CHAR: '{0} field should have at least one special character',
}

export default VALIDATION_MSG;