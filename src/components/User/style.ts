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

export const flexCenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`

export const flexWrapDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 920px;
  margin: 0 auto;
  img {
    width: 300px;
    height: 300px;
  }
  .postlink {
    position: relative;
    cursor: pointer;
  }
  padding: 1rem;
  padding-top: 0;
`

export const hoverDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  gap: 1rem;
`

export const flexCenterHoverDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`