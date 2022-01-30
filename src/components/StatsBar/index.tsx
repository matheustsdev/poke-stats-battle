import { Container } from "./styles";

interface StatsBarProps {
  color: string;
  value: number;
  label: string;
}

export function StatsBar({ color, value, label }: StatsBarProps) {
  return (
    <Container color={color} value={value}>
      <p>{label}</p>
      <div />
      <p>{value}</p>
    </Container>
  );
}
