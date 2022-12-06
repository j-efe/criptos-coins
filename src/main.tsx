import React from "react";
import ReactDOM from "react-dom/client";

import MyRoutes from "./routes";
import GlobalStyle from "./styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <MyRoutes />
  </React.StrictMode>
);
