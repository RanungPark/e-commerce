import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

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
    <BackgroundImageCardWrapper imgPath={imgPath} className="bl-1 bb-1">
      {children}
    </BackgroundImageCardWrapper>
  );
};

const BackgroundImageCardWrapper = styled.section<BackgroundImageCardWrapperProps>`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading1}
  background-image: linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ),${({
    imgPath,
  }) => `url(${imgPath})`};
  color: ${({ theme }) => theme.colors.white};

  background-size: cover;
  width: 100%;
  height: 500px;
`;

export default BackgroundImageCard;
