import styled from 'styled-components';

interface TextCardProps {
  title: string;
  children: string;
}

const TextCard = ({ title, children }: TextCardProps) => {
  return (
    <TextCardWrapper className="bb-1 bl-1 p-10">
      <TextCardTitle>{title}</TextCardTitle>
      {children}
    </TextCardWrapper>
  );
};

const TextCardWrapper = styled.section`
  ${({ theme }) => theme.typography.Body}
  width: 100%;
  height: auto;

  & h3 {
    margin-bottom: 16px;
  }
`;

const TextCardTitle = styled.h3`
  ${({ theme }) => theme.typography.Heading3}
`;

export default TextCard;
