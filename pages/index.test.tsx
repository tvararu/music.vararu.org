import renderer from "react-test-renderer";
import Index from "./index";

describe("Index", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
