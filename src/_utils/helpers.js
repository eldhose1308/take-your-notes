export const getBaseURL = () => {
    const { protocol, host, pathname } = window.location;
    const pathSegments = pathname.split('/').filter(segment => segment); // Split and remove empty segments
    const basePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '';

    return `${protocol}//${host}${basePath}`;
}