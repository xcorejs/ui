import { xcoreComponent } from "utils/xcoreComponent";

import { Control, ControlProps } from ".";
import { ControlSizes } from "./theme";

export const CloseControl = xcoreComponent<"div", ControlProps, never, ControlSizes>("div", (p, ref) => {
  return <Control ref={ref as any} icon={<>X</>} {...p} />;
});
