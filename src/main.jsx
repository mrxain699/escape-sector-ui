import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Auth from "./api/Auth.jsx";
import Sector from "./api/Sector.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth>
      <Sector>
        <App />
      </Sector>
    </Auth>
  </React.StrictMode>
);
