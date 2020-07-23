import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Register from "./Register.js";
import Login from "./Login.js";
import tickets from "./tickets";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Register" component={Register} />

          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
