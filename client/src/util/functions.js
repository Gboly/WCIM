import { courseDuration, giftCategories } from "./content";

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

export const prepareOptions = (data) => {
  const result = (data || []).map((item) => ({
    name: item?.name || item,
    desc: item?.name || item,
  }));
  return [{ name: "", desc: "Select" }, ...result];
};

export const getStatesByCountry = (data, country) => {
  const countryResult = (data || []).find(({ name }) => country === name);

  return extractCountries(countryResult?.states || []);
};

export const isDev = process.env.NODE_ENV === "development";

export const setSlideColor = (stage, id, type) =>
  (type === "thumb" ? stage > id : stage >= id)
    ? "var(--color-2)"
    : "var(--soft-shadow-actual-color)";

const applicationDetails = JSON.parse(localStorage.getItem("application"));
export const getInitialInfo = (content) =>
  content.reduce((accum, { name }) => {
    accum = { ...accum, [name]: applicationDetails?.[name] || "" };
    return accum;
  }, {});

export const currentYearOptions = (duration) =>
  prepareOptions(courseDuration.slice(1, courseDuration.indexOf(duration) + 1));

export const handleMediaUpload = (e, { loading, success }) => {
  const fileObject = e.target.files[0];
  const { size, name } = fileObject;

  if (size > 2 * 1024 * 1024) {
    return alert("File too large");
  }

  const reader = new FileReader();
  reader.addEventListener("loadstart", () => {
    loading();
  });
  reader.addEventListener("load", (e) => {
    const src = e.target.result;
    success(name, src);
  });
  reader.readAsDataURL(fileObject);
};

export const isPaystack = (donationDetails) =>
  donationDetails.currency === "NGN";
