import { Container, Tecs, Title } from "./styles";

export default function Project({ project }) {
  const { title, image, gif, tecs } = project;
  return (
    <Container image={image} gif={gif}>
      <Title>{title}</Title>
      <Tecs>
        {tecs.map((Item, index) => (
          <Item key={index} />
        ))}
      </Tecs>
    </Container>
  );
}
