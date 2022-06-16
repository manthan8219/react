import React, { useState } from "react";
import {
  Container,
  Button,
  Heading,
  Box,
  Text,
  FormControl,
  Textarea,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const isInvalid =
    name === "" || email === "" || subject === "" || text === "";

  const data = {
    name: name,
    email: email,
    subject: subject,
    text: text,
  };

  const handleContactForm = (event) => {
    event.preventDefault();
    console.warn(data);

    fetch("https://node-kappa-nine.vercel.app/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };

  return (
    <Box align="center" mt={5} id="contact">
      <Container>
        <Heading>Drop me a Line</Heading>
        <Text>Speak to me if you Have any questions</Text>
      </Container>
      <Container>
        <Box mt={100} align="center">
          <Text align="left" mb={3}>
            {" "}
            Say Hi to Me
          </Text>
          <form method="post" onSubmit={handleContactForm}>
            <FormControl isRequired>
              <FormLabel htmlFor="Name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                onChange={({ target }) => setName(target.value)}
              />

              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                onChange={({ target }) => setEmail(target.value)}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>

              <FormLabel htmlFor="Subject">Subject</FormLabel>
              <Input
                id="Subject"
                placeholder="Subject"
                onChange={({ target }) => setSubject(target.value)}
              />

              <Text mb="8px" mt={1} align="left">
                Message:{" "}
              </Text>
              <Textarea
                placeholder="Message"
                size="sm"
                onChange={({ target }) => setText(target.value)}
              />

              <Button
                mt={4}
                mb={4}
                type="submit"
                disabled={isInvalid}
                colorScheme="blue"
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;