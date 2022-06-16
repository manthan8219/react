import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./Component/About";
import Banner from "./Component/Banner";
import Contact from "./Component/Contact";
import Education from "./Component/Education";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
import theme from "./theme";
import Navbar from "./Component/Sub-components/Navbar";
import Transparent from "./Component/Sub-components/Transparent";
import back from "./background.jpg";
import tech from "./tech.jpg";
import pc from "./pc.jpg";
import soccer from "./soccer.jpg";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <header>
        <Navbar />

        <Banner />
      </header>
      <Transparent backgroundImage={soccer} />
      <About />
      <Transparent backgroundImage={tech} />
      <Education />
      <Transparent backgroundImage={pc} />
      <Projects />
      <Transparent backgroundImage={back} />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </ChakraProvider>
  );
}

export default App;