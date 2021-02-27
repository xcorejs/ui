import { x } from "@xstyled/styled-components";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { Typography } from ".";
import { Txt } from "./Txt";

export default {
  title: "Themed/Typography"
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Card">
      <x.div>
        <Typography _h1={{ fontSize: "2xl" }} spaceY="5">
          <x.h1>Test</x.h1>

          <x.p>Text text text</x.p>

          <Txt t="h1" as="h2">H2 with h1 styles</Txt>

          <Txt t="lead">Leading paragraph</Txt>

          <p>Text text text</p>

          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Simple links for Next.js</a>
        </Typography>
      </x.div>
    </StoryLayout>
  );
};
