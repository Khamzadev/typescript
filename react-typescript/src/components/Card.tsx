import React, { FC } from 'react';

export enum CardVariant{
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactChild | React.ReactNode;
  variant:CardVariant;
}

const Card: FC<CardProps> = ({ width, height, children }) => {
  return <div style={{ width, height, border: '2px solid gray' }}>{children}</div>;
};

export default Card;
