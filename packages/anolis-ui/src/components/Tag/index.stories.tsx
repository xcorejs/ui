import { defaultTheme, x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";

import { Tag } from ".";

export default {
  title: "Themed/Tag"
};

const theme = {
  ...defaultTheme
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Tag">
      <x.div display="flex" spaceX="2">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </x.div>
    </StoryLayout>
  );
};
