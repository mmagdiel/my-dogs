import type { IsItemInList, RemoveItemOfList } from "../models";

export const isItemInList: IsItemInList = (list) => (item) =>
  list.includes(item);

export const removeItemOfList: RemoveItemOfList = (list) => (item) =>
  list.filter((el) => el !== item);
