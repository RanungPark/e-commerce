const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  //process.env.NODE_ENV 값을 기반으로 설정하며, 개발 모드(development)와 프로덕션 모드(production)를 구분하여 동작 방식을 조정
  mode,
  //entry는 웹팩이 애플리케이션을 빌드할 때 진입점이 되는 파일을 지정
  entry: {
    //src/index.tsx 파일을 진입점으로 설정하여 app 번들로 빌드
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  //output은 웹팩이 번들링한 결과물의 출력 설정
  output: {
    //filename: 번들링된 파일의 이름을 [name].bundle.js로 설정합니다. 여기서 [name]은 entry에서 지정한 키(app)
    filename: '[name].bundle.js',
    //path: 번들링된 파일의 출력 디렉토리를 dist로 설정
    path: path.resolve(__dirname, 'dist'),
    //clean: true: 이 옵션을 통해 빌드 전 기존의 dist 디렉토리를 정리(clean)
    clean: true,
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 정적 파일 제공 경로
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    //rules: 다양한 파일 형식을 처리하는 규칙을 설정
    rules: [
      //JavaScript와 TypeScript 파일(.ts, .tsx, .js, .jsx)은 babel-loader를 사용하여 변환
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      //이미지 파일(.png, .jpg, .jpeg, .webp)은 asset 모듈 타입으로 처리하여 파일로 복사
      {
        test: /\.(png|jpe?g|webp)$/,
        type: 'asset',
      },
      //SVG 파일(.svg)은 @svgr/webpack와 url-loader를 사용하여 처리
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      //폰트 파일(.woff, .woff2, .eot, .ttf, .otf)은 asset 모듈 타입으로 처리
      {
        test: /\.(woff|woff2|eot|ttf|otf)?$/,
        type: 'asset',
      },
      //CSS 파일(.css)은 style-loader와 css-loader를 사용하여 로드
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'bundle-report.json',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/mockServiceWorker.js', to: '' }, // 서비스 워커 파일 복사
        { from: '_redirects', to: '' },
      ],
    }),
    //HtmlWebpackPlugin: HTML 파일을 기반으로 빌드 결과물을 생성하는 플러그인
    new HtmlWebpackPlugin({
      //template: 기본 HTML 템플릿 파일 경로를 지정
      template: path.resolve(__dirname, 'public/index.html'),
      //templateParameters: 템플릿에 전달되는 매개변수를 설정, 여기서는 환경에 따라 다르게 설정
      templateParameters: {
        // 해당 템플릿에 전달하는 인자들
        env: process.env.NODE_ENV === 'production' ? '' : '[DEV]',
      },
      //minify: 프로덕션 모드에서는 HTML을 압축
      minify:
        process.env.NODE_ENV === 'production' // 프로덕션 모드일경우 공백,주석 제거
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    //ProvidePlugin: 전역 변수를 자동으로 로드하게 해주는 플러그인. React를 전역 변수로 사용할 수 있도록 설정
    new ProvidePlugin({
      React: 'react',
    }),
    //CleanWebpackPlugin: 빌드 이전 dist 디렉토리를 정리(clean)하는 플러그인
    new CleanWebpackPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: 'public/*.png',
          to: '[name][ext]',
          globOptions: {
            ignore: ['public/index.html', 'public/mockServiceWorker.js'],
          },
        },
        {
          from: 'public/*.ico',
          to: '[name][ext]',
          globOptions: {
            ignore: ['public/index.html', 'public/mockServiceWorker.js'],
          },
        },
        {
          from: 'public/*.xml',
          to: '[name][ext]',
          globOptions: {
            ignore: ['public/index.html', 'public/mockServiceWorker.js'],
          },
        },
        {
          from: 'public/*.svg',
          to: '[name][ext]',
          globOptions: {
            ignore: ['public/index.html', 'public/mockServiceWorker.js'],
          },
        },
        {
          from: 'public/*.webmanifest',
          to: '[name][ext]',
          globOptions: {
            ignore: ['public/index.html', 'public/mockServiceWorker.js'],
          },
        },
      ],
    }),
  ],
  resolve: {
    //extensions: 모듈을 해석할 때 인식할 확장자 목록을 설정, TypeScript와 JavaScript 파일의 확장자를 모두 포함
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    //모듈 경로의 별칭을 설정합니다. 예를 들어, @public, @assets 등의 별칭을 사용하여 실제 파일 경로를 간결하게 사용
    alias: {
      '@public': path.resolve(__dirname, 'public'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@config': path.resolve(__dirname, 'config.ts'),
    },
  },
};
