import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import TodolistPage from "./pages/Todolist";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route path="/" component={TodolistPage} />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
