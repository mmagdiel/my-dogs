import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Update } from "./Update";

describe("Fab", () => {
  test("renders the App component", () => {
    const component = render(<Update size={16} className="btn" />);

    const result = component.baseElement;

    expect(result).toMatchSnapshot();
  });
});
