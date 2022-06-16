import React from "react";
import { Box, Text, Container, Heading } from "@chakra-ui/react";
import Timeline from "./Sub-components/Timeline";

function Education() {
  return (
    <Box id="education">
      <Box>
        <Container align="center">
          <Heading>Education and Career</Heading>
          <Text>Things Learn till now</Text>
        </Container>
      </Box>
      <Timeline />
    </Box>
  );
}

export default Education;