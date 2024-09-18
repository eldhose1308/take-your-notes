export const redirectOnUnAuthorised = () => {
    window.location.href = '#/signup';
}

export const redirectOnAuthorised = () => {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('/')[0] + '//' + currentUrl.split('/')[2]; 

    window.location.href = `${baseUrl}/#/user/home`;
    // window.location.href = '#/user/home';
}