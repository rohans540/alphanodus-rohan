import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { GRAPHQL_API, AUTH_TOKEN } from './constants.ts';

import App from './App.tsx'
import './index.css';

const client = new ApolloClient({
  uri: GRAPHQL_API,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
)
