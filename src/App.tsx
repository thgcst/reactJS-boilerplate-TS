import './config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import store, { persistor } from './store';
import theme from './theme';
import GlobalStyles from './theme/global';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
