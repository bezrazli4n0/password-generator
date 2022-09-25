import { FC } from "react";
import { Text, Box, HStack } from "@chakra-ui/react";
import { PasswordStrength } from "../../types";
import { getPasswordStrengthIndex } from "../../utils";

export interface StrengthLevelProps {
  strength: PasswordStrength;
}

const StrengthLevel: FC<StrengthLevelProps> = ({ strength }) => {
  const strengthIndexes = getPasswordStrengthIndex(strength);
  const remainingIndexes =
    Object.keys(PasswordStrength).length / 2 - strengthIndexes;

  return (
    <Box
      w="full"
      h="full"
      shadow="md"
      bg="gray.900"
      paddingLeft="5"
      paddingRight="5"
      paddingTop="3.5"
      paddingBottom="3.5"
    >
      <HStack justify="space-between">
        <Text fontWeight="800" fontSize="0.875rem" textTransform="uppercase">
          STRENGTH
        </Text>
        <HStack gap="3">
          <Text
            color="gray.100"
            fontWeight="800"
            fontSize="1.15rem"
            textTransform="uppercase"
          >
            {PasswordStrength[strength]}
          </Text>
          <HStack>
            {new Array(strengthIndexes).fill(0).map((_value, index) => (
              <Box key={index} w="6px" h="5" bg="red.300"></Box>
            ))}
            {new Array(remainingIndexes).fill(0).map((_value, index) => (
              <Box key={index} w="6px" h="5" bg="gray.100"></Box>
            ))}
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default StrengthLevel;
