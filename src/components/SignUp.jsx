import {
  Box,
  Input,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  let url =
    "https://ferc-db-a4c35-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json";

  let username = useRef(null);
  let password = useRef(null);
  let navigate = useNavigate();

  function HandleForm(e) {
    e.preventDefault();

    let obj = {
      username: username.current.value,
      password: password.current.value,
    };
    axios.post(url, obj).then((res) => {
      alert("User saved in DB successfully");
      navigate("/login");
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
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={50}
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
          Sign Up
        </Text>
        <form onSubmit={HandleForm}>
          <Stack spacing={4}>
            <Input
              ref={username}
              placeholder="Your email"
              size="md"
              mb={5}
              variant="filled"
              bg={inputBg} // Dynamic background color based on theme
              color={inputColor} // Dynamic text color based on theme
              _placeholder={{ color: placeholderColor }} // Placeholder color
              focusBorderColor="teal.500"
            />
            <Input
              ref={password}
              type="password"
              placeholder="Your password"
              size="md"
              mb={5}
              variant="filled"
              bg={inputBg}
              color={inputColor}
              _placeholder={{ color: placeholderColor }}
              focusBorderColor="teal.500"
            />
            <Button
              type="submit"
              colorScheme="teal"
              size="md"
              width="100%"
              bg="teal.500"
            >
              SIGN UP
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
