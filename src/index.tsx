import ReactDOM from "react-dom/client";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./modules";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
