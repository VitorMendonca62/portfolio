import mainImage from "../../../assets/imgs/main-image.png";

import {
  Introdution,
  ContainerTitle,
  Title,
  Strong,
  Stack,
  ContainerAboutMe,
  TitleSection,
  ParagraphAboutMe,
} from "./styles";

export default function AboutMe() {
  return (
    <>
      <Introdution>
        <ContainerTitle>
          <Title>
            Olá, seja bem-vindo(a) Sou <Strong>Vitor Mendonça</Strong>
          </Title>
          <Stack>Desenvolvedor Front-End</Stack>
        </ContainerTitle>
        <img src={mainImage} alt="" />
      </Introdution>
      <ContainerAboutMe>
        <TitleSection>Sobre mim</TitleSection>
        <ParagraphAboutMe>
          Desenvolvedor Front-end com conhecimentos em HTML, CSS, JavaScript,
          ReactJS, consumo de APIs, NodeJS, MySQL e Figma. Amante por tecnologia
          e desenvolvimento, gosta de estar sempre atualizado das novas
          tecnologias e do mundo. Formado em Manutenção e Suporte em informática
          e cursando Desenvolvimento de Sistemas.
        </ParagraphAboutMe>
      </ContainerAboutMe>
    </>
  );
}
