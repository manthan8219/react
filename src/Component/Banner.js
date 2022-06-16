import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MdCall } from "react-icons/md";
import Typed from "react-typed";
import computer from "../computer.jpg";

import {
  useColorModeValue,
  Text,
  Container,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";

function Banner() {
  return (
    <Box backgroundImage={computer} id="home" align="center" height={980}>
      <Container align="center" maxWidth="container.xl">
        <Box d="flex" py="20" flexDirection="row">
          <Box className="mainheading" mt={300}>
            <Heading color={useColorModeValue("Black", "Black")}>
              <Box mb={5}>
                <Text>Hi</Text>
              </Box>
              <Box mb={5}>
                <Text>Myself Manthan</Text>
              </Box>
              <Box mb={50}>
                <Text>
                  I am a{" "}
                  <Typed
                    strings={[
                      "Java Developer",
                      "Web Developer",
                      "Mean Stack Developer",
                      "Mern Stack Developer",
                      "web app Penetration Tester",
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                  />
                </Text>
              </Box>
            </Heading>

            <Box d="flex" alignItems="center">
              <Button
                as={motion.div}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                size="lg"
                color={useColorModeValue("Black", "Black")}
                rightIcon={<MdCall />}
                backgroundColor="white"
                colorScheme="teal"
                variant="outline"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={2000}
                >
                  Contact Me
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;