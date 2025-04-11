import { expect, test, describe } from "vitest";
import { getKeyByLink, getLabelBy, getCountPhoto } from "./getters.utils";
import { SELECT_ALL_LABEL, CLEAN_ALL_LABEL } from "./getters.utils";
import { listDefault } from "../models";

describe("getKeyByLink test", () => {
  test("with valid link then valid key", () => {
    const expected = "n02096051_3088";
    const input = "https://images.dog.ceo/breeds/airedale/n02096051_3088.jpg";

    const result = getKeyByLink(input);

    expect(result).toBe(expected);
  });

  test("without valid link then empty key", () => {
    const expected = "";
    const input = "";

    const result = getKeyByLink(input);

    expect(result).toBe(expected);
  });
});

describe("getLabelBy test", () => {
  test("With true flat then select label", () => {
    const expected = SELECT_ALL_LABEL;
    const input = true;

    const result = getLabelBy(input);

    expect(result).toBe(expected);
  });

  test("With false flat then clean label", () => {
    const expected = CLEAN_ALL_LABEL;
    const input = false;

    const result = getLabelBy(input);

    expect(result).toBe(expected);
  });
});

describe("getCountPhoto test", () => {
  test("With listDefault list then return zero", () => {
    const expected = 0;
    const input = listDefault;

    const result = getCountPhoto(input);

    expect(result).toBe(expected);
  });

  test("With two setter items then return two", () => {
    const expected = 2;
    const input = { ...listDefault, setter: ["sadf", "asdf"] };

    const result = getCountPhoto(input);

    expect(result).toBe(expected);
  });

  test("With two setter items and three wolfhound items then return five", () => {
    const expected = 5;
    const input = {
      ...listDefault,
      setter: ["sadf", "asdf"],
      wolfhound: ["sadf", "asdf", "sdfa"],
    };

    const result = getCountPhoto(input);

    expect(result).toBe(expected);
  });
});
