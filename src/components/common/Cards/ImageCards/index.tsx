import { PartialOptional } from 'src/@types/utils';
import styled from 'styled-components';
import { StyledImageCard } from './ImageCards.css';
import Text from '../../Text';

const StyledImageCards = styled.div<PickImageCardWrapperProps>`
  ${({ cardType, productImg }) =>
    cardType === 'main'
      ? StyledImageCard.main({ productImg })
      : StyledImageCard.sub()}
`;

const DescriptionWrapper = styled.div<PickDescriptionProps>`
  width: 100%;
  height: auto;

  ${({ cardType }) =>
    cardType === 'main' &&
    `
      position: absolute;
      bottom: 24px;
    `}

  & p {
    color: ${({ theme }) => theme.colors.gray};
  }

  & h6 {
    margin-bottom: 4px;
  }
`;

interface ImageCardsProps {
  label: string;
  productImg: string;
  price: string;
  cardType: 'main' | 'sub';
  isDescription: boolean;
}

type OptionalFromImageCardsProps = PartialOptional<
  ImageCardsProps,
  'isDescription'
>;

type PickDescriptionProps = Pick<ImageCardsProps, 'cardType'>;

type PickImageCardWrapperProps = Pick<
  ImageCardsProps,
  'productImg' | 'cardType'
>;

export type PickImageCardProps = Pick<ImageCardsProps, 'productImg'>;

const ImageCards = ({
  label,
  productImg,
  price,
  cardType,
  isDescription = true,
}: OptionalFromImageCardsProps) => {
  return (
    <StyledImageCards productImg={productImg} cardType={cardType}>
      {cardType === 'sub' && <img src={productImg} alt="steel vase" />}
      {isDescription !== false && (
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
      )}
    </StyledImageCards>
  );
};

export default ImageCards;
