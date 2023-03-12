import { Container, Skill, Tec, Skills } from "./styles";
import { TitleSection } from "../AboutMe/styles";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitSquare,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiStyledcomponents, SiMysql } from "react-icons/si";
export default function HardSkills() {
  const skills = [
    { skill: "HTML", image: <FaHtml5 /> },
    { skill: "CSS", image: <FaCss3 /> },
    { skill: "JavaScript", image: <FaJs /> },
    { skill: "ReactJS", image: <FaReact /> },
    { skill: "CSS-In-JS", image: <SiStyledcomponents /> },
    { skill: "Git", image: <FaGitSquare /> },
    { skill: "GitHub", image: <FaGithub /> },
    { skill: "Figma", image: <FaFigma /> },
    { skill: "NodeJS", image: <FaNodeJs /> },
    { skill: "MySQL", image: <SiMysql /> },
  ];

  return (
    <Container>
      <TitleSection>Habilidades</TitleSection>
      <Skills>
        {skills.map((item, index) => (
          <Skill key={index}>
            <Tec>{item.skill}</Tec>
            {item.image}
          </Skill>
        ))}
      </Skills>
    </Container>
  );
}
