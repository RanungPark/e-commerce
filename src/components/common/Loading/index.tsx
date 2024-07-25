import styled from 'styled-components';
import Text from '../Text';
import { mixins } from '@styles/Mixin';

const Loading = () => {
  return (
    <LoadingWrapper className="br-1 bl-1 bb-1 p-10">
      <Text as="h5" typography="Heading5">
        잠시만 기다려 주세요 로딩중입니다.
      </Text>
      <Text as="h6" typography="Heading6">
        Loading...
      </Text>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  ${mixins.flexBox({ align: 'start', direction: 'column' })}
  height: 160px;
  gap: 10px;
`;

export default Loading;
