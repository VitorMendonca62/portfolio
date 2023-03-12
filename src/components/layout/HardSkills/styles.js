import styled from "styled-components";

export const Container = styled.section``;

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
  border-radius: 2rem;

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
