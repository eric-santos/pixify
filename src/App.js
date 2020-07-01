import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar.js";

const Home = lazy(() => import("./components/Home.js"));
const About = lazy(() => import("./components/About.js"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
