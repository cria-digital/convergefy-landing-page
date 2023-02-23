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
  HStack,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = Array.apply(null, Array(6)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function Functionalities() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      p="148px 160px"
      maxW="100vw"
      overflow={"hidden"}
      pt="148px"
      color="black.100"
      bgColor="white"
    >
      <Flex  flex={1} pr="60px" flexDir={'column'}>
        <Text
          color="blue.100"
          fontWeight={700}
          textTransform="uppercase"
          mb="8px"
        >
          Funcionalidades
        </Text>
        <Heading fontSize={"48px"} lineHeight="60px" as="h2" mb="24px">
          Temos diversas funcionalidades para facilitar a sua gestão
        </Heading>

        <Text opacity={0.6} fontSize={"24px"} lineHeight="40px">
          Conheça os benefícios que a convergefy oferece.
        </Text>

        <Stack spacing="32px" mt="64px" color='black'>
          <HStack align={"top"} spacing="24px" height='68px'>
            <Box color={"green.400"} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Integração de multicanais</Text>
              <Text opacity={0.7} >
                Conecte todos os canais de atendimento em um único lugar.
              </Text>
            </VStack>
          </HStack>

          <HStack align={"top"} spacing="24px" height='68px'>
            <Box color={"green.400"} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Integração de multicanais</Text>
              <Text  opacity={0.7}>
                Conecte todos os canais de atendimento em um único lugar.
              </Text>
            </VStack>
          </HStack>

          <HStack align={"top"} spacing="24px" height='68px'>
            <Box color={"green.400"} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Integração de multicanais</Text>
              <Text  opacity={0.7}>
                Conecte todos os canais de atendimento em um único lugar.
              </Text>
            </VStack>
          </HStack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing="20px">
          {features.map((feature, index) => (
            <Card
              key={index}
              // p="24px 32px 32px"
              bgColor="#F9F9F9"
              border="2px solid #ECECEC"
              borderRadius="16px"
              height="244px"
              boxShadow="none"
            >
              <CardHeader>
                <Heading size="md" fontSize="20px" lineHeight={"40px"}>
                  {" "}
                  Customer dashboard
                </Heading>
              </CardHeader>
              <CardBody bgColor="#F9F9F9">
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
