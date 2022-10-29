import { render } from "@testing-library/react";
import Home from "../../src/pages";

describe("テスト", () => {
  it("テストのテスト", () => {
    const IndexResult = render(
      <Home />
    );
    expect(IndexResult).toMatchSnapshot();
  });
});
