import React from "react";
import "./App.css";
import AppTodo from "./pages/apptodo/AppTodo";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <AppTodo />
      </>
    );
  }
}

export default App;
