import { GetKeyByLink, GetCountPhoto } from "../models";

export const SELECT_ALL_LABEL = "Select all";
export const CLEAN_ALL_LABEL = "Clean all";

export const getKeyByLink: GetKeyByLink = (item) => {
  const arr = item.split("/");
  const el = arr[arr.length - 1];
  return el.split(".")[0];
};

export const getLabelBy = (flat: boolean) =>
  flat ? SELECT_ALL_LABEL : CLEAN_ALL_LABEL;

export const getCountPhoto: GetCountPhoto = (list) =>
  Object.values(list).reduce((prev, curr) => {
    const value = Array.isArray(curr) ? curr.length : 0;
    return prev + value;
  }, 0);
