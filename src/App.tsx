import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import FormikForm from "./Formik/FormikForm";
import Home from "./Home";
import React from 'react';
import ReactHookForm from "./ReactHookForm";
import { initializeIcons } from '@uifabric/icons';

initializeIcons(/* optional base url */);


function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react-hook-form">
            <ReactHookForm />
          </Route>
          <Route path="/formik-form">
            <FormikForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
