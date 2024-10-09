import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ContextComponentCollection from "./context/ContextComponentCollection.tsx";
import CVPDF from "./assets/files/CV_MJ.pdf";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextComponentCollection>
      <a href={CVPDF} download id="d_cv" hidden></a>
      <App />
    </ContextComponentCollection>
  </React.StrictMode>
);
