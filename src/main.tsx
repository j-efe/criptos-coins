import React from "react";
import ReactDOM from "react-dom/client";

import { UserContextProvider } from "@/contexts/userContext";

import MyRoutes from "@/routes";
import GlobalStyle from "@/styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <UserContextProvider>
        <GlobalStyle />
        <MyRoutes />
      </UserContextProvider>
    </>
  </React.StrictMode>
);
