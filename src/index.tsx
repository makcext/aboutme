import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// import LayoutV5 from "./LayoutV5";
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      <App />
      </ApolloProvider>
    </React.StrictMode>
  );
}

// console.log("hi from index.jsx");