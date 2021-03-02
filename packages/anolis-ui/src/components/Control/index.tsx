import { x } from "@xstyled/emotion";
import { Icon } from "components/Icon";
import { useComponentTheme } from "hooks/useComponentTheme";
import { Renderable } from "utils/renderComponent";
import { anolisComponent } from "utils/anolisComponent";

import { ControlSizes, ControlThemeProps } from "./theme";

export * from "./theme";
export * from "./CloseControl";

export interface ControlProps extends ControlThemeProps {
  icon?: Renderable;
}

export const Control = anolisComponent<"div", ControlProps, never, ControlSizes>("div", ({ s, _icon, icon, ...props }, ref) => {
  const theme = useComponentTheme("control", undefined, s);

  type A = Exclude<typeof _icon, undefined>;

  return (
    <x.div ref={ref} {...theme} {...props}>
      <Icon svg={icon} {...theme._icon} {..._icon} />
    </x.div>
  );
});
