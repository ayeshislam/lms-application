// src/components/ThemeToggle.jsx
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; // Correct import

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
  const label =
    colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

  return (
    <IconButton
      aria-label={label}
      icon={icon}
      onClick={toggleColorMode}
      variant="outline"
      position="fixed"
      top={4}
      right={4}
      zIndex="docked"
    />
  );
};
