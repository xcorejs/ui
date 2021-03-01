import { x } from "@xstyled/emotion";
import XcoreProvider from "components/XcoreProvider";
import { FC, ReactNode } from "react";

interface Props {
  title?: ReactNode;
  description?: ReactNode;
}

const StoryLayout: FC<Props> = ({ title, description, children }) => {
  return (
    <XcoreProvider>
      <x.div spaceY="5">
        {title && <x.h1>{title} <x.span color="gray-500">XCORE UI</x.span></x.h1>}

        {description && <x.p>{description}</x.p>}

        <x.div>
          {children}
        </x.div>
      </x.div>
    </XcoreProvider>
  );
};

export default StoryLayout;
