import { extendTheme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/react";

const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    icon: {
      color: "gray.900",
    },
    control: {
      borderRadius: "unset",
      borderColor: "gray.100",
      _checked: {
        bg: "red.300",
        borderColor: "red.300",
        _hover: {
          bg: "red.300",
          borderColor: "red.300",
        },
      },
    },
    label: {
      color: "gray.100",
      fontWeight: "400",
      fontSize: "3.5",
      fontFamily: "JetBrains Mono",
      marginInlineStart: "0.8rem",
    },
  },
};

const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      fontFamily: "JetBrains Mono",
      fontWeight: "400",
      fontSize: "1.15rem",
      borderRadius: "unset",
      bg: "red.300",
      color: "gray.900",
      _hover: {
        color: "red.300",
        bg: "unset",
        border: "1px solid",
        borderColor: "red.300",
      },
      _active: {
        bg: "unset",
        color: "red.400",
        borderColor: "red.400",
      },
    },
    link: {
      color: "red.300",
    },
  },
  defaultProps: {
    focusBorderColor: "red",
  },
};

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: "JetBrains Mono",
    color: "gray.400",
  },
};

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: "JetBrains Mono",
    color: "gray.400",
    fontWeight: "800",
  },
};

const theme = extendTheme({
  components: {
    Checkbox,
    Button,
    Text,
    Heading,
  },
});

export default theme;
