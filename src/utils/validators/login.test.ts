import { expect, test, describe } from "vitest";
import { schema } from "./login.validator";

describe("schema test", () => {
  test("without password and email then false", () => {
    const expected = false;
    const input = {};

    const result = schema.isValidSync(input);

    expect(result).toBe(expected);
  });

  test("without email then false", () => {
    const expected = false;
    const input = { password: "sadfas" };

    const result = schema.isValidSync(input);

    expect(result).toBe(expected);
  });

  test("with falsy email then false", () => {
    const expected = false;
    const input = { password: "sadfas", email: "sdfasdf" };

    const result = schema.isValidSync(input);

    expect(result).toBe(expected);
  });

  test("with email and password then true", () => {
    const expected = true;
    const input = { password: "sadfas", email: "m@gmail.com" };

    const result = schema.isValidSync(input);

    expect(result).toBe(expected);
  });
});
