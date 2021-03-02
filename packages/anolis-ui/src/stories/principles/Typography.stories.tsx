import { x } from "@xstyled/emotion";
import { Typography } from "components/Typography";
import AnolisProvider from "components/AnolisProvider";
import { FC } from "react";

export default {
  title: "Examples/Typography"
};

export const Index: FC = () => {
  return (
    <AnolisProvider>
      <x.h1>Basic usage</x.h1>
      <x.p>Simple typography and <a href="https://nextjs.org">simple links without imports</a>.</x.p>
    </AnolisProvider>
  );
};

export const WithRichtext: FC = () => {
  return (
    <AnolisProvider>
      <x.h1>With richtext</x.h1>
      <Richtext />
    </AnolisProvider>
  );
};

export const WithCustomTypography: FC = () => {
  return (
    <AnolisProvider>
      <x.h1>With custom typography</x.h1>
      <x.p>This story demonstrates different sets of typography</x.p>

      <Typography as="article" _h2={{ fontSize: "1.1rem" }} _p={{ fontSize: "0.9rem" }}>
        <x.header><h2>Article</h2></x.header>
        <x.section>
          <x.p>This article has different set of typography.</x.p>
        </x.section>
      </Typography>
    </AnolisProvider>
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
