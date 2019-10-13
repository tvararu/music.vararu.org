import { cleanup, render } from "@testing-library/react";
import Home from "./Home";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<Home />);

  expect(asFragment()).toMatchSnapshot();
});
