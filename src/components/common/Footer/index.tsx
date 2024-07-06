import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Buttons from '../Buttons';
import TextField from '../TextField';
import { SelectObject } from 'src/@types/utils';
import { FooterData } from '@data/footer';
import { IconInfos } from '../ContactIcons';
import { useForm } from 'react-hook-form';

type RemindDataProps = SelectObject<FooterData, 'remindData'>;
type ContactDataProps = SelectObject<FooterData, 'contactData'>;
type ShopAndServiceDataProps = SelectObject<FooterData, 'shopAndServiceDate'>;
type AboutDataProps = SelectObject<FooterData, 'aboutdata'>;

function Footer({ footerData }: { footerData: FooterData }) {
  const { remindData, contactData, shopAndServiceDate, aboutdata } = footerData;
  return (
    <StyledFooter className="br-1">
      <Remind remindData={remindData} />
      <Contact contactData={contactData} />
      <ShopAndService shopAndServiceDate={shopAndServiceDate} />
      <About aboutdata={aboutdata} />
    </StyledFooter>
  );
}

function Remind({ remindData }: { remindData: RemindDataProps }) {
  const { register, handleSubmit } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <StyledFooterInfo className="bl-1 bb-1">
      <Text as="p" typography="Body">
        {remindData.content}
      </Text>
      <StyledForm onSubmit={handleSubmit(onValid)}>
        <TextField>
          <input
            {...register('follow')}
            placeholder={remindData.input.placeholder}
          />
        </TextField>
        <Buttons
          label={remindData.button.label}
          buttonType="contained"
        ></Buttons>
      </StyledForm>
    </StyledFooterInfo>
  );
}

function Contact({ contactData }: { contactData: ContactDataProps }) {
  return (
    <StyledFooterInfo className="bl-1 bb-1">
      <ContactInfos title="Contact Us" infos={contactData.contactInfo} />
      <IconInfos title="Follow Us" />
    </StyledFooterInfo>
  );
}

function ShopAndService({
  shopAndServiceDate,
}: {
  shopAndServiceDate: ShopAndServiceDataProps;
}) {
  return (
    <StyledFooterInfo className="bl-1 bb-1">
      <PublicInfos title="Shop" infos={shopAndServiceDate.shopInfos} />
      <PublicInfos title="Service" infos={shopAndServiceDate.serviceInfo} />
    </StyledFooterInfo>
  );
}

function About({ aboutdata }: { aboutdata: AboutDataProps }) {
  return (
    <StyledFooterInfo className="bl-1 bb-1">
      <PublicInfos title="About Us" infos={aboutdata.aboutInfos} />
    </StyledFooterInfo>
  );
}

function ContactInfos({
  title,
  infos,
}: {
  title: string;
  infos: { title: string; info: string }[];
}) {
  return (
    <>
      <Text as="h5" typography="Heading5" color="gray">
        {title}
      </Text>
      {infos.map(info => (
        <StyledInfos>
          <Text as="h6" typography="Caption" color="gray">
            {info.title}
          </Text>
          <Text as="p" typography="Links">
            {info.info}
          </Text>
        </StyledInfos>
      ))}
    </>
  );
}

function PublicInfos({ title, infos }: { title: string; infos: string[] }) {
  return (
    <>
      <Text as="h5" typography="Heading5" color="gray">
        {title}
      </Text>
      <StyledInfos>
        {infos.map(info => (
          <Text as="p" typography="Links">
            {info}
          </Text>
        ))}
      </StyledInfos>
    </>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  & > div {
    padding: 40px;
  }
`;

const StyledFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledInfos = styled(StyledFooterInfo)`
  gap: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Footer;
