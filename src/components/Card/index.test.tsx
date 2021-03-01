import "jest-styled-components";

import { Card } from ".";
import { x } from "@xstyled/styled-components";
import { FC } from "react";
import renderer from "react-test-renderer";

test("Card component", () => {
  const component = renderer.create(
    <>
      <Card
        title="Card title"
        media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
        footer={<x.p>Footer</x.p>}
      >
        <LoremIpsum units="sentences" />
      </Card>

      <Card
        title="Card title"
        media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
        footer={<x.p>Footer</x.p>}
      />

      <Card
        title="Card title"
        tag="Tag"
        media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />

      <Card
        title="Card title"
        tag="Tag"
        media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />

      <Card
        tag="Tag"
        media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />

      <Card
        title="Thick"
        tag="Tag"
        media={<x.img src="http://placekitten.com/500/300" alt="cat" />}
        body={<LoremIpsum units="sentences" />}
      />
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const LoremIpsum: FC<any> = () => {
  return (
    <>text text text</>
  );
};
