import { x } from "@xstyled/emotion";
import AnolisProvider from "components/AnolisProvider";
import { FC, ReactNode } from "react";

interface Props {
  title?: ReactNode;
  description?: ReactNode;
}

const StoryLayout: FC<Props> = ({ title, description, children }) => {
  return (
    <AnolisProvider>
      <x.div spaceY="5">
        {title && <x.h1>{title} <x.span color="gray-500">Anolis UI</x.span></x.h1>}

        {description && <x.p>{description}</x.p>}

        <x.div>
          {children}
        </x.div>
      </x.div>
    </AnolisProvider>
  );
};

export default StoryLayout;
