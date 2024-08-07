import styled from 'styled-components';

interface FooterInfoTittleProps {
  children: string;
}

const FooterInfoTittle = ({ children }: FooterInfoTittleProps) => {
  return (
    <FooterInfoTittleWrapper className="mb-3">
      {children}
    </FooterInfoTittleWrapper>
  );
};

const FooterInfoTittleWrapper = styled.h5`
  ${({ theme }) => theme.typography.Heading5}
  color: ${({ theme }) => theme.colors.gray};
  text-transform: capitalize;
`;

export default FooterInfoTittle;
