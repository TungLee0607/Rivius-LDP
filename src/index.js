import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SizeObserver from './Hooks/SizeObserver';
import { BrowserRouter } from 'react-router-dom';
import i18n from "./language/i18n";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SizeObserver>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </SizeObserver>
  </BrowserRouter>
);
