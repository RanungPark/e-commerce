import { PartialOptional } from 'src/@types/utils';
import styled from 'styled-components';
import { StyledImageCard } from './ImageCards.css';
import Text from '../../Text';

export interface ImageCardsProps {
  label: string;
  productImg: string;
  price: string;
  cardType: 'main' | 'sub';
  description: boolean;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

type OptionalFromImageCardsProps = PartialOptional<
  ImageCardsProps,
  'description' | 'label' | 'price' | 'handleClick'
>;

type PickDescriptionProps = Pick<ImageCardsProps, 'cardType'>;

type PickImageCardWrapperProps = Pick<
  ImageCardsProps,
  'productImg' | 'cardType'
>;

const ImageCards = ({
  label,
  productImg,
  price,
  cardType,
  description = true,
  handleClick,
}: OptionalFromImageCardsProps) => {
  return (
    <StyledImageCards
      className='bl-1 bb-1'
      productImg={productImg}
      cardType={cardType}
      onClick={handleClick}
    >
      {cardType === 'sub' ? <img src={productImg} alt={productImg} /> : <></>}
      {description !== false ? (
        <DescriptionWrapper cardType={cardType}>
          <Text
            as="h6"
            typography={cardType === 'main' ? 'Heading6' : 'Caption'}
          >
            {label}
          </Text>
          <Text as="p" typography="Caption">
            {price}
          </Text>
        </DescriptionWrapper>
      ) : (
        <></>
      )}
    </StyledImageCards>
  );
};

const StyledImageCards = styled.div<PickImageCardWrapperProps>`
  ${({ cardType, productImg }) =>
    cardType === 'main'
      ? StyledImageCard.main({ productImg })
      : StyledImageCard.sub()}
  cursor: pointer;
`;

const DescriptionWrapper = styled.div<PickDescriptionProps>`
  width: 100%;
  height: auto;

  ${({ cardType }) =>
    cardType === 'main'
      ? `
      position: absolute;
      bottom: 24px;
    `
      : null}

  & p {
    color: ${({ theme }) => theme.colors.gray};
  }

  & h6 {
    margin-bottom: 4px;
  }
`;

export default ImageCards;
