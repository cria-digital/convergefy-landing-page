import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  Button,
  Image,
  Flex,
  FormLabel,
  Input,
  Container,
  Tag,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import {
  eyeIcon,
  planCard1,
  planCard2,
  planCard3,
  StarPrice,
  starPriceWhite,
} from "../../assets/images";

type PriceWrapperProps = {
  name: string;
  image: string;
  price: string;
  description: string;
  starsAmount: number;
};

function PriceWrapper({
  name,
  image,
  price,
  starsAmount,
  description,
}: PriceWrapperProps) {
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
        <Image src={image} alt="" pos="absolute" bottom={0} width="50%" 
        ml='20px'
        />
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
          {description}
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
              disabled={true}
              // opacity={0.5}
            />
          </Stack>
          <Button variant="primary">Assinar agora</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

function PriceWrapperBlue({
  name,
  image,
  price,
  description,
}: PriceWrapperProps) {
  return (
    <Box
      maxW="520px"
      color="white"
      bgColor="black.100"
      shadow="base"
      border="2px solid #ECECEC"
      borderRadius={"16px"}
      px="48px"
      pos="relative"
    >
      <Tag
        height="36px"
        bgColor="#FBBC04"
        borderRadius="8px"
        pos="absolute"
        right="24px"
        top="24px"
      >
        Melhor opção
      </Tag>

      <Flex height="86px" pos="relative" justify={"center"}>
        <Image src={image} alt="" pos="absolute" bottom={0} width="50%"
        ml='20px'
        />
      </Flex>

      <Flex py="48px" flexDir={"column"} align="center">
        <Flex gap="8px" mb="6.08px" height="24px" align="end">
          <Image src={starPriceWhite} alt="" height="14px" />
          <Image src={starPriceWhite} alt="" height="20px" mb="2px" />
          <Image src={starPriceWhite} alt="" height="14px" />
        </Flex>
        <Text fontWeight={500} fontSize="32px" lineHeight="44px" mb="16px">
          {name}
        </Text>

        <Text opacity={0.6} lineHeight="28px">
          {description}
        </Text>
        <Stack pt="24px" spacing={0}>
          <Text color="white" opacity={0.5} fontWeight={100}>
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

        <Flex
          height="28px"
          align="center"
          gap="8px"
          justify="center"
          pt="42px"
          color="white"
          opacity={0.8}
        >
          <AiOutlineEye fontSize={"20px"} />
          <Text>Ver inclusões</Text>
        </Flex>

        <Stack spacing="32px" pt="28px" width="100%">
          <Stack spacing="8px">
            <FormLabel color="white" opacity={0.5} lineHeight="28px">
              *Escolha o formato ideal para o seu negócio
            </FormLabel>
            <Input
              height="48px"
              borderRadius="8px"
              bgColor="white"
              placeholder="Personalizar"
              fontWeight={400}
             
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
    <Box as={Container} className="larger" py="160px">
      <VStack spacing={2} textAlign="center" mb="160px">
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
          maxW="4xl"
          className="title"
        >
          Preparamos com carinho diversas formas de atender o seu negócio
        </Heading>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={[4, "20px"]}
      >
        <PriceWrapper
          name="Iniciante"
          description="Ideal para pequenas empresas com poucos loren ipson loren loren ipson loren"
          image={planCard1}
          price="97,90"
          starsAmount={1}
        />
        <PriceWrapper
          name="Intermediário"
          description="Para empresas que ja estão desenvolvidas no  loren ipson loren ipson ipson"
          image={planCard2}
          price={"219,90"}
          starsAmount={2}
        />
        <PriceWrapperBlue
          name="Avançado"
          description="Ideal para grandes empresas com vastos loren ipson loren loren ipson loren loren"
          image={planCard3}
          price="398,90"
          starsAmount={3}
        />
      </Stack>
    </Box>
  );
}
