import styled from 'styled-components';
import Stepper from '../common/Stepper';
import Text from '../common/Text';
import { mixins } from '@styles/Mixin';
import { useState } from 'react';
import Buttons from '../common/Buttons';
import { IMG_PATH } from '@constants/imgPath';

const Product = () => {
  const [stepperValue, setstepperValue] = useState(1);

  const handleMinus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (stepperValue > 0) {
      setstepperValue(stepperValue - 1);
    } else {
      return;
    }
  };
  const handlePlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setstepperValue(stepperValue + 1);
  };
  return (
    <StyledPorduct>
      <ImgWrapper>
        <img src={IMG_PATH.FLOWER.ProductPageFlower} alt="ProductPageFlower" />
      </ImgWrapper>
      <ContentWrapper>
        <Text as="p" typography="CaptionBold"></Text>
        <Text as="p" typography="Heading3"></Text>
        <Text as="p" typography="Body"></Text>
        <StepperWrapper>
          <Text as="p" typography="Subtitle">
            {'Quantity'}
          </Text>
          <Stepper
            value={stepperValue}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
          />
        </StepperWrapper>
        <CombinationProduct></CombinationProduct>
        <OptionsWrapper>
          <Text as="p" typography="Subtitle">
            {'Price options'}
          </Text>
        </OptionsWrapper>
        <Buttons buttonType="contained" label="add to basket" />
      </ContentWrapper>
    </StyledPorduct>
  );
};

const CombinationProduct = () => {
  return <></>;
};

const StyledPorduct = styled.section`
  ${mixins.border({ width: 'right' })}
`;

const ImgWrapper = styled.section`
  ${mixins.border({ width: 'leftAndBottom' })}

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.section`
  ${mixins.border({ width: 'leftAndBottom' })}
  padding: 40px;
`;

const StepperWrapper = styled.section`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px;
`;

const OptionsWrapper = styled.section``;

export default Product;
