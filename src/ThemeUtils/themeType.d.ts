interface CommonColors {
  arrive: string;
  axle: string;
  bandit: string;
  bigSky: string;
  blueBayou: string;
  blueridge: string;
  burnout: string;
  chrome: string;
  diesel: string;
  ethanol: string;
  frogger: string;
  gasoline: string;
  gatorguts: string;
  grease: string;
  jackknife: string;
  LFGray: string;
  mileMarker: string;
  nightTime: string;
  roadhog: string;
  smokey: string;
  tandem: string;
  whoaNelly: string;
}

type TypographyDetails = {
  color: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
};

export type TypographyType = {
  fontFamily: string;
  fontSize: number;
  body1: TypographyDetails;
  body2: TypographyDetails;
  button: TypographyDetails;
  caption: TypographyDetails;
  display1: TypographyDetails;
  display2: TypographyDetails;
  h1: TypographyDetails;
  h2: TypographyDetails;
  overline: TypographyDetails;
  subtitle1: TypographyDetails;
  subtitle2: TypographyDetails;
};

export default interface PaletteType extends CommonColors {
  primary: {
    main: string;
    light: string;
    contrastText: string;
  };
  error: {
    main: string;
    light: string;
    contrastText: string;
  };
  typography: TypographyType;
}
