const themes = ["white", "dark", "bruh"];
const theme_name = "theme";

function setCookie(themeID) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `theme=${themeID}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}


function applyTheme(themeID) {
    const theme = themes[themeID];
    document.getElementById(theme_name).href = `assets/themes/${theme}.css`;
}

function changeTheme() {
    console.log("1");
    let currentThemeID = parseInt(getCookie('theme'), 10);
    if (isNaN(currentThemeID)) currentThemeID = 0;
    let nextThemeID = currentThemeID + 1;
    if (nextThemeID >= themes.length) nextThemeID = 0;
    applyTheme(nextThemeID);
    setCookie(nextThemeID);
}

window.addEventListener('DOMContentLoaded', () => {
    let themeID = getCookie('theme');
    if (themeID === null) {
        themeID = 0;
        setCookie(themeID);
    } else themeID = parseInt(themeID, 10);
    applyTheme(themeID);
    
    const button = document.getElementById('theme-button');
    if (button) button.onclick = changeTheme;
});