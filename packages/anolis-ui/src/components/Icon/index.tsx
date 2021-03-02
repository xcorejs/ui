import { x } from "@xstyled/emotion";
import renderComponent, { Renderable } from "utils/renderComponent";
import { anolisComponent } from "utils/anolisComponent";

export type IconProps = {
  svg?: Renderable;
};

export const Icon = anolisComponent<"span", IconProps>("span", ({ svg, children, ...props }, ref) => {
  return (
    <x.span
      ref={ref as any}
      display="inline-block"
      verticalAlign="middle"
      maxHeight="100%"
      {...props}
    >
      {renderComponent(svg)}
      {children}
    </x.span>
  );
});
