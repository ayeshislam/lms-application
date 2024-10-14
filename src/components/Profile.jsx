import { Box, Avatar, Text, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUser } from "react-icons/fa";

export const Profile = () => {
  const { isLogged } = useContext(AuthContext);
  const { colorMode } = useColorMode(); // Use the color mode hook

  return (
    <Box textAlign="center">
      <Avatar
        size="lg"
        mb={2}
        bg="teal.500"
        color="white"
        fontSize="xl"
        icon={<FaUser />}
        fontFamily="'Roboto', sans-serif"
      />
      <Text
        fontFamily="'Roboto', sans-serif"
        fontWeight="bold"
        color={colorMode === "dark" ? "gray" : "black"}
      >
        {isLogged.user}
      </Text>
    </Box>
  );
};
