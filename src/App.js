import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar.js";

const Home = lazy(() => import("./components/Home.js"));
const ImageModal = lazy(() => import("./components/ImageModal.js"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/imageModal" component={ImageModal} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
