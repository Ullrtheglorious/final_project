import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appointments from "./pages/appointments";
import Homepage from "./pages/homepage";
import Main from "./pages/main";
import Medications from "./pages/medications";
import Overview from "./pages/overview";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/appointments" component={Appointments} />
      <Route exact path="/homepage" component={Homepage} />
      <Route path="/medications" component={Medications} />
      <Route path="/overview" component={Overview} />
    </div>
  </Router>
);

export default App;
