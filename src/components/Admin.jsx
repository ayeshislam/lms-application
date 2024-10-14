import { Box, Grid, Button, Text, Stack, useColorMode } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateData, deleteData } from "../redux/action";
import { useEffect, useState } from "react";

export function Admin() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data || []);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleUpdate = (id) => {
    const duration = prompt("Enter the updated duration:");
    const fees = prompt("Enter the updated fees:");

    if (duration && fees) {
      const payload = { id, obj: { duration, fees } };
      dispatch(updateData(payload));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <Box mt={12} ml={8}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
      >
        {Object.entries(data).map(([id, ele]) => {
          if (!ele || !ele.duration || !ele.fees) return null;

          return (
            <Box
              key={id}
              pl={9}
              textAlign="center"
              boxShadow="inner"
              p="6"
              rounded="md"
              bg="skyblue"
            >
              <Text>Course: {ele.course}</Text>
              <Text>Duration: {ele.duration}</Text>
              <Text>Fees: {ele.fees}</Text>
              <Button mr={4} onClick={() => handleUpdate(id)}>
                Update
              </Button>
              <Button onClick={() => handleDelete(id)}>Delete</Button>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
