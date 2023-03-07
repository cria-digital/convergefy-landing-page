import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    /* latin */
    @font-face {
      font-family: 'Circular Std';
      src: url('fonts/CircularStd/CircularStd-Book.ttf') format('truetype'); 
      font-weight: normal;
      font-style: normal;
    };
  /* latin */
  @font-face {
    font-family: 'Circular Std';
    src: url('fonts/CircularStd/CircularStd-Medium.ttf') format('truetype'); 
    font-weight: 500;
    font-style: normal;
  };
  /* latin */
  @font-face {
    font-family: 'Circular Std';
    src: url('fonts/CircularStd/CircularStd-Bold.ttf') format('truetype'); 
    font-weight: 700;
    font-style: normal;
  },
  `}
  />
);

export default Fonts;
