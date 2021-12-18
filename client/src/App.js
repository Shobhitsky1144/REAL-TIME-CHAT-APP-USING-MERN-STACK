import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
};

export default App;
