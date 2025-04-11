import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { LogOut } from "./LogOut";

describe("Fab", () => {
  test("renders the App component", () => {
    const component = render(<LogOut size={16} className="btn" />);

    const result = component.baseElement;

    expect(result).toMatchSnapshot();
  });
});
