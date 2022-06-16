import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FaUserGraduate } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { AiFillHome, AiFillBook } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";

import { MdCall } from "react-icons/md";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Resume from "../../Resume.pdf";

import {
  useColorModeValue,
  StackDivider,
  VStack,
  useColorMode,
  Box,
  IconButton,
  Flex,
  Button,
  Spacer,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";

function Navbar() {
  const [display, changeDisplay] = useState("none");
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <>
      <header>
        <Flex
          zIndex={1000}
          as="header"
          position="fixed"
          backdropFilter=" blur(5px)"
          w="100%"
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Box p="2">
            <Heading size="xl" color={useColorModeValue("Black", "grey")}>
              Manthan
            </Heading>
          </Box>

          <Spacer />
          <ButtonGroup display={["none", "none", "flex", "flex"]} gap="2">
            <Button
              variant="link"
              color={useColorModeValue("Black", "grey")}
              rightIcon={<AiFillHome />}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Home
              </Link>
            </Button>
            <Button
              variant="link"
              color={useColorModeValue("Black", "grey")}
              rightIcon={<FcAbout />}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={1000}
              >
                About
              </Link>
            </Button>
            <Button
              variant="link"
              color={useColorModeValue("Black", "grey")}
              rightIcon={<AiFillBook />}
            >
              <a href={Resume} download="Manthan_cv">
                CV
              </a>
            </Button>
            <Button
              variant="link"
              color={useColorModeValue("Black", "grey")}
              rightIcon={<FaUserGraduate />}
            >
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                Education
              </Link>
            </Button>
            <Button
              variant="link"
              color={useColorModeValue("Black", "grey")}
              rightIcon={<GrProjects />}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Project
              </Link>
            </Button>
            <Button
              variant="link"
              color={useColorModeValue("Black", "grey")}
              rightIcon={<MdCall />}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                Contact
              </Link>
            </Button>
          </ButtonGroup>

          <IconButton
            aria-label="open-menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          />

          <IconButton
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            aria-label="Toggle Theme"
            color={useColorModeValue("Black", "black")}
            onClick={toggleColorMode}
          />
          <Flex
            w="100%"
            display={display}
            bgColor="gray.50"
            zIndex={1000000000000}
            h="100vh"
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
          >
            <Flex justify="flex-end">
              <IconButton
                mt={2}
                mr={2}
                aria-label="Open Menu"
                size="lg"
                icon={<CloseIcon />}
                onClick={() => changeDisplay("none")}
              />
            </Flex>

            <Flex flexDir="column" align="center">
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                <Button
                  variant="link"
                  color={useColorModeValue("Black", "grey")}
                  rightIcon={<AiFillHome />}
                >
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                  >
                    Home
                  </Link>
                </Button>
                <Button
                  variant="link"
                  color={useColorModeValue("Black", "grey")}
                  rightIcon={<FcAbout />}
                >
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                  >
                    About
                  </Link>
                </Button>
                <Button
                  variant="link"
                  color={useColorModeValue("Black", "grey")}
                  rightIcon={<AiFillBook />}
                >
                  <a href={Resume} download="Manthan_cv">
                    CV
                  </a>
                </Button>
                <Button
                  variant="link"
                  color={useColorModeValue("Black", "grey")}
                  rightIcon={<FaUserGraduate />}
                >
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                  >
                    Education
                  </Link>
                </Button>
                <Button
                  variant="link"
                  color={useColorModeValue("Black", "grey")}
                  rightIcon={<GrProjects />}
                >
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    Project
                  </Link>
                </Button>
                <Button
                  variant="link"
                  color={useColorModeValue("Black", "grey")}
                  rightIcon={<MdCall />}
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000}
                  >
                    Contact
                  </Link>
                </Button>
              </VStack>
            </Flex>
          </Flex>
        </Flex>
      </header>
    </>
  );
}

export default Navbar;