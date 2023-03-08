import { Flex, Box } from "@chakra-ui/react";
import Features from "../components/Features";
import Functionalities from "../components/Functionalities";
import HomeSplitScreen from "../components/Header";
import WithSubnavigation from "../components/Navbar";
import Tranquilize from "../components/Tranquilize";

export function Home() {
  return (
    <>
      <WithSubnavigation />
      <Box>
        <HomeSplitScreen />
        <Functionalities />
        <Tranquilize />
        {/* <Features /> */}
      </Box>
    </>
  );
}
