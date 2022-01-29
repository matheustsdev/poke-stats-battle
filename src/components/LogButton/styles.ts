import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 13rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  padding: 0rem 0.75rem;

  background-color: var(--poke-yellow);

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--poke-blue);
  font-size: 0.875rem;

  cursor: pointer;

  svg {
    font-size: 1rem;
  }

  img {
    background-color: black;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
  }

  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: ${lighten(0.05, "#ffcb05")};
  }
`;
