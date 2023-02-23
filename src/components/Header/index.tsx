import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import {
  headerImage,
  headerWaves,
  headerEllipseFirst,
  headerEllipseSecondary,
} from "../../assets/images";

export default function HomeSplitScreen() {
  return (
    <Stack
      maxWidth="100vw"
      overflow={"hidden"}
      height={"calc(100vh - 94px)"}
      direction={{ base: "column", md: "row" }}
      bgColor="black.100"
      pr="130px"
      pos="relative"
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
      <Flex p={8} flex={1} justify={"center"} pt="278px">
        <Stack
          spacing={6}
          w={"full"}
          maxW={"685px"}
          color="white"
          pos="relative"
          zIndex={5}
        >
          <Heading fontSize="72px" lineHeight="80px">
            The quick brown fox jumps over the dog
          </Heading>
          <Text
            fontSize="24px"
            lineHeight="36px"
            opacity={0.6}
            fontWeight={"normal"}
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
          bottom="34px"
          zIndex={5}
          alt={"Header Image"}
          // objectFit={"cover"}
          src={headerImage}
        />
      </Flex>
    </Stack>
  );
}
