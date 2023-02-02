import { FC, useState } from "react";
import { Container, Heading, VStack, Box, useToast } from "@chakra-ui/react";
import Display from "./components/Display";
import Form from "./components/Form";
import ReactGA from "react-ga4";
import { generatePassword, getPasswordStrength } from "./utils";

const App: FC = () => {
  const [password, setPassword] = useState("#P4$$w0rd!");
  const toast = useToast({
    status: "error",
    position: "bottom-right",
    isClosable: true,
  });

  return (
    <Container display="grid" maxW="full" h="100vh" bg="gray.900">
      <Box
        w={["full", "full", "container.sm"]}
        justifySelf="center"
        alignSelf="center"
        overflow="hidden"
      >
        <VStack gap="8">
          <Heading as="h1" textAlign="center" fontSize="1.5rem">
            Password Generator
          </Heading>
          <Display text={password} copyIcon />
          <Form
            strength={getPasswordStrength(password)}
            onSubmit={(state) => {
              try {
                setPassword(
                  generatePassword(
                    state.useUpperCase,
                    state.useLowerCase,
                    state.useNumeric,
                    state.useSymbols,
                    state.charactersLength
                  )
                );

                ReactGA.event({
                  category: "form_submit",
                  label: "Generate Passowrd",
                  action: "generate_password",
                });
              } catch (error: any) {
                toast({ title: error.message });
              }
            }}
          />
        </VStack>
      </Box>
    </Container>
  );
};

export default App;
