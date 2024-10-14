// src/theme.js
import { extendTheme } from "@chakra-ui/react";

// Define the custom themes
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Default mode
    useSystemColorMode: false, // Do not use system color mode preference
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.100" : "gray.800",
        color: props.colorMode === "light" ? "gray.800" : "gray.100",
      },
    }),
  },
});

export default theme;
