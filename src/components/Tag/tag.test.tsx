import "jest-styled-components";

import { Tag } from ".";
import React from "react";
import renderer from "react-test-renderer";

test("Tag component", () => {
  const component = renderer.create(
    <Tag>Tag</Tag>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
