import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Image,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import {
  eyeIcon,
  planCard1,
  planCard2,
  planCard3,
  pricesTable,
  StarPrice,
} from "../../assets/images";

type PriceWrapperProps = {
  name: string;
  image: string;
  price: string;
  starsAmount: number;
};

function PriceWrapper({ name, image, price, starsAmount }: PriceWrapperProps) {
  return (
    <Box
      maxW="520px"
      bgColor="white"
      shadow="base"
      border="2px solid #ECECEC"
      borderRadius={"16px"}
      px="48px"
    >
      <Flex height="86px" pos="relative" justify={"center"}>
        <Image src={image} alt="" pos="absolute" bottom={0} width="40%" />
        {/* <Image
          src={image}
          alt=""
          width="140px"
          pos="absolute"
          bottom={0}
          left="30%"
        /> */}
        {/* <Box
          width="220.95px"
          overflow="hidden"
          borderLeftRadius={"full"}
          boxShadow='2.64615px 0px 5.29231px rgba(0, 0, 0, 0.45)'
        >
          <Box
            width="172px"
            height="172px"
            borderRadius="full"
            background=" linear-gradient(255.16deg, #0C214D -44.22%, #276CF8 48.65%, #C6D7F8 154.42%)"
            pos="relative"
          >
            <Image src={pricesTable} alt=""
            transform={'rotate(-10.01deg)'}
            />
         
          </Box>
        </Box> */}
      </Flex>

      <Flex py="48px" flexDir={"column"} align="center">
        <Flex gap="8px">
          <Image src={StarPrice} alt="" height="20px" mb="6.08px" />

          {starsAmount === 2 && (
            <Image src={StarPrice} alt="" height="20px" mb="6.08px" />
          )}
        </Flex>
        <Text fontWeight={500} fontSize="32px" lineHeight="44px" mb="16px">
          {name}
        </Text>

        <Text opacity={0.6} lineHeight="28px">
          Ideal para pequenas empresas com poucos loren ipson loren loren ipson
          loren
        </Text>
        <Stack pt="24px" spacing={0}>
          <Text color="#828282" opacity={0.6} fontWeight={100}>
            Mensalidade do Plano
          </Text>
          <Flex height="58px" align="center" justify="center" gap="12px">
            <Text
              fontSize="48px"
              lineHeight="58px"
              color="blue.100"
              fontWeight={700}
            >
              R$
            </Text>

            <Text
              fontSize="48px"
              lineHeight="58px"
              color="blue.100"
              fontWeight={700}
            >
              {price}
            </Text>
          </Flex>
        </Stack>

        <Flex height="28px" align="center" gap="8px" justify="center" pt="42px">
          <Image src={eyeIcon} alt="icon eye" />
          <Text color="blue.100">Ver inclusões</Text>
        </Flex>

        <Stack spacing="32px" pt="28px" width="100%">
          <Stack spacing="8px">
            <FormLabel color="#F46868" lineHeight="28px">
              *Opção disponível apenas no plano avançado
            </FormLabel>
            <Input
              height="48px"
              borderRadius="8px"
              bgColor="#ECECEC"
              placeholder="Personalizar"
              fontWeight={400}
              color="#eedede"

              // opacity={0.5}
            />
          </Stack>
          <Button variant="primary">Assinar agora</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default function Pricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Text
          fontSize="lg"
          color={"blue.100"}
          textTransform="uppercase"
          fontWeight={700}
          lineHeight="28px"
        >
          Proposta
        </Text>
        <Heading
          as="h2"
          fontSize="48px"
          lineHeight="58px"
          color="black.100"
          maxW="5xl"
        >
          Preparamos com carinho diversas formas de atender o seu negócio
        </Heading>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={[4, "20px"]}
        py="164px"
      >
        <PriceWrapper
          name="Iniciante"
          image={planCard1}
          price="97,90"
          starsAmount={1}
        />
        <PriceWrapper
          name="Intermediário"
          image={planCard2}
          price={"219,90"}
          starsAmount={2}
        />
        <PriceWrapper
          name="Avançado"
          image={planCard3}
          price="398,90"
          starsAmount={3}
        />
      </Stack>
    </Box>
  );
}
