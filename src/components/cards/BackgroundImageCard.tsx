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
    <BackgroundImageCardWrapper imgPath={imgPath}>
      {children}
    </BackgroundImageCardWrapper>
  );
};

const BackgroundImageCardWrapper = styled.div<BackgroundImageCardWrapperProps>`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading1}

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.35), 
    rgba(0, 0, 0, 0.35)
  ), url(${({ imgPath }) => imgPath});
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  color: ${({ theme }) => theme.colors.white};
  background-position: right 100% bottom 25%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
`;

export default BackgroundImageCard;
