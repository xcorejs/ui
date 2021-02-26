import { x } from "@xstyled/styled-components";
import { FC } from 'react';
import { Tag } from ".";

export default {
  title: "Themed/Tag"
};

export const Normal: FC = () => {
  return (
    <x.div display="flex" justifyContent="space-around" spaceX="2">
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </x.div>
  )
}
