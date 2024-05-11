import styled from 'styled-components';
import Text from '../../Text';
import { PlanCardProps } from '.';

interface DescriptionProps extends PlanCardProps {}

type PickFromDescriptionProps = Pick<
  DescriptionProps,
  'label' | 'descriptions'
>;

const Description = ({ label, descriptions }: PickFromDescriptionProps) => {
  return (
    <StyledDescription>
      <Text as="h4" typography="Subtitle">
        {label}
      </Text>
      <DescriptionList>
        {descriptions.map(description => (
          <Text as="li" typography="Body">
            {description}
          </Text>
        ))}
      </DescriptionList>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  width: 100%;
  height: 100%;
  min-height: 225px;
  padding: 16px;
  border-left: 1px solid ${({ theme }) => theme.colors.lightgray};

  & h4 {
    margin-bottom: 16px;
  }
`;

const DescriptionList = styled.ul`
  & li {
    width: auto;
    height: 100%;
    list-style: inside;
    margin-bottom: 4px;

    &:last-of-type {
      margin: 0;
    }
  }
`;

export default Description;
