export const toggleColorScheme = (newTheme) => {
    const body = document.body;
    const classToReplace = newTheme === 'light' ? 'dark' : 'light';

    body.classList.remove('system');
    if (body.classList.contains(classToReplace)) {
        body.classList.remove(classToReplace);
        body.classList.add(newTheme);
    } else {
        body.classList.remove(classToReplace);
        body.classList.add(newTheme);
    }
}

export const toggleFont = (newFont) => {
    const body = document.body;
    const classToReplace = newFont === 'modern-font' ? 'classic-font' : 'modern-font';

    if (body.classList.contains(classToReplace)) {
        body.classList.remove(classToReplace);
        body.classList.add(newFont);
    } else {
        body.classList.remove(classToReplace);
        body.classList.add(newFont);
    }
}