import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  createIcon,
  IconProps,
} from "@chakra-ui/react";
import { controlSectionTables } from "../../assets/images";

export default function Features() {
  return (
    <Container maxW={"8xl"} p={0}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py="140px"
        direction={{ base: "column", md: "row" }}
      >
        <Box flex={1} width="50%">
          <Image src={controlSectionTables} alt="" />
        </Box>

        <Box flex={1} width="50%" pl="100px">
          <Text
            color="blue.100"
            fontWeight={700}
            textTransform="uppercase"
            mb="8px"
          >
            MAIOR CONTROLE
          </Text>

          <Heading
            lineHeight="58px"
            fontWeight={600}
            as="h2"
            mb="16px"
            fontSize={"48px"}
          >
            Integre todos os seus canais de atendimento
          </Heading>
          <Text opacity={0.6} fontSize={"24px"} lineHeight="40px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel leo neque.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            pt="54px"
          >
            <Button variant="secondary" color="blue" width="172px">
              Agendar reunião
            </Button>
            <Button
              variant="primary"
              width="250px"
              bgColor="
#199017"
            >
              Cadastrar conta
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
