import { x } from "@xstyled/emotion";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import { Control } from ".";
import { Activity } from "@emotion-icons/feather";

export default {
  title: "Themed/Control"
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Card">
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <Control icon={<Activity />} />
      </x.div>
    </StoryLayout>
  );
};
