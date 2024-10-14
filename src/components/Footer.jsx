// src/components/Footer.jsx
import {
  Box,
  Text,
  Image,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export const Footer = () => {
  const bgColor = useColorModeValue("teal.500", "teal.700"); // Matching the navbar background
  const color = useColorModeValue("white", "gray.100"); // Matching the text color in navbar

  return (
    <Box as="footer" bg={bgColor} color={color} py={6} mt={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        {/* LMS Logo and Title */}
        <Stack direction="row" align="center" ml="2">
          <Image
            boxSize="40px" // Reduced size of the image
            borderRadius="full" // Make the image circular
            objectFit="cover"
            src="https://plus.unsplash.com/premium_photo-1679941208895-91501f622a90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nbyUyMG9mJTIwbG1zfGVufDB8fDB8fHww" // Replace with your logo path
            alt="LMS Logo"
          />
          <Text fontSize="lg" fontWeight="bold">
            master tech
          </Text>
        </Stack>
        {/* LMS Description */}
        <Text fontSize="sm" mt={{ base: 4, md: 0 }} textAlign="center">
          Welcome to LMS! We offer in-depth courses on React, JavaScript, and
          Data Analysis. Learn at your own pace and develop skills to advance
          your career in web development and data analytics.
        </Text>
      </Flex>
    </Box>
  );
};
