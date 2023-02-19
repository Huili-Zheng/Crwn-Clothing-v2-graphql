import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "./index.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CategoriesProdiver } from "./context/categories.context";
import { CartProvider } from "./context/card.context";

const client = new ApolloClient({
  uri: "https://crwn-clothing.com/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProdiver>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProdiver>
        </UserProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
