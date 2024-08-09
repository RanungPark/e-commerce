import React from 'react';
import styled from 'styled-components';

interface TitleCardProps {
  children: string;
}

const TitleCard = ({ children }: TitleCardProps) => {
  return (
    <TitleCardWrapper className="bb-1 p-10">{children}</TitleCardWrapper>
  );
};

const TitleCardWrapper = styled.h2`
  ${({ theme }) => theme.typography.Heading2}
`;

export default TitleCard;
