import { darken, lighten } from "polished";
import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  background: var(--poke-blue);
  width: 15rem;
  height: 21rem;
  border-radius: 0.5rem;
  padding-bottom: 1rem;

  img {
    width: 8rem;
  }

  span {
    width: 100%;
    height: 2rem;
    padding: 0.5rem 0;
    background: ${darken(0.1, "#2a75bb")};
    border-radius: 0.5rem 0.5rem 0 0;

    font-weight: bolder;
    text-align: center;
    font-size: 1rem;
    color: white;
  }

  transition: transform 0.2s;

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const ImageBox = styled.div`
  width: 12rem;
  height: 10rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: radial-gradient(
    ${lighten(0.25, colors.yellow)},
    ${darken(0.125, colors.yellow)}
  );
  img {
    width: 8rem;
  }
`;
