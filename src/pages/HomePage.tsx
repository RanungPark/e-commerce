import React from 'react';
import Home from '@components/home';
import About from '@components/home/About';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>오늘의 꽃</title>
      </Helmet>
      <Home />
      <About />
    </>
  );
};

export default HomePage;
