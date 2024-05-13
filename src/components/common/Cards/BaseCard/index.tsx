import styled from 'styled-components';
import Text from '../../Text';
import { mixins } from 'src/styles/Mixin';

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

const StyledBaseCard = styled.section`
  ${mixins.border({ width: 'leftAndBottom' })}
  width: 100%;
  height: auto;
  padding: 80px;

  & h3 {
    margin-bottom: 16px;
  }
`;

export default BaseCard;
