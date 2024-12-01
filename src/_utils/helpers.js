export const getBaseURL = () => {
    const { protocol, host } = window.location;
    return `${protocol}//${host}`;
}