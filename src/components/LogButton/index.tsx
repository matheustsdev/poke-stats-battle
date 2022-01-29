import { Container } from "./styles";
import { FiX } from "react-icons/fi";
import Image from "next/image";

export function LogButton() {
  return (
    <Container>
      <Image
        src="https://github.com/matheustsdev.png"
        alt="User photo"
        width={32}
        height={32}
      />

      <p>Matheus Teixeira</p>
      <FiX color="#737380" className="closeSvg" />
    </Container>
  );
}
