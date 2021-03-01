import { x } from "@xstyled/styled-components";
import { Icon } from "components/Icon";
import { useComponentTheme } from "hooks/useComponentTheme";
import { Renderable } from "utils/renderComponent";
import { xcoreComponent } from "utils/xcoreComponent";

import { ControlSizes, ControlThemeProps } from "./theme";

export * from "./theme";
export * from "./CloseControl";

export interface ControlProps extends ControlThemeProps {
  icon?: Renderable;
}

export const Control = xcoreComponent<"div", ControlProps, never, ControlSizes>(({ s, _icon, icon, ...props }, ref) => {
  const theme = useComponentTheme("control", undefined, s);

  return (
    <x.div ref={ref as any} {...theme} {...props}>
      <Icon svg={icon} {...theme._icon} {..._icon} />
    </x.div>
  );
});
