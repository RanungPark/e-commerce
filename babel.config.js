module.exports = {
  presets: [
    //자바스크립트 코드를 대상 환경에 맞춰 변환하는 프리셋
    //최신 자바스크립트 문법을 사용하더라도 바벨이 이를 구 버전의 Node.js가 이해할 수 있는 코드로 변환
    ['@babel/preset-env', { targets: { node: 'current' } }],
    //React 애플리케이션에서 JSX문법을 변환하는 프리셋
    //React 17버전 이후 자동 JSX 변환
    //import React from react 생략할수 있게 함
    ['@babel/preset-react', { runtime: 'automatic' }],
    //TypeScript코드를 JavaScript로 변환하는 프리셋
    '@babel/preset-typescript',
  ],
};
