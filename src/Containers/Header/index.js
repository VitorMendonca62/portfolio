import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.svg";
import {
  Container,
  HeaderContainer,
  Image,
  List,
  Item,
  Button,
} from "./styles";

export default function Header() {
  const itens = [
    { name: "Sobre", direc: "/" },
    { name: "Habilidade", direc: "/" },
    { name: "Destaques", direc: "/" },
    { name: "Mini-projetos", direc: "/" },
    { name: "Contato", direc: "/" },
  ];

  return (
    <HeaderContainer>
      <Container>
        <Image src={Logo}></Image>
        <List>
          {itens.map((item, index) => (
            <Link to={item.direc} key={index}>
              <Item>{item.name}</Item>
            </Link>
          ))}
          <Link to="/">
            <Button>Download CV</Button>
          </Link>
        </List>
      </Container>
    </HeaderContainer>
  );
}
