import { PropsOf } from "@emotion/react";
import { x } from "@xstyled/emotion";

export type PseudoProp<C extends keyof JSX.IntrinsicElements = "div", P extends object = {}> = PropsOf<(typeof x)[C]> & P;
