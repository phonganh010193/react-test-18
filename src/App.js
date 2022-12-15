import React from "react";
import "./App.css";
import TodoApp from "./pages/todoapp/TodoApp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        {/*<CrudAxiosExample />*/}
        {/* <Form /> */}
        <TodoApp />
      </>
    );
  }
}

export default App;
