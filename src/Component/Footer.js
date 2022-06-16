import React from "react";
import { Box, Container } from "@chakra-ui/react";
import LinkButtons from "./Sub-components/LinkButtons";
function Footer() {
  return (
    <Box id="footer" align="center">
      <Container>
        <LinkButtons />
      </Container>
    </Box>
  );
}

export default Footer;