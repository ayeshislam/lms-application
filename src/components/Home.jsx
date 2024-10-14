import { Box, Button, Image, Stack, Text, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" p={4}>
      <Heading mb={4}>Welcome to the Master Tech LMS</Heading>
      <Text fontSize="lg" mb={8}>
        Explore our comprehensive courses in Frontend Development, Backend
        Development, Data Analysis, and more. Whether you're a beginner or
        looking to enhance your skills, we have something for everyone.
      </Text>

      <Stack spacing={8} align="center">
        <Box>
          <Heading size="md" mb={2}>
            Frontend Development
          </Heading>
          <Image
            src="https://plus.unsplash.com/premium_photo-1690303193752-9bae5d085be7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnRlbmR8ZW58MHx8MHx8fDA%3D"
            alt="Frontend Development"
            boxSize="300px"
            borderRadius="md"
            boxShadow="lg"
            ml="350px"
          />
          <Text mt={2}>
            Learn modern web technologies including HTML, CSS, and JavaScript.
            Build interactive and responsive websites using popular frameworks
            like React and Vue.
          </Text>
        </Box>

        {/* Backend Course Section */}
        <Box>
          <Heading size="md" mb={2}>
            Backend Development
          </Heading>
          <Image
            src="https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhY2tlbmR8ZW58MHx8MHx8fDA%3D"
            alt="Backend Development"
            boxSize="300px"
            borderRadius="md"
            boxShadow="lg"
            ml="350px"
          />
          <Text mt={2}>
            Dive into server-side programming with languages like Node.js,
            Python, and Ruby. Understand database management, APIs, and server
            deployment.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={2}>
            Data Analysis
          </Heading>
          <Image
            src="https://plus.unsplash.com/premium_photo-1661434270550-fc467725a2ed?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Data Analysis"
            boxSize="300px"
            borderRadius="md"
            boxShadow="lg"
            ml="350px"
          />
          <Text mt={2}>
            Master the art of data analysis using tools and languages like
            Excel, SQL, and Python. Learn how to interpret data, generate
            insights, and create visualizations.
          </Text>
        </Box>

        <Button colorScheme="teal" onClick={() => navigate("/courses")}>
          Explore All Courses
        </Button>
      </Stack>
    </Box>
  );
};
