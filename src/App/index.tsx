import { ApolloProvider } from '@apollo/client';
import React from 'react';

import NavBar from '../components/nav-bar';
import Home from '../pages/home.page';
import client from '../services/apollo-client';

import './index.scss';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <React.StrictMode>
      <NavBar />
      <Home />
    </React.StrictMode>
  </ApolloProvider>
)

export default App;