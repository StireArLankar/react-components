import React from "react";
import { withCenteredStyle } from "../../../_storybook/withCenteredStyle";
import { withCustomTheme } from "../../../_storybook/withCustomTheme";

import { InfiniteSvg as First } from "./First";
import { SvgMorph as Second } from "./Second";
import { SvgMorph as Third } from "./Third";
import { themeColors } from "../../../theme/theme.styles";

const withMorphSite = (fn: any) => (
  <div>
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        padding: 10,
        backgroundColor: themeColors.text,
        color: themeColors.dark,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
      }}
    >
      Morph svgs here{" "}
      <a
        href="https://shapeshifter.design"
        style={{ color: themeColors.darkBlue, textDecoration: "none" }}
      >
        https://shapeshifter.design
      </a>
    </div>
    {fn()}
  </div>
);

export default {
  title: "Spring|SvgMorph",
  decorators: [
    withCenteredStyle({ color: themeColors.text }),
    withCustomTheme,
    withMorphSite
  ]
};

export const first = () => <First />;

export const second = () => <Second />;

export const third = () => <Third />;
