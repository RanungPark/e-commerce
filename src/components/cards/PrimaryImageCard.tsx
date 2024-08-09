import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

interface PrimaryImageCardProps {
  imgPath: string;
  alt: string;
  price?: number;
  children?: string;
  onClick: (e: React.MouseEvent) => void;
}

const PrimaryImageCard = ({
  imgPath,
  alt,
  price,
  children,
  onClick,
}: PrimaryImageCardProps) => {
  return (
    <PrimaryImageCardWrapper className="bb-1" onClick={onClick}>
      <PrimaryImageCardImg alt={alt} src={imgPath} />
      <PrimaryImageCardTextWrapper>
        {children}
        <PrimaryImageCardPriceWrapper>
          {price && `price ${price}$`}
        </PrimaryImageCardPriceWrapper>
      </PrimaryImageCardTextWrapper>
    </PrimaryImageCardWrapper>
  );
};

const PrimaryImageCardWrapper = styled.section`
  ${mixins.flexBox({})}
  width: 100%;
  height: ${768 / 2}px;
  position: relative;
  cursor: pointer;
`;

const PrimaryImageCardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const PrimaryImageCardTextWrapper = styled.div`
  position: absolute;
  ${mixins.flexBox({ direction: 'column' })}
  ${({ theme }) => theme.typography.Heading6}
  background-color: transparent;
  gap: 4px;
  bottom: 24px;
`;

const PrimaryImageCardPriceWrapper = styled.p`
  ${({ theme }) => theme.typography.Caption}
  color: ${({ theme }) => theme.colors.gray};
`;

export default PrimaryImageCard;
