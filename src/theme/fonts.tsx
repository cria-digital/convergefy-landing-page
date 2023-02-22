import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
  /* latin */
  @font-face {
    font-family: 'Circular Std';
    src: url('fonts/CircularStd-Medium.ttf') format('truetype'); 
    font-weight: 500;
    font-style: normal;
  },
  `}
  />
);

export default Fonts;
