import React from 'react';
import styled from 'styled-components';
import Text from '../common/Text';
import { PartialOptional } from 'src/@types/utils';
import Buttons from '../common/Buttons';
import { homeAboutDatas } from '@data/homeAbout';

interface AboutTitleProps {
  title: string;
}

interface AboutInfoProps extends AboutTitleProps {
  info: string;
  caption: string;
  isButton: boolean;
}

type OptionalFormAboutInfoProps = PartialOptional<
  AboutInfoProps,
  'isButton' | 'caption'
>;

const About = () => {
  return (
    <div>
      {homeAboutDatas.map(aboutData => (
        <>
          <AboutTitle title={aboutData.title} />
          {aboutData.infos.map(infoData => (
            <AboutInfo
              key={infoData.title}
              title={infoData.title}
              info={infoData.info}
              caption={infoData?.caption}
              isButton={infoData?.isButton}
            />
          ))}
        </>
      ))}
    </div>
  );
};

const AboutTitle = ({ title }: AboutTitleProps) => {
  return (
    <AboutTitleWrapper className="bl-1 bb-1 br-1">
      <Text as="h2" typography="Heading2">
        {title}
      </Text>
    </AboutTitleWrapper>
  );
};

const AboutInfo = ({
  title,
  info,
  isButton = false,
  caption = '',
}: OptionalFormAboutInfoProps) => {
  return (
    <AboutInfoWrapper className="bl-1 bb-1 br-1">
      {caption ? (
        <Text as="span" typography="Caption">
          {caption}
        </Text>
      ) : (
        <></>
      )}
      <Text as="h3" typography="Heading3">
        {title}
      </Text>
      <Text as="p" typography="Body">
        {info}
      </Text>
      {isButton ? (
        <ButtonWrapper>
          <Buttons
            label="Lern more"
            buttonType="contained"
            colorType="secondary"
          />
        </ButtonWrapper>
      ) : (
        <></>
      )}
    </AboutInfoWrapper>
  );
};

const AboutTitleWrapper = styled.article`
  padding: 80px;
`;

const AboutInfoWrapper = styled(AboutTitleWrapper)`
  & span {
    display: inline-block;
    margin-bottom: 24px;
  }

  & h3 {
    margin-bottom: 16px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 65px;

  & button {
    width: 56px;
  }
`;

export default About;
