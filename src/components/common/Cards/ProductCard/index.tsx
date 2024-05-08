import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import Description from './Description';
import Buttons from '../../Buttons';

const StyledPlanCard = styled.section`
  width: auto;
  height: auto;
`;

const Content = styled.div`
  ${mixins.flexBox({})}
  width: auto;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-bottom: none;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export interface PlanCardProps {
  productImg: string;
  label: string;
  descriptions: string[];
  buttonLabel: string;
}

const ProductCard = ({
  productImg,
  label,
  descriptions,
  buttonLabel,
}: PlanCardProps) => {
  return (
    <StyledPlanCard>
      <Content>
        <img src={productImg} alt="three flower of classic" />
        <Description label={label} descriptions={descriptions} />
      </Content>
      <Buttons buttonType="contained" label={buttonLabel}></Buttons>
    </StyledPlanCard>
  );
};

export default ProductCard;
