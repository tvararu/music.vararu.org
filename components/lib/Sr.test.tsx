import { cleanup, render } from "@testing-library/react";
import Sr from "./Sr";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<Sr>Screen reader content</Sr>);

  expect(asFragment()).toMatchSnapshot();
});
