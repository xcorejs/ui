import { x } from "@xstyled/styled-components";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";

export default {
  title: "Internal/Complement"
};

export const Normal: FC = () => {
  return (
    <StoryLayout>
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        Empty
      </x.div>
    </StoryLayout>
  );
};
