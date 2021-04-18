import { act } from "react-dom/test-utils";
import useToggle from "./index";

describe("Testing useToggle()", () => {
  test("should use toggle", () => {
    const { result } = act(() => useToggle());
    expect(result.current.isToggleOn).toBe(true);
    expect(typeof result.current.doToggle).toBe("function");
  });
});
