import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoute from "./customRoutes/CustomRoute";

function App() {
  return (
    <Router>
      <CustomRoute />
    </Router>
  );
}

export default App;
