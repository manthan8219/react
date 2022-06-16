import React from "react";
import { Text, SimpleGrid, Heading, Box, Container } from "@chakra-ui/react";
import Cards from "./Sub-components/Cards";
function Projects() {
  return (
    <Box id="projects" w="100%" align="center">
      <Container>
        <Heading mb={2}>Projects</Heading>
        <Text mb={5}>Some of the projects made by me till now </Text>
      </Container>
      <SimpleGrid mb={10} columns={[1, 1, 2, 3]} gap={5}>
        <Cards />
      </SimpleGrid>
    </Box>
  );
}

export default Projects;