import styled, { css, system } from "@xstyled/styled-components";
import { useComponentTheme } from "hooks/useComponentTheme";
import { useMemo } from "react";
import { xcoreComponent } from "utils/xcoreComponent";

import { TypographyThemeProps, TypographyVariant } from "./theme";

interface TypographyProps extends TypographyThemeProps { }

export const Typography = xcoreComponent<"div", TypographyProps, TypographyVariant>(({
  v,
  s,
  _h1,
  _h2,
  _h3,
  _h4,
  _h5,
  _h6,
  _p,
  _lead,
  _a,
  ...props
}, ref) => {
  const theme = useComponentTheme("typography", v);

  const styles = useMemo(() => ({
    _h1: { ...theme._h1, ..._h1 },
    _h2: { ...theme._h2, ..._h2 },
    _h3: { ...theme._h3, ..._h3 },
    _h4: { ...theme._h4, ..._h4 },
    _h5: { ...theme._h5, ..._h5 },
    _h6: { ...theme._h6, ..._h6 },
    _p: { ...theme._p, ..._p },
    _lead: { ...theme._lead, ..._lead },
    _a: { ...theme._a, ..._a }
  // eslint-disable-next-line max-len
  }), [_a, _h1, _h2, _h3, _h4, _h5, _h6, _lead, _p, theme._a, theme._h1, theme._h2, theme._h3, theme._h4, theme._h5, theme._h6, theme._lead, theme._p]);

  return (
    <TypographyStyle ref={ref as any} {...styles} {...theme} {...props} />
  );
});

const TypographyStyle = styled.divBox<Required<TypographyThemeProps>>`
  h1, ._xcore-as-h1 {
    ${p => css(system(p._h1))}
  }

  h2, ._xcore-as-h2 {
    ${p => css(system(p._h2))}
  }

  h3, ._xcore-as-h3 {
    ${p => css(system(p._h3))}
  }

  h4, ._xcore-as-h4 {
    ${p => css(system(p._h4))}
  }

  h5, ._xcore-as-h5 {
    ${p => css(system(p._h5))}
  }

  h6, ._xcore-as-h6 {
    ${p => css(system(p._h6))}
  }

  p, ._xcore-as-p {
    ${p => css(system(p._p))}
  }

  ._xcore-as-lead {
    ${p => css(system(p._lead))}
  }

  a, ._xcore-as-a  {
    ${p => css(system(p._a))}
  }
`;
