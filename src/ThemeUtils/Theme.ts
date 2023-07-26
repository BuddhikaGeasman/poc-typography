import { lighten, remToPx } from "polished";
import { fontSizes } from "./Units";

const white = "#fff";
const black = "#1d1e20";
const disabled = "#d4d6d9";
const fontFamily = "CircularXX, Helvetica Neue, Arial, sans-serif;";

const palette = {
  common: {
    arrive: "#2aaae2",
    axle: "#1d1e20",
    bandit: "#e0f3fb",
    bigSky: "#b1e1f5",
    black,
    blueBayou: "#039ddd",
    blueridge: "#0062c0",
    burnout: "#46494f",
    chrome: "#d4d6d9",
    diesel: "#f1ae11",
    disabled,
    ethanol: "#fff",
    frogger: "#2b731a",
    gasoline: "#feefcb",
    gatorguts: "#4caf50",
    grease: "#0a0a0b",
    jackknife: "#cb2024",
    LFGray: "#9ea2a9",
    mileMarker: "#e8f5e9",
    nightTime: "#007dbc",
    roadhog: "#303236",
    smokey: "#60646c",
    tandem: "#f4f5f5",
    white,
    whoaNelly: "#ffedf1",
  },
  primary: {
    main: "#2aaae2",
    light: "#b1e1f5",
    contrastText: white,
  },
  error: {
    main: "#cb2024",
    light: lighten(0.1, "#cb2024"),
    contrastText: white,
  },
};

const typography = {
  fontFamily: fontFamily,
  fontSize: fontSizes.small, //14
  body1: {
    color: black,
    fontFamily: fontFamily,
    fontSize: fontSizes.small, //14
    fontWeight: 400,
    letterSpacing: "0.1px",
    lineHeight: "140%",
  },
  body2: {
    color: black,
    fontFamily: fontFamily,
    fontSize: fontSizes.xsmall, //12
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "130%",
  },
  button: {
    color: black,
    fontFamily: fontFamily,
    fontSize: fontSizes.small, //14
    fontWeight: 500,
    letterSpacing: "0.1px",
    lineHeight: "140%",
  },
  caption: {
    color: black,
    fontFamily: fontFamily,
    fontSize: remToPx(0.625), //10
    fontWeight: 400,
    letterSpacing: "0.25px",
    lineHeight: "120%",
  },
  display1: {
    color: black,
    fontFamily: fontFamily,
    fontSize: remToPx(2.188), //35
    fontWeight: 400,
    letterSpacing: "-.75px",
    lineHeight: "115%",
  },
  display2: {
    color: black,
    fontFamily: fontFamily,
    fontSize: remToPx(1.688), //27
    fontWeight: 400,
    letterSpacing: "-.35px",
    lineHeight: "120%",
  },
  h1: {
    color: black,
    fontFamily: fontFamily,
    fontSize: remToPx(1.375), //22
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "125%",
  },
  h2: {
    color: black,
    fontFamily: fontFamily,
    fontSize: fontSizes.large, //18
    fontWeight: 500,
    letterSpacing: "0.1px",
    lineHeight: "115%",
  },
  overline: {
    color: black,
    fontFamily: fontFamily,
    fontSize: fontSizes.xsmall, //35
    fontWeight: 400,
    letterSpacing: "0.75px",
    lineHeight: "130%",
    textTransform: "uppercase",
  },
  subtitle1: {
    color: black,
    fontFamily: fontFamily,
    fontSize: fontSizes.small, //12
    fontWeight: 500,
    letterSpacing: "0.1px",
    lineHeight: "140%",
  },
  subtitle2: {
    color: black,
    fontFamily: fontFamily,
    fontSize: fontSizes.xsmall, //35
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "130%",
  },
};

export const theme = { palette, typography };
