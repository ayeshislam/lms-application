import {
  Box,
  Button,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const { flag, user } = isLogged;
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("teal.500", "teal.700");
  const color = useColorModeValue("white", "gray.100");
  const icon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
  const label =
    colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

  function HandleNavigate(path) {
    navigate(path);
  }

  return (
    <Box
      bgColor={bgColor}
      color={color}
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="fixed" // Set the navbar as fixed
      top={0} // Align to the top of the viewport
      left={0} // Align to the left of the viewport
      right={0} // Stretch it across the viewport width
      zIndex="1000" // Ensure the navbar stays on top of other content
      boxShadow="md"
    >
      <IconButton
        aria-label={label}
        icon={icon}
        onClick={toggleColorMode}
        variant="outline"
        position="absolute"
        top={10}
        left={4}
        zIndex="docked"
        size="sm"
      />

      <Flex align="center" ml={20}>
        <Button mr={5} onClick={() => HandleNavigate("/")}>
          Home
        </Button>
        <Button mr={5} onClick={() => HandleNavigate("/courses")}>
          Course
        </Button>
        <Button m="5" onClick={() => HandleNavigate("/adminlogin")}>
          Admin
        </Button>
        <Button mr={5} onClick={() => HandleNavigate("/analytics")}>
          Analytics
        </Button>

        <Spacer />

        {flag ? (
          <>
            <Button m="1" mr={5} onClick={() => HandleNavigate("/dashboard")}>
              Dashboard
            </Button>
            <Button m="1" mr={5}>
              Hi, {user}
            </Button>
            <Button
              m="1"
              onClick={() => {
                setIsLogged({
                  flag: false,
                  user: "",
                });
                HandleNavigate("/login");
              }}
            >
              Log out
            </Button>
          </>
        ) : (
          <Flex>
            <Button m="1" mr={5} onClick={() => HandleNavigate("/login")}>
              Login
            </Button>
            <Button m="1" onClick={() => HandleNavigate("/signup")}>
              Signup
            </Button>
          </Flex>
        )}

        {/* Logo on the right side */}
        <Image
          boxSize="40px"
          borderRadius="full"
          objectFit="cover"
          src="https://plus.unsplash.com/premium_photo-1679941208895-91501f622a90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nbyUyMG9mJTIwbG1zfGVufDB8fDB8fHww"
          alt="LMS Logo"
          ml={400}
        />
      </Flex>
    </Box>
  );
};
