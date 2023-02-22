import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages";
import Fonts from "./theme/fonts";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Home />
    </ChakraProvider>
  );
}

export default App;
