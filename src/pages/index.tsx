import { Flex, Box } from "@chakra-ui/react";
import Functionalities from "../components/Functionalities";
import HomeSplitScreen from "../components/Header";
import WithSubnavigation from "../components/Navbar";

export function Home() {
  return (
    <>
      <WithSubnavigation />
      <Box>
        <HomeSplitScreen />
        <Functionalities />
      </Box>
    </>
  );
}
