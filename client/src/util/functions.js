export const getTheme = () => {
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (localStorageTheme && localStorageTheme !== "null") {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
};

export const chooseAtRandomFromArray = (array) => {
  const position = Math.floor(Math.random() * array.length);
  return array[position];
};
