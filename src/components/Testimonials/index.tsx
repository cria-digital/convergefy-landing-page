import {
  Box,
  Text,
  VStack,
  Button,
  Flex,
  Divider,
  Grid,
  GridItem,
  Container,
  Heading,
  Card,
  ButtonGroup,
  CardBody,
  CardFooter,
  Stack,
  Image,
} from "@chakra-ui/react";
import {
  testimonialCard1,
  testimonialCard2,
  testimonialCard3,
} from "../../assets/images";

interface FeatureProps {
  name: string;
  place: string;
  image: string;
}

const Feature = ({ name, place, image }: FeatureProps) => {
  return (
    <Card
      maxW={["520px"]}
      height="441px"
      maxH="441px"
      backgroundImage={image}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      filter="drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.12))"
      borderRadius="8px"
      pos="relative"
      overflow={"hidden"}
    >
      <CardFooter
        width="100%"
        bgColor="white"
        height="84px"
        p="12px 32px"
        pos="absolute"
        bottom={0}
        display="flex"
        flexDir={"column"}
      >
        <Text fontSize="20px" lineHeight="32px" fontWeight={700}>
          {name}
        </Text>
        <Text opacity={0.6}>{place}</Text>
      </CardFooter>
    </Card>
  );
};

export default function Testimonials() {
  return (
    <Box
      as={Container}
      pt="127px"
      pb="150px"
      overflow={"hidden"}
      className="larger"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        mb="125px"
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="48px">
            <Box>
              <Text
                color="blue.100"
                textTransform={"uppercase"}
                fontWeight={700}
                mb="8px"
              >
                Depoimentos
              </Text>
              <Heading
                as="h2"
                fontSize="48px"
                lineHeight="58px"
                fontWeight="700"
                className="title"
              >
                O que nossos clientes estão falando até agora
              </Heading>
            </Box>
            <Flex gap="28px">
              <Button variant="secondary" width="172px">
                Agendar reunião
              </Button>
              <Button variant="primary" bgColor={"#199017"} width="250px">
                Cadastrar conta
              </Button>
            </Flex>
          </VStack>
        </GridItem>
        <GridItem>
          <Text
            fontSize="24px"
            lineHeight={"40px"}
            opacity={0.6}
            className="testimonal-text"
          >
            Quisque quis orci quis tellus ultricies aliquam vitae et augue.
            Donec nulla ipsum, ultrices a semper ac, bibendum in orci. Curabitur
            posuere sem a massa luctus, ac tincidunt nisl varius. Proin tempus
            efficitur magna vitae mattis. In vitae viverra mi. Fusce blandit
            sagittis cursus. Mauris vehicula augue eget mattis vehicula. In
            efficitur dui eu nisl feugiat tempor. Phasellus quis viverra elit
            Suspendisse fringilla nec urna at ornare. Donec sit amet mi
            ultricies, elementum
          </Text>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
        gap="20px"
      >
        <Feature
          name={"Rodrigo Loren"}
          place={"Nubank"}
          image={testimonialCard1}
        />

        <Feature
          name={"Angela Silva"}
          place={"Gerente de comunicações"}
          image={testimonialCard3}
        />

        <Feature
          name={"Rodolfo Loren"}
          place={"Analista de call center"}
          image={testimonialCard2}
        />
      </Grid>
    </Box>
  );
}
