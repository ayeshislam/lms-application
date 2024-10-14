// Lectures.jsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Lectures = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Lectures Page
      </Text>
      <Text mt={4}>
        This page will display all the available lectures for the selected
        course.
      </Text>
    </Box>
  );
};
