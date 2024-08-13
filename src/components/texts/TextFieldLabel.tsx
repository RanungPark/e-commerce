import styled from 'styled-components';

interface TextFieldLabelProps {
  children: string;
  htmlFor: string;
}

const TextFieldLabel = ({ children, htmlFor }: TextFieldLabelProps) => {
  return (
    <TextFieldLabelWrapper htmlFor={htmlFor}>{children}</TextFieldLabelWrapper>
  );
};

const TextFieldLabelWrapper = styled.label`
  width: 100%;
  ${({ theme }) => theme.typography.Heading6}
  position: absolute;
  top: -30px;
`;

export default TextFieldLabel;
