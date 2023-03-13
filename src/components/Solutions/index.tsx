import {
  Box,
  Text,
  Container,
  Heading,
  Stack,
  Flex,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
}

const Item = ({ title, text }: FeatureProps) => {
  return (
    <AccordionItem
      bgColor={"#F9F9F9"}
      borderRadius="8px"
      overflow={"hidden"}
      border="1px solid #ECECEC"
      p="24px 32px"
      mb="16px"
    >
      <Heading as="h2">
        <AccordionButton
          p={0}
          _hover={{
            bgColor: "transparent",
          }}
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            color="#000000"
            fontWeight={500}
            fontSize={"22px"}
            lineHeight="36px"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel pt="24px" px={0}>
        <Text opacity={0.6} fontSize="18px" lineHeight={"32px"}>
          {text}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default function Solutions() {
  return (
    <Flex className='Section__container'>
    <Box as={Container} overflow={"hidden"} className="larger" pb="180px">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: "column", md: "row" }}
        justify="center"
        mb="72px"
      >
        <Box pt="148px" textAlign={"center"}>
          <Text
            color="blue.100"
            fontWeight={700}
            textTransform="uppercase"
            mb="8px"
          >
            Soluções
          </Text>

          <Heading
            className="title"
            lineHeight="60px"
            fontWeight={600}
            as="h2"
            fontSize={"48px"}
          >
            Dúvidas Frequentes
          </Heading>
          {/* <Text opacity={0.6} fontSize={"18px"} lineHeight="40px">
            Conheça os benefícios que a convergefy oferece.
          </Text> */}
        </Box>
      </Stack>
      <Accordion allowToggle>
        <Item
          title="Como a convergefy pode auxiliar na minha empresa?"
          text="Quisque quis orci quis tellus ultricies aliquam vitae et augue.
        Donec nulla ipsum, ultrices a semper ac, bibendum in orci. Curabitur
        posuere sem a massa luctus, ac tincidunt nisl varius. Proin tempus
        efficitur magna vitae mattis. In vitae viverra mi. Fusce blandit
        sagittis cursus. Mauris vehicula augue eget mattis vehicula. In
        efficitur dui eu nisl feugiat tempor. Phasellus quis viverra elit
        Suspendisse fringilla nec urna at ornare. Donec sit amet mi
        ultricies, elementum"
        />
        <Item
          title="Quais as vantagens de contratar os serviços da convergefy?"
          text="Quisque quis orci quis tellus ultricies aliquam vitae et augue.
        "
        />
         <Item
          title="Como a convergefy loren ipson loren?"
          text="Quisque quis orci quis tellus ultricies aliquam vitae et augue.
        "
        />
         <Item
          title="Loren ipson loren loren?"
          text="Quisque quis orci quis tellus ultricies aliquam vitae et augue.
        "
        />
         <Item
          title="Loren ipson?"
          text="Quisque quis orci quis tellus ultricies aliquam vitae et augue.
        "
        />

      </Accordion>
    </Box>
    </Flex>
  );
}
