import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
  chakra,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  logoFooter,
  footerIcon1,
  footerIcon2,
  footerIcon3,
} from "../../assets/images";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

type ListItemProps = {
  label: string;

  href: string;
};

const ListItem = ({ label, href }: ListItemProps) => {
  return (
    <Flex
      py="12px"
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

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="none"
      rounded={"full"}
      h={"32px"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="#152231" color="white">
      <Flex className="Section__container">
        <Container as={Stack} py={"50px"} className="larger">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} pt="70px">
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
                {i !== 1 ? (
                  listItem.items.map((item, index) => (
                    <ListItem label={item.label} href={item.href} key={index} />
                  ))
                ) : (
                  <Stack direction={"row"} spacing={6}>
                    <SocialButton label={"Facebook"} href={"#"}>
                      <FaFacebookF />
                    </SocialButton>
                    <SocialButton label={"Instagram"} href={"#"}>
                      <FaInstagram />
                    </SocialButton>
                    <SocialButton label={"Twitter"} href={"#"}>
                      <FaTwitter />
                    </SocialButton>
                    <SocialButton label={"YouTube"} href={"#"}>
                      <FaYoutube />
                    </SocialButton>
                  </Stack>
                )}
              </Box>
            ))}

            <Box>
              <Text
                color="white"
                fontWeight={700}
                fontSize={"20px"}
                lineHeight="32px"
              >
                Informações de contato
              </Text>

              <Box
                width="24px"
                mt="24px"
                mb="12px"
                height={"2px"}
                bgColor={"#C6D7F8"}
              />
              <Stack spacing="24px">
                <Flex height="28px" gap="18px">
                  <Image src={footerIcon1} alt="location" />

                  <Flex
                    color="white"
                    opacity={0.8}
                    height="28px"
                    align="center"
                    gap="8px"
                  >
                    <Text whiteSpace={"nowrap"}>Av, Loren ipson</Text>
                    <Box
                      minW="4px"
                      w="4px"
                      h="4px"
                      bgColor={"#276CF8"}
                      borderRadius={"full"}
                    />
                    <Text whiteSpace={"nowrap"}>Castilhos</Text>
                    <Box
                      minW="4px"
                      w="4px"
                      h="4px"
                      bgColor={"#276CF8"}
                      borderRadius={"full"}
                    />

                    <Text whiteSpace={"nowrap"}>São Paulo/SP</Text>
                  </Flex>
                </Flex>

                <Flex height="28px" gap="18px" opacity={0.8}>
                  <Image src={footerIcon2} alt="location" />

                  <Text whiteSpace={"nowrap"}>convergefy@contato.com</Text>
                </Flex>

                <Flex height="28px" gap="18px" opacity={0.8}>
                  <Image src={footerIcon3} alt="location" />

                  <Text whiteSpace={"nowrap"}>(+55) 11 999-999-999</Text>
                </Flex>
              </Stack>
            </Box>
          </SimpleGrid>
          <Stack py={0} direction="row">
            <Text>Todos os direitos reservados.</Text>
          </Stack>
        </Container>
      </Flex>
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
];
