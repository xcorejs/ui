import { x } from "@xstyled/emotion";
import { PseudoProp } from "utils/PseudoProp";
import { anolisComponent } from "utils/anolisComponent";
import { useComponentTheme } from "hooks/useComponentTheme";

interface TxtProps extends PseudoProp {
  t: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead" | "a";
}

export const Txt = anolisComponent<"p", TxtProps>("p", ({ v, t, ...props }, ref) => {
  const theme = useComponentTheme("typography", v);

  return <x.p ref={ref as any} {...theme[prefix(t)]} {...props} className={`_anolis-as-${t} ${props.className ?? ""}`} />;
});

const prefix = <T extends string>(s: T): `_${T}` => `_${s}` as any;
