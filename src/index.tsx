import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { worker } from '@mocks/browser';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';

import router from './router';

if (
  process.env.NODE_ENV === 'development' ||
  process.env.REACT_APP_USE_MSW === 'true'
) {
  worker.start({ onUnhandledRequest: 'bypass' });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
