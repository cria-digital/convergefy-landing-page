import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { logoFooter } from "../../assets/images";

type ListItemProps = {
  label: string;

  href: string;
};

const ListItem = ({ label, href }: ListItemProps) => {
  return (
    <Flex
      py="16px"
      as={Link}
      href={href ?? "#"}
      fontWeight="thin"
      justify={"space-between"}
      align={"center"}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text color="white" opacity={0.8}>
        {label}
      </Text>
      {/* {children && (
      <Icon
        as={ChevronDownIcon}
        transition={"all .25s ease-in-out"}
        transform={isOpen ? "rotate(180deg)" : ""}
        w={6}
        h={6}
      />
    )} */}
    </Flex>
  );
};

export default function Footer() {
  return (
    <Box bg="#152231" color="white">
      <Container as={Stack} py={"124px"} className="larger">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {LIST_ITEMS.map((listItem, i) => (
            <Box key={i}>
              {listItem.heading === "" ? (
                <Image src={logoFooter} alt="logo" />
              ) : (
                <Text
                  color="white"
                  fontWeight={700}
                  fontSize={"20px"}
                  lineHeight="32px"
                >
                  {listItem.heading}
                </Text>
              )}

              <Box
                width="24px"
                mt="24px"
                mb="12px"
                height={"2px"}
                bgColor={"#C6D7F8"}
              />
              {listItem.items.map((item, index) => (
                <ListItem label={item.label} href={item.href} key={index} />
              ))}
            </Box>
          ))}

          {/* <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Features</Link>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack> */}
        </SimpleGrid>
        <Stack py={10} direction="row">
          <Text>Todos os direitos reservados.</Text>
        </Stack>
      </Container>
    </Box>
  );
}

interface ListItens {
  heading: string;
  socialButtons?: boolean;
  items: {
    label: string;
    href: string;
  }[];
}

const LIST_ITEMS: ListItens[] = [
  {
    heading: "",
    items: [
      { label: "Quem nós somos ?", href: "#" },
      { label: "Politicas de privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
    ],
  },
  {
    heading: "Redes Sociais",
    socialButtons: true,
    items: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Linkedin", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
  },
  {
    heading: "Links Úteis",
    items: [
      { label: "Loren ipson loren", href: "#" },
      { label: "Ipson loren", href: "#" },
      { label: "Equipe", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Informações de contato",
    items: [
      { label: "Loren ipson loren", href: "#" },
      { label: "Ipson loren", href: "#" },
      { label: "Equipe", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];
