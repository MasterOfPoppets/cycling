import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import './index.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://site-backend-fchhixnbhh.now.sh/graphql'),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
