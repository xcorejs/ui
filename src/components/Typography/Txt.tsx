import { x } from "@xstyled/styled-components";
import { PseudoProp } from "utils/PseudoProp";
import { xcoreComponent } from "utils/xcoreComponent";
import { useComponentTheme } from "hooks/useComponentTheme";

interface TxtProps extends PseudoProp {
  t: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead" | "a";
}

export const Txt = xcoreComponent<"p", TxtProps>(({ v, t, ...props }, ref) => {
  const theme = useComponentTheme("typography", v);

  return <x.p ref={ref as any} {...theme[prefix(t)]} {...props} className={`_xcore-as-${t} ${props.className ?? ""}`} />;
});

const prefix = <T extends string>(s: T): `_${T}` => `_${s}` as any;
