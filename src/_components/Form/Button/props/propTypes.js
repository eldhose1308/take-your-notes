import PropTypes from 'prop-types'; 

export const propTypes = {
    text: PropTypes.string.isRequired,
    successText: PropTypes.string,
    failureText:  PropTypes.string,
    palette: PropTypes.string,
    customWrapClass: PropTypes.string,
    customClass: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onAsyncClick: PropTypes.func 

}