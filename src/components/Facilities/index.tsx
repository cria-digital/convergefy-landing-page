import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  VStack,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import { facilitiesDash } from "../../assets/images";

export default function Facilities() {
  return (
    <Box as={Container} className="larger" maxH="727px">
      <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        spacing="24px"
        height="727px"
        color="black.100"
      >
        <Flex flex={1} flexDir={"column"} width={"50%"}>
          <Text
            color="blue.100"
            fontWeight={700}
            textTransform="uppercase"
            mb="8px"
          >
            Facilidades
          </Text>
          <Heading
            fontSize={"48px"}
            lineHeight="60px"
            as="h2"
            mb="16px"
            className="title"
          >
            Loren ipson loren the fox loren
          </Heading>

          <Text opacity={0.6} fontSize={"24px"} lineHeight="40px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel leo neque.
          </Text>

          <Flex direction={{ base: "column", md: "row" }} pt="48px" gap="28px">
            <Button variant="secondary" width="172px">
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
          </Flex>
        </Flex>
        <Flex flex={1} pos="relative" width={"50%"}>
          <Image
            src={facilitiesDash}
            alt="Social network"
            transform={"rotate(-13.06deg)"}
          />
        </Flex>
      </Stack>
    </Box>
  );
}
