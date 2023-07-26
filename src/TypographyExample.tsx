import React, { ReactElement } from "react";
import { Typography } from "./Typography/Typography";

const TypographyExample = (): ReactElement => {
  return (
    <div>
      <Typography variant="display1" align="center" as="div">
        Typography Component
      </Typography>
      <Typography variant="display1" as="p">
        display1. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="display2" as="p">
        display2. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="h1" as="h1">
        h1. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="h2" as="h2">
        h2. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="body1" as="p">
        body1. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="body2" as="p">
        body2. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="subtitle1" as="p">
        subtitle1. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="subtitle2" as="p">
        subtitle2. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="overline" as="p">
        overline. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
      <Typography variant="caption" as="p">
        caption. Growl at dogs in my sleep sit on the laptop spend six hours
      </Typography>
    </div>
  );
};

export default TypographyExample;
