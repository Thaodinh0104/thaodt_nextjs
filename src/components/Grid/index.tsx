import React from 'react';
import styled from 'styled-components';
import { device } from '@styles/device';

interface GridProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}
const GridComponent = styled.div<GridProps>`
  display: grid;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-template-columns: repeat(var(--cells), 1fr);
  grid-auto-rows: minmax(-webkit-max-content, var(--cellSize));
  grid-auto-rows: minmax(max-content, var(--cellSize));
  --section-spacing: calc(var(--cellSize) * 4);
  --children-spacing: calc(var(--cellSize) * 4);
  width: 100%;
  margin: 0;
  background-color: ${props => props.backgroundColor};
`;
export function Grid({ children, backgroundColor }: GridProps) {
  return (
    <GridComponent backgroundColor={backgroundColor}>{children}</GridComponent>
  );
}

interface ContainerProps {
  children?: React.ReactNode;
  column: number;
}
const ContainerComponent = styled.div<ContainerProps>`
  grid-column-start: 1;
  grid-column-end: -1;
  @media ${device.laptop} {
    grid-column-start: ${props => props.column};
    grid-column-end: -${props => props.column};
  }
`;
export function Container({ children, column }: ContainerProps) {
  return <ContainerComponent column={column}>{children}</ContainerComponent>;
}
