import React from "react";
import { motion } from "framer-motion";
import { Box, GridItem, Badge, Text, Image, Stack } from "@chakra-ui/react";

const Cards = () => {
  const data = [
    {
      key: 1,
      name: "java",
      name1: "Data structures",
      heading: "Data structures without inbuilt Library",
      url: "https://res.cloudinary.com/practicaldev/image/fetch/s--gNp9r0Tx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/dbvcampra/image/upload/v1588403699/Webp.net-resizeimage_5_beudao.jpg",
      information:
        "Created 6 type of data structures using nodes and basic core java without using the library to understand the basic functionality how the data structures work behind the scenes and how the communicate it was a lengthy assignment took many days from this project i came to understand data structures like Linked list,Stack,Queue,HashMap,,N-bianryTree,PriorityQueue",
    },
    {
      key: 2,
      name: "jav2ee",
      name1: "hibernate",
      heading:
        "connecting database(MYSQL) with java program and fetch and add data",
      url: "https://corejava25hours.files.wordpress.com/2017/03/5.png?w=930&h=450&crop=1",
      information:
        "Created a program which fetch data from excel and seperate them and make an object of them and use hibernate to send them to the database or the same process to search the data from the database and update or delete the data ana find the matching data in database and show it to user it was whole written in java by this project i understood how to connect java program to a database and also i leanr about maven in the project ",
    },
    {
      key: 3,
      name: "springboot",
      name1: "RestAPI",
      heading: "CRUD applciation for a library with RestApi in springboot",
      url: "https://i0.wp.com/e4developer.com/wp-content/uploads/2018/01/spring-boot.png?w=810&ssl=1",
      information:
        "Created a crud application with the usage of Spring Boot from RestApi and spring mvc for creating the front end pages with jsp format and how to connect the front end and the backend and consume the api using restTemplate and hwo to display the data used hibernate for connection to database(MYSQL) created a login platform too where information is being matched then only the person can go ahead the whole project is made using java2ee   ",
    },
    {
      key: 4,
      name: "Nodejs",
      name1: "RestAPI",
      heading:
        "Performing CRUD operation and rendering pages using ejs engine and node js ",
      url: "https://devjunior.s3-ap-southeast-2.amazonaws.com/media/nodejs_express.png",
      information:
        "Created a Crud application where authentication middleware was there and the application was purely made in node js to render pages i used ejs engine and used sequelize orm to connect to sql and update delete the api i learnt a lot about javascript using nodejs and it fantasize me a lot from that day i started learning about js and learn a lot of modules in node js and the syntax structure it helped me to build my interest in mean and mern stack",
    },
    {
      key: 5,
      name: "Angular",
      name1: "Nodejs",
      heading:
        "Using angular for frontend and node js for backend (RestAPI) for crud application",
      url: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/112193768/original/26ae92e6a41a6313b169945ee7916e7c3d1ce5ae/make-websites-in-angular-and-nodejs.png",
      information:
        "Made the same project which i made in node js but used angular as a frontend for this project and made api using node js and consumed it in angular using http client and learnt typescript for using angular and learn how to use formcontrol and how to send the data and fetch it with authentication (JWT token) and a lot of things i learnt",
    },
    {
      key: 6,
      name: "Reactjs",
      name2: "Nodejs,Chakra-ui",
      heading:
        "Made portfolio using React js and used node js for contact form mail forwarding",
      url: "https://miro.medium.com/max/1400/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg",
      information:
        "Made this portfolio using react js with a lot of libraries used in it and using chakra ui for the ui part ",
    },
  ];
  return data.map((data) => (
    <GridItem
      key={data.key}
      color="black"
      mb={5}
      as={motion.div}
      whileHover={{
        scale: 1.1,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Box
        w="400px"
        overflow="hidden"
        rounded="20px"
        boxShadow="sm"
        bg="gray.200"
      >
        <Image src={data.url} alt="Course Cover" h={200} />
        <Box p={5}>
          <Stack isInline align="baseline">
            <Badge variant="solid" variantcolor="teal" rounded="full" px={2}>
              {data.name}
            </Badge>
            <Badge variant="solid" variantcolor="teal" rounded="full" px={2}>
              {data.name1}
            </Badge>
            <Text
              textTransform="uppercase"
              fontSize="sm"
              color="gray.500"
              letterSpacing="wide"
            ></Text>
          </Stack>
          <Text as="h2" fontWeight="semibold" fontSize="xl" my="2">
            {data.heading}{" "}
          </Text>
          <Text fontWeight="light" fontSize="md">
            {data.information}
          </Text>
        </Box>
      </Box>
    </GridItem>
  ));
};

export default Cards;