import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import rootReducer from "./modules";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

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
