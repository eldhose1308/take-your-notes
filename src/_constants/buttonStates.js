const buttonStates = {
    signin: {
        none: 'Sign In with Email',
        loading: 'Signing In with Email',
        failure: 'Unable to Sign In with Email',
        completed: 'Signed In with Email',
    },
    signup: {
        none: 'Sign Up with Email',
        loading: 'Signing Up with Email',
        failure: 'Unable to Sign Up with Email',
        completed: 'Signed Up with Email',
    },
    upload: {
        none: 'Upload',
        loading: 'Uploading',
        failure: 'Failed',
        completed: 'Completed',
    },
    create: {
        none: 'Create',
        loading: 'Creating',
        failure: 'Failed',
        completed: 'Created',
    },
    update: {
        none: 'Update',
        loading: 'Updating',
        failure: 'Failed',
        completed: 'Updated',
    },
};

export default buttonStates;