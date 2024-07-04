import styled from 'styled-components';
import Text from '../Text';
import Icon from '../Icon';
import { ReactComponent as Instagram } from '@assets/icons/wght300/Brands/Instagram.svg';
import { ReactComponent as Pinterest } from '@assets/icons/wght300/Brands/Pinterest.svg';
import { ReactComponent as Facebook } from '@assets/icons/wght300/Brands/Facebook.svg';
import { ReactComponent as Twitter } from '@assets/icons/wght300/Brands/Twitter.svg';
import { ReactComponent as Telegram } from '@assets/icons/wght300/Brands/Telegram.svg';
import { mixins } from '@styles/Mixin';

const icons = [Instagram, Pinterest, Facebook, Twitter, Telegram];

export const IconInfos = ({ title }: { title?: string }) => {
  return (
    <>
      {title ? (
        <Text as="h5" typography="Heading5" color="gray">
          {title}
        </Text>
      ) : (
        <></>
      )}
      <StyledIcons>
        {icons.map((icon, index) => (
          <Icon key={index} as={icon} />
        ))}
      </StyledIcons>
    </>
  );
};

const StyledIcons = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
`;
