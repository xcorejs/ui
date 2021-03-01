import { x } from "@xstyled/styled-components";
import renderComponent, { Renderable } from "utils/renderComponent";
import { xcoreComponent } from "utils/xcoreComponent";

export type IconProps = {
  svg?: Renderable;
};

export const Icon = xcoreComponent<"span", IconProps>(({ svg, children, ...props }, ref) => {
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
