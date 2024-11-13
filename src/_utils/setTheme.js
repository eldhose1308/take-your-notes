import { toggleColorScheme } from "./domUtils";

// const setTheme = (theme) => document.getElementsByTagName('body')[0].className = theme;
const setTheme = (theme) => toggleColorScheme(theme);

export default setTheme;