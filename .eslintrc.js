module.exports = {
  //'eslint:recommended': ESLint에서 추천하는 기본적인 규칙을 적용
  //'prettier': Prettier와 관련된 ESLint 규칙을 활성화
  //'plugin:@typescript-eslint/eslint-recommended': @typescript-eslint 플러그인의 권장 규칙을 적용
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  //소스 코드를 분석하여 AST(Abstract Syntax Tree)를 생성할 때 사용할 파서를 지정
  //@typescript-eslint/parser: TypeScript 코드를 분석하기 위해 사용하는 파서
  parser: '@typescript-eslint/parser',
  //@typescript-eslint: TypeScript 관련 규칙을 추가할 때 사용하는 플러그인
  plugins: ['@typescript-eslint'],
  //코드가 실행될 환경을 지정
  env: {
    node: true,
    browser: true,
  },
  rules: {
    //사용하지 않는 변수에 대한 경고를 비활성화
    'no-unused-vars': 'off',
    //객체 리터럴의 메서드 축약 문법을 강제로 사용하도록 설정
    'object-shorthand': ['error', 'always'],
    //JSX를 사용할 때 import React from 'react';를 추가하는 규칙을 비활성화
    'react/react-in-jsx-scope': 'off',
    //PropTypes 검사를 비활성화
    //TypeScript에서 타입 검사를 사용하기 때문에 비활성화
    'react/prop-types': 'off',
    //함수와 메서드의 반환 타입을 명시적으로 선언하는 규칙을 비활성화
    //TypeScript에서는 자동으로 타입을 추론할 수 있기 때문에 비활성화
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    //특정 타입 (예: Object, String 등) 사용을 제한하는 규칙을 비활성화
    '@typescript-eslint/ban-types': 'off',
    //빈 인터페이스 선언을 허용하는 규칙을 비활성화
    '@typescript-eslint/no-empty-interface': 'off',
    //네임스페이스 사용을 제한하는 규칙을 비활성화
    '@typescript-eslint/no-namespace': 'off',
    //사용하지 않는 변수에 대한 TypeScript 규칙을 활성화
    '@typescript-eslint/no-unused-vars': ['error'],
    //require를 사용할 수 있도록 허용
    '@typescript-eslint/no-var-requires': 0,
  },
};
