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
    <Flex className='Section__container'>
    <Box as={Container} className="larger">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box flex={1} pt="148px">
          <Text
            color="blue.100"
            fontWeight={700}
            textTransform="uppercase"
            mb="8px"
          >
            Funcionalidades
          </Text>

          <Heading
            className="title"
            lineHeight="60px"
            fontWeight={600}
            as="h2"
            mb="24px"
            fontSize={"48px"}
          >
            Temos diversas funcionalidades para facilitar a sua gestão
          </Heading>
          <Text opacity={0.6} fontSize={"18px"} lineHeight="40px">
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
            pt="90px"
          >
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
          </Stack>
        </Box>

        <Flex flex={1} gap="16px" width="50%" pt="92px">
          <Flex width="385px" flexDir={"column"} gap="20px">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                text={feature.text}
                title={feature.title}
              />
            ))}
          </Flex>

          <Flex width="385px" flexDir={"column"} gap="20px" mt="84px">
            {featuresSecondColumn.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                text={feature.text}
                title={feature.title}
              />
            ))}
          </Flex>
        </Flex>
      </Stack>
    </Box>
    </Flex>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  text: string;
};

const FeatureCard = ({ icon, text, title }: FeatureCardProps) => {
  return (
    <Card
      height="244px"
      minW="300px"
      bgColor="#F9F9F9"
      border="2px solid #ECECEC"
      borderRadius="16px"
      p="20px 28px 28px"
      boxShadow="none"
    >
      <CardHeader p={0} mb="10px">
        <Image src={icon} alt="" />
      </CardHeader>
      <CardBody p={0} color="black.100">
        <Heading as="h3" fontSize="19px" lineHeight="30px" mb="10px">
          {" "}
          {title}
        </Heading>

        <Text opacity={0.7} fontWeight={100} lineHeight="28px">
          {text}
        </Text>
      </CardBody>
    </Card>
  );
};
