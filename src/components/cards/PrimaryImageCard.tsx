import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { changeKroeaPrice } from '@utils/price';

interface PrimaryImageCardProps {
  imgPath: string;
  alt: string;
  price?: number;
  children?: string;
  onClick: (e: React.MouseEvent) => void;
  testId?: string;
}

const PrimaryImageCard = ({
  imgPath,
  alt,
  price,
  children,
  onClick,
  testId,
}: PrimaryImageCardProps) => {
  return (
    <PrimaryImageCardWrapper onClick={onClick} data-cy={testId}>
      <Img alt={alt} src={imgPath} />
      <Contents>
        {children}
        {price !== undefined && (
          <Price>{`Price: ${changeKroeaPrice(price)}`}</Price>
        )}
      </Contents>
    </PrimaryImageCardWrapper>
  );
};

const PrimaryImageCardWrapper = styled.div`
  ${mixins.flexBox({})}
  width: 100%;
  height: ${768 / 2}px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Contents = styled.div`
  position: absolute;
  ${mixins.flexBox({ direction: 'column' })}
  ${({ theme }) => theme.typography.Heading6}
  background-color: transparent;
  gap: 4px;
  bottom: 24px;
`;

const Price = styled.p`
  ${({ theme }) => theme.typography.Caption}
  color: ${({ theme }) => theme.colors.gray};
`;

export default PrimaryImageCard;
