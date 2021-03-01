import { anolisComponent } from "utils/anolisComponent";

import { Control, ControlProps } from ".";
import { ControlSizes } from "./theme";

export const CloseControl = anolisComponent<"div", ControlProps, never, ControlSizes>("div", (p, ref) => {
  return <Control ref={ref as any} icon={<>X</>} {...p} />;
});
