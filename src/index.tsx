import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// const client = new ApolloClient({
//   uri: 'https://abtm-c97ea3f9a33e.herokuapp.com/status',
//   cache: new InMemoryCache()
// });
 
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

//

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
}

// console.log("hi from index.jsx");