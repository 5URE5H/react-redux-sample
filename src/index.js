import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import { rootReducer } from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(rootReducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </StrictMode>
);
