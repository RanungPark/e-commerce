import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button';
import { PickCommonProps } from 'src/@types/common';

const StyledPlanCard = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: auto;
  height: auto;
`;

const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-bottom: none;
  display: flex;
  & img {
    width: 100%;
    height: 16vi; //view port면 몇으로 해야할까
  }
`;

const Description = styled.div`
  width: 100%;
  min-height: 225px;
  padding: 16px;
  border-left: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const DescriptionLabel = styled.h4`
  ${({ theme }) => theme.typography.Subtitle};
  display: block;
  margin-bottom: 16px;
`;

const DescriptionList = styled.ul`
  & li {
    ${({ theme }) => theme.typography.Body};
    width: auto;
    height: 100%;
    list-style: inside;
    margin-bottom: 4px;

    &:last-of-type {
      margin: 0;
    }
  }
`;

type UseCommonProps = 'productImg' | 'label';

type PlanCardProps = PickCommonProps<UseCommonProps> & {
  lists: string[];
};

const PlanCard = ({ productImg, label, lists }: PlanCardProps) => {
  return (
    <StyledPlanCard>
      <Content>
        <img src={productImg} alt="three flower of classic" />
        <Description>
          <DescriptionLabel>{label}</DescriptionLabel>
          <DescriptionList>
            {lists.map(list => (
              <li>{list}</li>
            ))}
          </DescriptionList>
        </Description>
      </Content>
      <Button label="SELECT"></Button>
    </StyledPlanCard>
  );
};

export default PlanCard;
