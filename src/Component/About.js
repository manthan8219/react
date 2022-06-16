import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import forest from "../forest.jpg";
function About() {
  return (
    <Box id="about" backgroundImage={forest} bgalign="center" height={1350}>
      <Container>
        <Box
          d="flex"
          width="100%"
          height="100%"
          align="center"
          py="20"
          flexDirection="row"
        >
          <Box>
            <Heading
              as="h3"
              size="lg"
              align="center"
              color={useColorModeValue("Black", "grey")}
            >
              About me{" "}
            </Heading>
          </Box>
          <Box>
            <Heading color={useColorModeValue("black", "grey")}>
              Let Me Introduce Myself.
            </Heading>
          </Box>
        </Box>
      </Container>
      <Container>
        <Text
          color={useColorModeValue("Black", "grey")}
          height={200}
          noOfLines={[1, 2, 3, 4, 5, 6, 7, 8]}
        >
          People call me Manthan or Mani . I am a Cynophile,a soccer lover and a
          game addict . I play different type of games solving different kind of
          puzzles and problems in games as well as in life and my codes I am a
          freshly Graduated programmer who has a profecient knowledge of Mern
          Stack , Mean Stack and Java full stack development. Beside this i am a
          web application pentester too as i am a cybersecurity Student.
        </Text>
        <Text
          color={useColorModeValue("Black", "grey")}
          height={200}
          noOfLines={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15.16]}
        >
          Oh yeah , I am a highly motivated ,passionate web developer figuiring
          out new technolgies and learning them and applying them in my
          projects. Getting better day by day Improving myself. I have created
          some crud applications in mean stack and using j2ee in my internship
        </Text>
      </Container>

      <SimpleGrid columns={[2]} spacing="40px" align="left">
        <Box>
          <Container>
            <Heading color={useColorModeValue("Black", "Black")} align="center">
              Profile
            </Heading>
            <Text
              color={useColorModeValue("Black", "black")}
              align="left"
              noOfLines={[1, 2, 3]}
            >
              Web Developer, Web App Penetration testing Bachelor's in
              Technology in Computer Science, Lovely Professional
              University,Punjab
            </Text>
            <Heading
              color={useColorModeValue("Black", "Black")}
              alignItems="left"
              as="h4"
              size="md"
            >
              Full Name:{" "}
            </Heading>
            <Text>Manthan</Text>
            <br />
            <Heading
              color={useColorModeValue("Black", "black")}
              alignItems="left"
              as="h4"
              size="md"
            >
              Birth Date:{" "}
            </Heading>
            <Text>25,Dec,2000</Text>
            <br />
            <Heading
              color={useColorModeValue("Black", "black")}
              alignItems="left"
              as="h4"
              size="md"
            >
              Professional Career:{" "}
            </Heading>
            <Text>Java-Developer at Nagarro softwares</Text>
            <br />
            <Heading
              color={useColorModeValue("Black", "black")}
              alignItems="left"
              as="h4"
              size="md"
            >
              Phone:{" "}
            </Heading>
            <Text>+91-8219751407</Text>
            <br />
            <Heading
              color={useColorModeValue("Black", "black")}
              alignItems="left"
              as="h4"
              size="md"
            >
              Email:{" "}
            </Heading>
            <Text>Manthanbhatia367@gmail.com</Text>
            <br />
          </Container>
        </Box>
        <Box align="left">
          <Container>
            <Heading color={useColorModeValue("Black", "black")} align="center">
              Skills
            </Heading>
            <Text
              color={useColorModeValue("Black", "black")}
              align="left"
              noOfLines={[1, 2, 3, 4, 5]}
            >
              I am a more of a Backend developer.I Have a huge passion in
              developing webistes using javascript,MySQL and now it is totally
              shifting to the trending MERN and MEAN
              (MongoDB,ExpressJS,ReactJS,NodeJS)Stack{" "}
            </Text>
            <Text color={useColorModeValue("Black", "black")}>
              Html,Css,javascript
            </Text>
            <ProgressBar completed={85} animateOnRender={true} />
            <Text color={useColorModeValue("Black", "black")}>Angular</Text>
            <ProgressBar completed={90} animateOnRender={true} />
            <Text color={useColorModeValue("Black", "black")}>Java</Text>
            <ProgressBar completed={90} animateOnRender={true} />
            <Text color={useColorModeValue("Black", "black")}>React</Text>
            <ProgressBar completed={90} animateOnRender={true} />
            <Text color={useColorModeValue("Black", "black")}>
              MySQL,MongoDB
            </Text>
            <ProgressBar completed={85} animateOnRender={true} />
            <Text color={useColorModeValue("Black", "black")}>NodeJS</Text>
            <ProgressBar completed={92} animateOnRender={true} />
          </Container>
        </Box>
      </SimpleGrid>
      <Container align="center">
        <Box>
          <Button
            as={motion.div}
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            color={useColorModeValue("Black", "black")}
            mt={20}
            backgroundColor="white"
            rightIcon={<AiFillLinkedin />}
            variant="outline"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/manthan-824104178/"
            >
              View Profile
            </a>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default About;