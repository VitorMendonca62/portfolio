import styled from "styled-components";

export const Introdution = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  max-width: 32rem;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const Stack = styled.p`
  font-size: 1.5rem;
  color: #8f8f8f;
`;


export const ContainerAboutMe = styled.section`
  margin: 5rem 0;
`;

export const TitleSection = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;


export const ParagraphAboutMe = styled.p`
  max-width: 26rem;
  word-spacing: 2px;
  letter-spacing: 1px;
  line-height: 24px;
  font-size: 1.25rem;
  color: #8f8f8f;
`;

export const ContainerSkills = styled.section``;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 7.5rem);
  grid-gap: 1.5rem;
`;

export const Skill = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 7.5rem;
  height: 7.5rem;
  background-color: #9e1e4c;
  padding: 1rem;
  cursor: pointer;

  svg {
    width: 5rem;
    height: 5rem;
    fill: #25020f;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Tec = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ececec;
  font-weight: 600;
`;
