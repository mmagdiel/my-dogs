import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Fab } from "./Fab";

describe("Fab", () => {
  test("renders the App component", () => {
    const component = render(<Fab />);

    const result = component.baseElement;

    expect(result).toMatchSnapshot();
  });
});
