import styled from 'styled-components';

interface TitleCardProps {
  children: string;
}

const TitleCard = ({ children }: TitleCardProps) => {
  return <TitleCardWrapper>{children}</TitleCardWrapper>;
};

const TitleCardWrapper = styled.h2`
  ${({ theme }) => theme.typography.Heading2}
  padding: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default TitleCard;
