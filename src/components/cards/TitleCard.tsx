import React from 'react';
import styled from 'styled-components';

interface TitleCardProps {
  children: string;
}

const TitleCard = ({ children }: TitleCardProps) => {
  return <TitleCardWrapper>{children}</TitleCardWrapper>;
};

const TitleCardWrapper = styled.h2`
  ${({ theme }) => theme.typography.Heading2}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 80px;
`;

export default TitleCard;
