import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ContextComponentCollection from "./context/ContextComponentCollection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextComponentCollection>
      <a href="/src/assets/files/CV_MJ.pdf" download id="d_cv" hidden></a>
      <App />
    </ContextComponentCollection>
  </React.StrictMode>
);
