export type IsItemInList = (list: string[]) => (item: string) => boolean;
export type RemoveItemOfList = (list: string[]) => (item: string) => string[];
