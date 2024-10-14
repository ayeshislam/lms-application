import {
  Box,
  Input,
  Button,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const firebaseUrl =
    "https://ferc-db-a4c35-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json";

  const username = useRef(null);
  const password = useRef(null);
  const { setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function HandleForm(e) {
    e.preventDefault();

    const usernameValue = username.current.value.trim();
    const passwordValue = password.current.value.trim();

    if (!usernameValue || !passwordValue) {
      setError("Please enter both username and password.");
      return;
    }

    const obj = {
      username: usernameValue,
      password: passwordValue,
    };

    axios
      .get(firebaseUrl)
      .then((res) => {
        const users = res.data || {};
        const filteredData = Object.entries(users).filter(
          ([id, user]) =>
            user.username === obj.username && user.password === obj.password
        );

        if (filteredData.length === 0) {
          setError("Wrong Credentials");
        } else {
          setIsLogged({
            flag: true,
            user: filteredData[0][1].username,
          });

          const selectedCourse = filteredData[0][1].selectedCourse || null;
          if (selectedCourse) {
            localStorage.setItem("selectedCourse", selectedCourse);
          }

          navigate("/dashboard");
        }
      })
      .catch(() => {
        setError("Failed to connect to the server.");
      });
  }

  // Dynamic colors based on the color mode
  const bgColor = useColorModeValue("teal.400", "teal.600"); // Box background color
  const inputBg = useColorModeValue("white", "gray.700"); // Input background color
  const inputColor = useColorModeValue("black", "white"); // Input text color
  const placeholderColor = useColorModeValue("gray.500", "gray.300"); // Placeholder color

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={bgColor}
        p={8}
        borderRadius="md"
        shadow="md"
        width="350px"
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Log In
        </Text>
        <form onSubmit={HandleForm}>
          <Stack spacing={4}>
            <Input
              ref={username}
              placeholder="Username"
              size="md"
              variant="filled"
              focusBorderColor="teal.800"
              bg={inputBg} // Background color based on theme
              color={inputColor} // Text color based on theme
              _placeholder={{ color: placeholderColor }} // Placeholder color
            />
            <Input
              ref={password}
              type="password"
              placeholder="Your password"
              size="md"
              variant="filled"
              focusBorderColor="teal.800"
              bg={inputBg} // Background color based on theme
              color={inputColor} // Text color based on theme
              _placeholder={{ color: placeholderColor }} // Placeholder color
            />

            <Button type="submit" bg="teal.700" size="md" width="100%">
              LOG IN
            </Button>
          </Stack>
        </form>
        {error && (
          <Text color="red.500" mt={4}>
            {error}
          </Text>
        )}{" "}
        {/* Display error message */}
      </Box>
    </Box>
  );
};
