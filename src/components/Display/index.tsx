import { FC } from "react";
import { Box, HStack, Text, IconButton } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import copy from "copy-to-clipboard";

export interface DisplayProps {
  text: string;
  copyIcon?: boolean;
}

const Display: FC<DisplayProps> = ({ text, copyIcon }) => {
  return (
    <Box
      w="full"
      h="full"
      bg="gray.700"
      paddingLeft="5"
      paddingRight="5"
      paddingTop="4"
      paddingBottom="4"
      shadow="md"
    >
      <HStack justify="space-between">
        <Text
          fontWeight="800"
          fontSize="1.35rem"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {text}
        </Text>
        {copyIcon ? (
          <IconButton
            aria-label="Copy text"
            icon={<CopyIcon w="6" h="6" transform="scale(-1, 1)" />}
            variant="link"
            onClick={() => copy(text)}
          />
        ) : null}
      </HStack>
    </Box>
  );
};

export default Display;
