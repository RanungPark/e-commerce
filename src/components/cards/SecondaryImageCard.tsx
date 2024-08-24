import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { changeKroeaPrice } from '@utils/price';

interface SecondaryImageCardProps {
  imgPath: string;
  alt: string;
  price: number;
  children: string;
  onClick: (e: React.MouseEvent) => void;
  testId?: string;
}

const SecondaryImageCard = ({
  imgPath,
  alt,
  price,
  children,
  onClick,
  testId,
}: SecondaryImageCardProps) => {
  return (
    <SecondaryImageCardWrapper onClick={onClick} data-cy={testId}>
      <Img alt={alt} src={imgPath} />
      <Contents>
        {children}
        <Price>{changeKroeaPrice(price)}</Price>
      </Contents>
    </SecondaryImageCardWrapper>
  );
};

const SecondaryImageCardWrapper = styled.div`
  width: 100px;

  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const Contents = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Caption}
  overflow: hidden;
  gap: 4px;

  margin-top: 8px;

  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export default SecondaryImageCard;
