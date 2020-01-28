import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = props => {
  return (
    <ContactState>
      <Router>
        <Fragment className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
            </Switch>
          </div>
          <i class="fab fa-acquisitions-incorporated"></i>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
