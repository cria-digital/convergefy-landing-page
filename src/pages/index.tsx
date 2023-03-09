import { Flex, Box } from "@chakra-ui/react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Functionalities from "../components/Functionalities";
import HomeSplitScreen from "../components/Header";
import WithSubnavigation from "../components/Navbar";
import Pricing from "../components/Pricing";
import Scheduling from "../components/Scheduling";
import Testimonials from "../components/Testimonials";
import Tranquilize from "../components/Tranquilize";

export function Home() {
  return (
    <>
      <WithSubnavigation />
      <Box>
        <HomeSplitScreen />
        <Functionalities />
        <Tranquilize />
        <Features />
        <Testimonials />
        <Scheduling />
        <Pricing />
        <Footer />
      </Box>
    </>
  );
}
