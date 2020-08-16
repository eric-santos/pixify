import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar.js";

const Home = lazy(() => import("./components/Home.js"));
const Messages = lazy(() => import("./components/Messages.js"));
const Profile = lazy(() => import("./components/Profile.js"));
const Slider = lazy(() => import("./components/PexelSlider.js"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={Messages} />
        <Route path="/profile" component={Profile} />
        <Route path="/slider" component={Slider} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
