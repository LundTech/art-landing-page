import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/Contact";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ContactPage from "../pages/contact/Contact";
import Thanks from "../pages/thanks/Thanks";

export default class Main extends Component {
  render() {
    return (
      <>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <ProjectsPage {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/kontakt"
              render={(props) => (
                <ContactPage {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/tack"
              render={(props) => <Thanks {...props} theme={this.props.theme} />}
            />
          </Switch>
        </HashRouter>
      </>
    );
  }
}
