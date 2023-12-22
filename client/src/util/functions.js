import { giftCategories, storyContent } from "./content";

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

export const getGiftByCategory = (showAll, choiceCategory) => {
  let gifts =
    choiceCategory === "show all"
      ? giftCategories
      : giftCategories.filter(({ category }) => category === choiceCategory);

  return [gifts.slice(0, 6), showAll ? gifts.slice(6) : [], gifts.length > 6];
};

export const getStoryCategory = (choiceCategory) => {
  return choiceCategory === "show all"
    ? storyContent
    : storyContent.filter(({ category }) => category === choiceCategory);
};

export const capitalize = (word) =>
  word ? `${word[0].toUpperCase()}${word.slice(1)}` : "";

export const capitalizeCamelCase = (string) => {
  const capitals = string.match(/[A-Z]/g);

  const result = capitals
    ? capitals.reduce((accum, letter) => {
        accum = accum.replace(letter, ` ${letter.toLowerCase()}`);
        return accum;
      }, string)
    : string;

  return capitalize(result);
};

export const extractCountries = (data) => {
  const result = (data || []).map(({ name }) => ({ name, desc: name }));
  return [{ name: "", desc: "Select" }, ...result];
};

export const getStatesByCountry = (data, country) => {
  const countryResult = (data || []).find(({ name }) => country === name);

  return extractCountries(countryResult?.states || []);
};
