# FE-playground - POC for Typography Component

### Getting Started
- `npm install` to install
- `npm start` to run the webpack dev server
- Navigate to localhost:8080

### 🚧  Words of caution 🚧
- This is an experimental feature which I wrote in few hours so there may be bugs lurking around. 
- This repo uses React 18, cause why not!! Use brand new tools to test things out. 
- React 18 is backwards compatible therefore this component might be able to use with react 17 and below. 
- This component is built using emotion. To be framework agnostic and to benefits of ease of use that provides more than styled-components

### Why is this component needed?
- While developing CRM UI we ran in to multiple places where we were writing the same code blocks for typography. This will provide consistent font sizes, colors and padding all across the app along with ability to make changes very easily. 

### How to use
- For now as this is not published. 
```js
import { Typography } from "./Typography/Typography";
    <Typography>
        Typography Component
    </Typography>
```
- by `default` the component is rendered as a span tag. `as` tag allows you to convert it to any tag you like
```js
    <Typography align="center" as="div">
        Typography Component
    </Typography>
```
- by default `variant` is set for `body1`. if you like to use different variant use any variant that is available in the theme palette. If you use ts and intellisense you will get the options to select them.

| name         | type                                                                                                                                 | default   | description                                                                                 |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------------|
| align        | 'center'\| 'inherit'\| 'justify'\| 'left'\| 'right'                                                                                  | 'inherit' | Set the text-align on the component.                                                        |
| children     | node                                                                                                                                 |           | The content of the component.                                                               |
| as           | elementType                                                                                                                          | 'span'    | The component used for the root node. Either a string to use a HTML element or a component. |
| variant      | 'body1'  \| 'body2' \| 'button' \| 'caption' \| 'display1' \| 'display2' \| 'h1' \| 'h2' \| 'overline' \| 'subtitle1' \| 'subtitle2' | 'body1'   | Applies the theme typography styles.                                                        |
| margin       | string                                                                                                                               | '4 0 4 0'  | Applies custom margin value                                                                 |
| padding      | string                                                                                                                               |           | Applies custom padding value                                                                |
| styledConfig | object                                                                                                                               |           | Override custom typography values                                                           |
