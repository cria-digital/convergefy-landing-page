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
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  checkIcon,
  iconFunctionalities1,
  iconFunctionalities2,
  iconFunctionalities3,
  iconFunctionalities4,
  iconFunctionalities5,
  iconFunctionalities6,
  network,
} from "../../assets/images";

const channelsFirstRow = [
  {
    text: "Whatsapp",
  },
  {
    text: "E-mail",
  },
  {
    text: "Telegram ( em breve )",
  },
];

const channelsSecondRow = [
  {
    text: "Messenger ( em breve )",
  },
  {
    text: "Instagram ( em breve )",
  },
];

export default function Tranquilize() {
  return (
    <Box maxW="100vw" overflow={"hidden"} bgColor="white" pb="20px">
      <Stack
        direction={{ base: "column", md: "row" }}
        // p="0px 160px"
        width="90%"
        mx="auto"
        overflow={"hidden"}
        spacing="24px"
        color="black.100"
        bgColor="white"
        height="836.14px"
      >
        <Flex flex={1} flexDir={"column"} py="148px" width={"50%"}>
          <Text
            color="blue.100"
            fontWeight={700}
            textTransform="uppercase"
            mb="8px"
          >
            TRANQUILIZE-SE
          </Text>
          <Heading fontSize={"48px"} lineHeight="60px" as="h2" mb="16px">
            Integre todos os seus canais de atendimento
          </Heading>

          <Text opacity={0.6} fontSize={"24px"} lineHeight="40px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel leo neque.
          </Text>

          <Stack spacing={"24px"} mt="48px">
            <Flex gap="26px">
              {channelsFirstRow.map((channel, i) => (
                <Flex key={i} gap="18px" height="24px" align="center">
                  <Image src={checkIcon} alt="" />
                  <Text opacity={0.8} whiteSpace="nowrap">
                    {channel.text}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Flex gap="26px">
              {channelsSecondRow.map((channel, i) => (
                <Flex key={i} gap="18px" height="24px" align="center">
                  <Image src={checkIcon} alt="" />
                  <Text opacity={0.8} whiteSpace="nowrap">
                    {channel.text}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Stack>
          <Flex direction={{ base: "column", md: "row" }} pt="48px" gap="28px">
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
          </Flex>
        </Flex>
        <Flex flex={1} pos="relative" width={"50%"} justify="flex-end">
          <Image
            src={network}
            alt="Social network"
            pos="absolute"
            top="-70px"
          />
        </Flex>
      </Stack>
    </Box>
  );
}
