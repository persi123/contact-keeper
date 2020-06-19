import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

ReactDOM.render(
  <AuthState>
    <AlertState>
      <ContactState>
        <Router>
          <App />
        </Router>
      </ContactState>
    </AlertState>
  </AuthState>,
  document.getElementById("root")
);
