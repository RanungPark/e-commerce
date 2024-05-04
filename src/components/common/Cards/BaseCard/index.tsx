import styled from 'styled-components';
import Text from '../../Text';

const StyledBaseCard = styled.section`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  padding: 80px;

  & h3 {
    margin-bottom: 16px;
  }
`;

interface BaseCardProps {
  label: string;
  description: string;
}

const BaseCard = ({ label, description }: BaseCardProps) => {
  return (
    <StyledBaseCard>
      <Text as="h3" typography="Heading3">
        {label}
      </Text>
      <Text as="article" typography="Body">
        {description}
      </Text>
    </StyledBaseCard>
  );
};

export default BaseCard;
