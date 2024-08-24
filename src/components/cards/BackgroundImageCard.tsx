import styled from 'styled-components';

import { mixins } from '@styles/Mixin';

interface BackgroundImageCardProps {
  imgPath: string;
  children: string;
}

type BackgroundImageCardWrapperProps = Pick<
  BackgroundImageCardProps,
  'imgPath'
>;

const BackgroundImageCard = ({
  imgPath,
  children,
}: BackgroundImageCardProps) => {
  return (
    <BackgroundImageCardWrapper imgPath={imgPath}>
      {children}
    </BackgroundImageCardWrapper>
  );
};

const BackgroundImageCardWrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'imgPath',
})<BackgroundImageCardWrapperProps>`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading1}
  width: 100%;
  height: 500px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  background-image: linear-gradient(rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)),
    url(${({ imgPath }) => imgPath});
  background-position: right 100% bottom 25%;
  background-repeat: no-repeat;
  background-size: cover;

  color: ${({ theme }) => theme.colors.white};
`;

export default BackgroundImageCard;
