import { BattleCard } from "../components/BattleCard";
import { Container, Content, Hero } from "../styles/home";

export default function Home() {
  return (
    <Container>
      <Content>
        <h1>Pokemon Battle Stats</h1>
        <p>
          Um jogo de cartas estilo Trunfo, em que cada rodada o jogador escolhe
          uma carta e um status do pokemon para competir contra o mesmo status
          do pokemon inimigo. O vencedor é aquele que ganhar 3 rodadas primeiro.
        </p>
      </Content>
      <Hero>
        <BattleCard />
      </Hero>
    </Container>
  );
}
