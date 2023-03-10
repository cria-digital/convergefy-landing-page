import {
  Container,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  headerImage,
  headerWaves,
  headerEllipseFirst,
  headerEllipseSecondary,
} from "../../assets/images";

export default function HomeSplitScreen() {
  return (
    <Flex bgColor="black.100" overflow={"hidden"}>
      <Stack
        as={Container}
        height={"calc(100vh - 94px)"}
        pt="140px"
        // pb="150px"
        direction={{ base: "column", md: "row" }}
        pos="relative"
        className="larger"
      >
        <Image
          src={headerEllipseSecondary}
          alt="ellipse"
          width="
        1862.05px"
          height="
      642.46px"
          pos="absolute"
          left="-400px"
          transform="rotate(-15deg)"
          zIndex={3}
        />
        <Image
          src={headerEllipseFirst}
          alt="ellipse"
          width="1862.05px"
          height="737.67px"
          top="100px"
          left="340px"
          pos="absolute"
          transform="rotate(25.17deg)"
          zIndex={4}
        />
        <Image
          src={headerWaves}
          alt="waves"
          pos="absolute"
          top="-60px"
          left="
        -306.91px"
          width="
      2380.23px"
          height="1300.72px"
          transform="rotate(10.7deg)"
          zIndex={2}
        />
        <Flex flex={1} align="center" pr="20px">
          <Stack
            spacing={6}
            color="white"
            pos="relative"
            zIndex={5}
            height="412px"
          >
            <Heading fontSize="68px" lineHeight="76px" className="header-title">
              The quick brown fox jumps over the dog
            </Heading>
            <Text
              fontSize="24px"
              lineHeight="36px"
              opacity={0.6}
              fontWeight={450}
              className="haeder-text"
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit amet adipiscing
              elit. Vestibulum vel leo neque.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              pt="16px"
              spacing={4}
            >
              <Button variant="secondary" color="white" width="243px">
                Agendar reunião
              </Button>
              <Button variant="primary" width="259px">
                Cadastre sua conta agora
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} pos="relative">
          <Image
            pos="absolute"
            bottom="70px"
            zIndex={5}
            alt={"Header Image"}
            // objectFit={"cover"}
            src={headerImage}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
