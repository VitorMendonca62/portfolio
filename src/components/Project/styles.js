import styled from "styled-components";

export const Container = styled.div`
  background: url(${(props) => props.image});
 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50rem;
  height: 19rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-top: 5rem;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: 0.4s;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: black;
    opacity: 0.8;
    top: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.4s;
    background: url(${(props) => props.gif});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &::after {
      background-color: transparent;
    }

    h3,
    div {
      display: none;
    }
  }
`;

export const Title = styled.h3`
  position: relative;
  font-size: 1.5rem;
  z-index: 2;
  margin-bottom: 1rem;
`;

export const Tecs = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  gap: 0.25rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
