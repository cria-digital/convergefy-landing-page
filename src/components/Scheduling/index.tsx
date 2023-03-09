import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import { scheduling } from "../../assets/images";

export default function Scheduling() {
  return (
    <Flex w={"full"} h={"541px"} bgColor="blue.100">
      <VStack
        flex={1}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Box maxW={"2xl"} color="#F9F9F9">
          <Text fontWeight={700} mb="8px">
            AGENDAR
          </Text>
          <Heading
            as="h3"
            fontWeight={700}
            lineHeight={"58px"}
            fontSize="48px"
            mb="24px"
          >
            Podemos mostrar para você tudo o que somos capazes
          </Heading>
          <Text fontSize="28px" lineHeight="38px" opacity={0.8} mb="32px">
            Que tal agendar uma call com nosso time ?
          </Text>

          <Button width="278px" variant="primary" bgColor={"#199017"}>
            Agendar reunião gratuita
          </Button>
        </Box>
      </VStack>
      <Box flex={1} pos="relative" >
        <Image src={scheduling} alt="" pos="absolute" left='24px' bottom={0} />
      </Box>
    </Flex>
  );
}
