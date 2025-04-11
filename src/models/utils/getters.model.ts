import { ListObject } from "../domain/breeds.model";

export type GetKeyByLink = (item: string) => string;

export type GetCountPhoto = (list: ListObject) => number;
