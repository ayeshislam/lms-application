import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
  VStack,
} from "@chakra-ui/react";

export const Quizzes = () => {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperText Machine Language",
        "HighText Markup Language",
        "None of the above",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which of the following is correct about CSS?",
      options: [
        "CSS is a language used to describe the presentation of web pages.",
        "CSS is designed to separate the content of the document from its presentation.",
        "CSS can be used with any XML-based markup language.",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Mozilla", "Microsoft", "Sun Microsystems"],
      answer: "Netscape",
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Undefined", "Float"],
      answer: "Float",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submit, setSubmit] = useState(true);
  const [timeLeft, setTimeLeft] = useState(300); // 15 minutes = 900 seconds

  // Timer countdown logic
  useEffect(() => {
    if (timeLeft > 0 && submit) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      handleSubmit(); // Auto-submit when time is up
    }
  }, [timeLeft, submit]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleOptionChange = (questionIndex, option) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = option;
    setSelectedAnswers(newSelectedAnswers);
  };

  const calculateScore = () => {
    let newScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const handleSubmit = () => {
    calculateScore();
    setSubmit(false);
  };

  const handleRestart = () => {
    setSelectedAnswers([]);
    setScore(0);
    setSubmit(true);
    setTimeLeft(300); // Reset the timer to 15 minutes
  };

  return (
    <Box p={6} maxW="800px" mx="auto">
      {submit ? (
        <Card shadow="lg" p={6} borderRadius="md" overflow="hidden">
          <CardBody>
            <Heading as="h1" mb={6} textAlign="center">
              Quiz
            </Heading>

            <Text textAlign="center" fontSize="lg" mb={6} color="red.500">
              Time Remaining: {formatTime(timeLeft)}
            </Text>
            {questions.map((question, index) => (
              <Box key={index} mb={4}>
                <Text fontSize="lg" mb={3}>
                  {index + 1}. {question.question}
                </Text>
                <RadioGroup
                  onChange={(value) => handleOptionChange(index, value)}
                  value={selectedAnswers[index]}
                >
                  <Stack direction="column">
                    {question.options.map((option) => (
                      <Radio key={option} value={option}>
                        {option}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </Box>
            ))}
          </CardBody>
          <CardFooter justifyContent="center">
            <Button colorScheme="teal" mt={4} onClick={handleSubmit}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card shadow="lg" p={6} borderRadius="md" textAlign="center">
          <CardBody>
            <Heading as="h2" mb={6}>
              Your score is: {score}
            </Heading>
          </CardBody>
          <CardFooter justifyContent="center">
            <Button colorScheme="teal" onClick={handleRestart}>
              Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      )}
    </Box>
  );
};
