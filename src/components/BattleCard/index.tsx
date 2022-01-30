import { StatsBar } from "../StatsBar";
import { Container, ImageBox } from "./styles";

export function BattleCard() {
  return (
    <Container>
      <span>Pikachu</span>
      <ImageBox>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg"
          alt="Pokemon"
        />
      </ImageBox>
      <StatsBar label="Força" value={74} color="red" />
      <StatsBar label="Força" value={74} color="red" />
      <StatsBar label="Força" value={74} color="red" />
      <StatsBar label="Força" value={74} color="red" />
    </Container>
  );
}
