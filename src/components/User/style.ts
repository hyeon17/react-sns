import styled from "styled-components";
import { theme } from '../../styles/theme'

export const gridDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  img {
    grid-column: 1/2;
    grid-row: 1/4;
    border-radius: 50%;
    justify-self: center;
  }
  width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  border-bottom: 1px solid ${theme.colors.dimGray};
  span {
    font-weight: bold;
  }
`