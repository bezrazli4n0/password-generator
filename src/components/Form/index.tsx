import { FC, useReducer, useCallback } from "react";
import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  VStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import StrengthLevel from "../StrengthLevel";
import type { PasswordStrength } from "../../types";
import {
  FormActionKind,
  formReducer,
  FormState,
  INITIAL_FORM_STATE,
} from "../../reducers/form";

export interface FormProps {
  onSubmit: (state: FormState) => void;
  strength: PasswordStrength;
}

const Form: FC<FormProps> = ({ onSubmit, strength }) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE);

  const handleSubmit = useCallback(() => {
    onSubmit(state);
  }, [onSubmit, state]);

  return (
    <Box w="full" h="full" bg="gray.700" shadow="md" padding="5">
      <SimpleGrid gap="5">
        <HStack justify="space-between">
          <Text color="gray.100" fontWeight="400" fontSize="1.15rem">
            Character Length
          </Text>
          <Text color="red.300" fontWeight="800" fontSize="1.35rem">
            {state.charactersLength}
          </Text>
        </HStack>
        <Slider
          min={5}
          max={30}
          defaultValue={15}
          onChange={(value) =>
            dispatch({
              type: FormActionKind.SetCharactersLen,
              payload: value.toString(),
            })
          }
        >
          <SliderTrack bg="gray.900" h="2.5">
            <SliderFilledTrack bg="red.300" />
          </SliderTrack>
          <SliderThumb
            borderColor="red.300"
            bg="gray.900"
            w="1.5rem"
            h="1.5rem"
            border="2px"
          />
        </Slider>
        <VStack gap="2" align="start">
          <Checkbox
            defaultChecked={state.useUpperCase}
            onChange={(_) =>
              dispatch({
                type: FormActionKind.SetMask,
                payload: "useUpperCase",
              })
            }
          >
            Include Uppercase Letters
          </Checkbox>
          <Checkbox
            defaultChecked={state.useLowerCase}
            onChange={(_) =>
              dispatch({
                type: FormActionKind.SetMask,
                payload: "useLowerCase",
              })
            }
          >
            Include Lowercase Letters
          </Checkbox>
          <Checkbox
            defaultChecked={state.useNumeric}
            onChange={(_) =>
              dispatch({
                type: FormActionKind.SetMask,
                payload: "useNumeric",
              })
            }
          >
            Include Numeric
          </Checkbox>
          <Checkbox
            defaultChecked={state.useSymbols}
            onChange={(_) =>
              dispatch({
                type: FormActionKind.SetMask,
                payload: "useSymbols",
              })
            }
          >
            Include Symbols
          </Checkbox>
        </VStack>
        <StrengthLevel strength={strength} />
        <Button onClick={handleSubmit}>Generate</Button>
      </SimpleGrid>
    </Box>
  );
};

export default Form;
