import { Container, LogoContainer } from "./styles";
import Image from "next/image";
import PokeLogoSvg from "../../assets/pokemon-23-logo-svg-vector.svg";
import { LogButton } from "../LogButton";

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <Image src={PokeLogoSvg} alt="Logo Pokemon" width={160} height={32} />
        <p>Battle stats</p>
      </LogoContainer>
      <LogButton />
    </Container>
  );
}
