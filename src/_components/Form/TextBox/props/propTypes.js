import PropTypes from 'prop-types';

export const propTypes = {
    inputType: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    labelName: PropTypes.string,
    placeHolder: PropTypes.string,
    validationMessage: PropTypes.shape({
        type: PropTypes.string,
        message: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ])
    }),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    customClass: PropTypes.string,
    regEx: PropTypes.string,
    customProps: PropTypes.object,
    focusInput: PropTypes.bool
}