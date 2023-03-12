import Slider from "react-slick";

import { Container, ContainerProjects } from "./styles";
import { TitleSection } from "../AboutMe/styles";
import Project from "../../Project";

import ImageBiblioteca from "../../../assets/imgs/highlights/biblioteca.png";
import GifBiblioteca from "../../../assets/imgs/highlights/biblioteca.gif";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


export default function Projects() {
  const projects = [
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
    {
      title: "Biblioteca ETEPAM",
      image: ImageBiblioteca,
      gif: GifBiblioteca,
      tecs: [FaJs, FaReact, FaNodeJs, SiMysql],
    },
  ];
  const settigns = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    touchMove: true,
    centerPadding: "500px"
  };
  console.log(Slider)
  return (
    <Container>
      <TitleSection>Projetos</TitleSection>
      <ContainerProjects>
        <Slider {...settigns}>
          {projects.map((item, index) => (
            <Project key={index} project={item} />
          ))}
        </Slider>
      </ContainerProjects>
    </Container>
  );
}
