import React, { ReactElement, ReactNode } from "react";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import type PaletteType from "../ThemeUtils/themeType";
import type {
  TypographyDetails,
  TypographyType,
} from "../ThemeUtils/themeType";
import { spacing, isObjectEmpty } from "../ThemeUtils";

interface TypographyProps {
  align?: "inherit" | "center" | "left" | "justify" | "right";
  color?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  styleConfigObject?: TypographyDetails;
  theme?: PaletteType;
  variant?: keyof TypographyType;
}

const TypographyRoot = ({
  align = "inherit",
  color,
  margin = `${spacing.xsmall} ${spacing.none} `,
  padding,
  styleConfigObject,
  variant = "body1",
  ...props
}: TypographyProps) => {
  console.log(props);
  const { theme } = props;
  const configuredStyles = styleConfigObject &&
    !isObjectEmpty(styleConfigObject) && { ...styleConfigObject };
  return {
    ...(theme?.typography[variant] as object),
    color,
    textAlign: align,
    margin,
    padding,
    ...configuredStyles,
  };
};

const typographyConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  shouldForwardProp: (prop: any) => isPropValid(prop),
};

// @ts-ignore
export const Typography = styled("span", typographyConfig)(TypographyRoot);
