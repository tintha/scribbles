import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { UserProvider } from "./UserContext";
import GlobalStyle from "./GlobalStyles";
import AddPostTest from "./AddPostTest";
import Header from "./Header";
import Blogger from "./Blogger";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <UserProvider>
        <Header />
        <Switch>
          <Route path="/add">
            <AddPostTest />
          </Route>
          <Route path="/user/:id">
            <Blogger />
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
