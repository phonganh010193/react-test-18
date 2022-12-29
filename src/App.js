import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./pages/nav";
import TodoApp from "./pages/todoapp/TodoApp";
import AppTodo from "./pages/apptodo/AppTodo";
import CrudAxiosExample from "./pages/crud-axios-example/crud-axios-example";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<TodoApp />}></Route>
          <Route path="/app-todo" element={<AppTodo />}></Route>
          <Route path="/crud-axios-example" element={<CrudAxiosExample />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
