import { Container, ContainerProjects } from "./styles";
import { TitleSection } from "../AboutMe/styles";

import ImageBiblioteca from "../../../assets/imgs/highlights/biblioteca.png";
import GifBiblioteca from "../../../assets/imgs/highlights/biblioteca.gif";
// import GifBiblioteca from "../../../assets/imgs/highlights/a.mp4";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import Project from "../../Project";

export default function Highlights() {
  const highlights = [
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "",
      image: "",
      gif: "",
      tecs: [],
    },
    {
      title: "",
      image: "",
      gif: "",
      tecs: [],
    },
  ];
  return (
    <Container>
      <TitleSection>Destaques</TitleSection>
      <ContainerProjects>
        <Project project={highlights[0]} />
        <Project project={highlights[0]} />
        <Project project={highlights[0]} />
      </ContainerProjects>
    </Container>
  );
}
