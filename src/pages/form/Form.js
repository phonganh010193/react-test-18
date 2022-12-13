import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      validateUserName: "",
    };

    this.inputRef = React.createRef(null);
  }

  // handleChange = (event) => {
  //   const { value } = event.target;
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     username: value,
  //   }));

  //   if (value === "") {
  //     this.setState((prevState) => {
  //       return {
  //         ...prevState,
  //         validateUserName: "Username cannot empty",
  //       };
  //     });
  //   } else {
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       validateUserName: "",
  //     }));
  //   }
  // };

  // componentDidMount() {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     validateUserName: "Username cannot empty",
  //   }));
  // }

  // componentDidUpdate() {
  //   console.log("username: ", this.state.username);
  // }

  // handleSubmit = () => {
  //   if (!this.state.username) {
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       validateUserName: "User name cannot be empty",
  //     }));
  //     return;
  //   }

  //   if (this.state.username.length < 8) {
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       validateUserName: "User name must be more than 8 characters.",
  //     }));
  //     return;
  //   }
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     validateUserName: "",
  //   }));
  //   alert("user name is: " + this.state.username);
  // };

  handleFocus = () => {
    this.inputRef.current.focus();
  };

  componentDidMount() {
    console.log("inputRef", this.inputRef);
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleFocus}>Click me to focus on input</button>
          <input
            type="text"
            // value={this.state.username}
            // onChange={this.handleChange}
            ref={this.inputRef}
          />
          {/* {this.state.validateUserName && <p>{this.state.validateUserName}</p>} */}
        </div>
        {/* <input type="button" value="Submit" onClick={this.handleSubmit} /> */}
      </div>
    );
  }
}
