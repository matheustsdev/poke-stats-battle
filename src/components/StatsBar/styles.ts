import styled from "styled-components";

interface StyleProps {
  color: string;
  value: number;
}

export const Container = styled.div<StyleProps>`
  display: flex;
  width: 9rem;
  justify-content: space-between;
  align-items: center;

  div {
    width: 5rem;
    height: 0.5rem;
    background-color: #ddd;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      background-color: ${(props) => props.color};
      width: ${(props) => (props.value > 100 ? 5 : (props.value / 100) * 5)}rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      position: absolute;
    }
  }
  p {
    font-size: 0.75rem;
  }

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
