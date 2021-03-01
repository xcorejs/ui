import { xcoreComponent } from "utils/xcoreComponent";

import { Control, ControlProps } from ".";
import CloseSvg from "../icons/close.svg";
import { ControlSizes } from "./theme";

export const CloseControl = xcoreComponent<"div", ControlProps, never, ControlSizes>((p, ref) => {
  return <Control ref={ref as any} icon={CloseSvg} {...p} />;
});
