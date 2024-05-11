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
}

type OptionalFromImageCardsProps = PartialOptional<
  ImageCardsProps,
  'description'
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
}: OptionalFromImageCardsProps) => {
  return (
    <StyledImageCards productImg={productImg} cardType={cardType}>
      {cardType === 'sub' ? <img src={productImg} alt="steel vase" /> : <></>}
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
