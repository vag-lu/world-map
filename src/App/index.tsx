import { ApolloProvider } from '@apollo/client';
import React from 'react';

import NavBar from '../components/nav-bar';
import WorldMap from '../pages/world-map';
import client from '../services/apollo-client';

import './index.scss';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <React.StrictMode>
      <NavBar />
      <WorldMap />
    </React.StrictMode>
  </ApolloProvider>
)

export default App;