import { x } from "@xstyled/styled-components";
import XcoreProvider from "components/XcoreProvider";
import { FC } from "react";
import { Typography } from "../../components/Typography/index";

export default {
  title: "Examples/Typography"
};

export const Index: FC = () => {
  return (
    <XcoreProvider>
      <x.h1>Basic usage</x.h1>
      <x.p>Simple typography and <a href="https://nextjs.org">simple links without imports</a>.</x.p>
    </XcoreProvider>
  );
};

export const WithRichtext: FC = () => {
  return (
    <XcoreProvider>
      <x.h1>With richtext</x.h1>
      <Richtext />
    </XcoreProvider>
  );
};

export const WithCustomTypography: FC = () => {
  return (
    <XcoreProvider>
      <x.h1>With custom typography</x.h1>
      <x.p>This story demonstrates different sets of typography</x.p>

      <Typography as="article" _h2={{ fontSize: "1.2rem" }} p={{ fontSize: "0.9rem" }}>
        <x.header><h2>Article</h2></x.header>
        <x.section>
          <x.p>This article has different set of typography (work in progress).</x.p>
        </x.section>
      </Typography>
    </XcoreProvider>
  );
};

const Richtext: FC = () => {
  return (
    <>
      <p>Hypothetical component which renders output you can't control</p>
      <p>Yet still has decent typography</p>
    </>
  );
};
