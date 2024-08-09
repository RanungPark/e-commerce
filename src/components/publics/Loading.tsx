import styled from 'styled-components';
import { mixins } from '@styles/Mixin';

const Loading = () => {
  return (
    <LoadingWrapper className="bb-1 p-10">
      잠시만 기다려 주세요 로딩중입니다.
      <p>Loading...</p>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  ${mixins.flexBox({ align: 'start', direction: 'column' })}
  ${({ theme }) => theme.typography.Heading5}

  height: 160px;
  gap: 10px;

  & P {
    ${({ theme }) => theme.typography.Heading6}
  }
`;

export default Loading;
