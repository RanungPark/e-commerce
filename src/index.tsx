import ReactDOM from 'react-dom/client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import router from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { worker } from '@mocks/browser';

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
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
