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
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  VStack,
  CardHeader,
  Card,
  CardBody,
} from "@chakra-ui/react";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  iconFunctionalities1,
  iconFunctionalities2,
  iconFunctionalities3,
  iconFunctionalities4,
  iconFunctionalities5,
  iconFunctionalities6,
} from "../../assets/images";

const benefits = [
  {
    icon: benefitIcon1,
    title: "Integração de multicanais",
    text: "Conecte todos os canais de atendimento em um único lugar.",
  },
  {
    icon: benefitIcon2,
    title: "Melhore a qualidade",
    text: "Ofereça um atendimento de qualidade superior.",
  },
  {
    icon: benefitIcon3,
    title: "Análise de dados",
    text: "Analise os dados para continuamente melhorar o atendimento.",
  },
];

const features = [
  {
    icon: iconFunctionalities1,
    title: "Atendimentos eficientes e rápidos",
    text: "Ofereça um atendimento de qualidade superior aos seus clientes.",
  },
  {
    icon: iconFunctionalities2,
    title: "Escale a eficiência",
    text: "Atenda os clientes de forma mais rápida e eficiente.",
  },
  {
    icon: iconFunctionalities3,
    title: "Automação de tarefas",
    text: "Automatize tarefas repetitivas, aumente  eficiência e produtividade.",
  },
];

const featuresSecondColumn = [
  {
    icon: iconFunctionalities4,
    title: "Centralização de informações",
    text: "Mantenha todas as informações em um único local acessível.",
  },
  {
    icon: iconFunctionalities5,
    title: "Maior colaboração das equipes",
    text: "Equipes de atendimento trabalham juntas e de forma eficiente.",
  },
  {
    icon: iconFunctionalities6,
    title: "Menor tempo de resposta",
    text: "Responda aos clientes de forma mais rápida e eficiente.",
  },
];

export default function Functionalities() {
  return (
    <Container maxW={"full"} bgColor="white">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        px={["20px", "60px"]}
        direction={{ base: "column", md: "row" }}
      >
        <Box flex={1}>
          <Text
            color="blue.100"
            fontWeight={700}
            textTransform="uppercase"
            mb="8px"
          >
            Funcionalidades
          </Text>

          <Heading
            lineHeight="60px"
            fontWeight={600}
            as="h2"
            mb="24px"
            fontSize={"48px"}
          >
            Temos diversas funcionalidades
            <br />
            para facilitar a sua gestão
          </Heading>
          <Text opacity={0.6} fontSize={"24px"} lineHeight="40px">
            Conheça os benefícios que a convergefy oferece.
          </Text>
          <Stack spacing="32px" mt="64px" color="black">
            {benefits.map((benefit, i) => (
              <Flex
                key={i}
                align={"center"}
                gap="16px"
                height="92px"
                p="12px 16px"
              >
                <Image
                  src={benefit.icon}
                  alt="benefit icon"
                  width="64px"
                  height="64px"
                />

                <VStack align={"start"}>
                  <Text fontWeight={600}>{benefit.title}</Text>
                  <Text opacity={0.7}>{benefit.text}</Text>
                </VStack>
              </Flex>
            ))}
          </Stack>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            pt='54px'
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

        <Flex flex={1} gap="20px" width="50%" pt="92px">
          <Flex width="385px" flexDir={"column"} gap="20px">
            {features.map((feature, index) => (
              <Card
                key={index}
                height="244px"
                bgColor="#F9F9F9"
                border="2px solid #ECECEC"
                borderRadius="16px"
                p="24px 32px 32px"
                boxShadow="none"
              >
                <CardHeader p={0} mb="16px">
                  <Image src={feature.icon} alt="" />
                </CardHeader>
                <CardBody p={0} color="black.100">
                  <Heading as="h3" fontSize="20px" lineHeight="40px" mb="12px">
                    {" "}
                    {feature.title}
                  </Heading>

                  <Text opacity={0.7} fontWeight={450} lineHeight="28px">
                    {feature.text}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </Flex>

          <Flex width="385px" flexDir={"column"} gap="20px" mt="84px">
            {featuresSecondColumn.map((feature, index) => (
              <Card
                key={index}
                height="244px"
                bgColor="#F9F9F9"
                border="2px solid #ECECEC"
                borderRadius="16px"
                p="24px 32px 32px"
                boxShadow="none"
              >
                <CardHeader p={0} mb="16px">
                  <Image src={feature.icon} alt="" />
                </CardHeader>
                <CardBody p={0} color="black.100">
                  <Heading as="h3" fontSize="20px" lineHeight="40px" mb="12px">
                    {" "}
                    {feature.title}
                  </Heading>

                  <Text opacity={0.7} fontWeight={450} lineHeight="28px">
                    {feature.text}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </Flex>
        </Flex>
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
