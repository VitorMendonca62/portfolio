import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #9e1e4c;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 9999999999999;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img``;

export const Item = styled.li`
  color: #ececec;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  font-weight: 400;
  margin: 0 0.5rem;

  &:hover {
    color: #8f8f8f;
    background-color: #ff1168;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  width: 8rem;
  background-color: #ff1168;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #ff1168a1;

    opacity: 0.5;
  }
`;
