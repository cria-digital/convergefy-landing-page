import { Flex, Box, Container, Image } from "@chakra-ui/react";
import { carrousel } from "../assets/images";
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

        <Box
          mt="-60px"
          zIndex={100}
          pos="relative"
          maxW="1160px"
          height="160px"
          mx="auto"
          borderRadius={"16px"}
          bgColor="#F9F9F9"
          boxShadow={"0px 0px 12px rgba(0, 0, 0, 0.12)"}
          className='header-carrousel'
        >
          <Flex align="center" justify={'space-between'} height="100%"
          px='80px'
          >
            <Image src={carrousel} alt="" />
            <Image src={carrousel} alt="" />
            <Image src={carrousel} alt="" />
            <Image src={carrousel} alt="" />
          </Flex>
        </Box>
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
