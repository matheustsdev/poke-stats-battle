import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.header`
  background: var(--poke-blue);

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 1rem 2rem;

  color: var(--poke-yellow);
  font-weight: 900;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  p {
    text-shadow: -1px 1px 2px ${darken(0.3, "#003a70")};
  }
`;
