import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client/apollo-client';
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
);

// below removed the React.StrictMode to see why the nav bar is rendering 2 times when loggin in to org-dashboard.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ApolloProvider client={client}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ApolloProvider>,
// );

