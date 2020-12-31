import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { UserProvider } from "./UserContext";
import GlobalStyle from "./GlobalStyles";
import AddPostTest from "./AddPostTest";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <UserProvider>
        <Switch>
          <Route path="/add">
            <AddPostTest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
