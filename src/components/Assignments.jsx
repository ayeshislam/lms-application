import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export const Assignments = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box p={6} bg={bgColor} borderRadius="md" shadow="md">
      <Heading mb={4} color={headingColor}>
        Course Assignments
      </Heading>
      <Text fontSize="lg" color={textColor}>
        Here you can view, submit, and track your course assignments. Make sure
        to check the deadlines and upload your work on time.
      </Text>

      <Box mt={6}>
        <Text color={textColor} fontWeight="bold">
          No assignments available at the moment.
        </Text>
        <Button mt={4} colorScheme="teal">
          Upload Assignment
        </Button>
      </Box>
    </Box>
  );
};
