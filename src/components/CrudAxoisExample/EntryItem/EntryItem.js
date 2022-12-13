import React from "react";
import "./EntryItem.css";

export default class EntryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="card" onClick={() => {
        this.props.handleShowUpdateModelEmtries()
        this.props.handleOnclickEdititem()
      }}>
        <img
          src="https://i.stack.imgur.com/k59em.png"
          alt=""
          className="dots"
          onClick={(event) => {
            event.stopPropagation();
            this.props.handleOnClickDeleteItem();
          }}
        />
        <img src={this.props.avatar} alt="Avatar" style={{ width: "100%", height: "350px" }} />
        <div className="container">
          <h4>
            <b>{this.props.name}</b>
          </h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
