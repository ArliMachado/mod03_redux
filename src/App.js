import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store/index';
import Routes from './routes';
import Footer from './components/Footer';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
