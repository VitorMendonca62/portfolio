import AboutMe from "../../components/layout/AboutMe";
import HardSkills from "../../components/layout/HardSkills";
import Highlights from "../../components/layout/Highlights";
import Projects from "../../components/layout/Projects";
import { MainContainer } from "./styles";

export default function Main() {
  return (
    <MainContainer>
      <AboutMe />
      <HardSkills />
      <Highlights />
      <Projects />

      {/* 
      <MiniProjects /> */}
    </MainContainer>
  );
}
