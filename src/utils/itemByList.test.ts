import { expect, test, describe } from "vitest";
import { removeItemOfList, isItemInList } from "./itemByList.util";

describe("removeItemOfList test", () => {
  test("with empty list and empty item then empty list", () => {
    const expected: string[] = [];
    const inputList: string[] = [];
    const inputItem = "";

    const result = removeItemOfList(inputList)(inputItem);

    expect(result).toStrictEqual(expected);
  });

  test("with list and item then list without item", () => {
    const expected: string[] = [];
    const inputItem = "hola";
    const inputList = [inputItem];

    const result = removeItemOfList(inputList)(inputItem);

    expect(result).toStrictEqual(expected);
  });

  test("with list and item then list without item", () => {
    const anotherItem = "hey";
    const expected = [anotherItem];
    const inputItem = "hola";
    const inputList = [inputItem, anotherItem];

    const result = removeItemOfList(inputList)(inputItem);

    expect(result).toStrictEqual(expected);
  });
});

describe("isItemInList test", () => {
  test("with empty list and empty item then false", () => {
    const expected = false;
    const inputList: string[] = [];
    const inputItem = "";

    const result = isItemInList(inputList)(inputItem);

    expect(result).toStrictEqual(expected);
  });

  test("with empty list and empty item then true", () => {
    const inputItem = "Hola";
    const expected = true;
    const inputList = [inputItem];

    const result = isItemInList(inputList)(inputItem);

    expect(result).toStrictEqual(expected);
  });

  test("with empty list and empty item then true", () => {
    const inputItem = "Hola";
    const anotherItem = "hey";
    const expected = true;
    const inputList = [inputItem, anotherItem];

    const result = isItemInList(inputList)(inputItem);

    expect(result).toStrictEqual(expected);
  });
});
