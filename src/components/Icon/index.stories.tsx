import { x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { Icon } from ".";

export default {
  title: "Unthemed/Icon"
};

export const Normal: FC = () => {
  return (
    <StoryLayout>
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <Icon>X</Icon>
      </x.div>
    </StoryLayout>
  );
};
