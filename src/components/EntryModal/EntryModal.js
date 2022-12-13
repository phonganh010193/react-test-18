import React, { Component } from "react";
import "./EntryModal.css";

export default class EntryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="modal" onClick={this.props.handleHideModelEmtries}>
        <div
          className="modal-content"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <span
            onClick={this.props.handleHideModelEmtries}
            className="close"
            style={{ float: "right", cursor: "pointer" }}
          >
            ×
          </span>
          <form>
            <label htmlFor="img">Image</label>
            <input
              className="input__form"
              type="text"
              value={this.props.mode === "Submit" ? this.props.avatar : this.props.editItem.avatar}
              onChange={this.props.handleChangeAvatar}
              placeholder="Image..."
            />
            {this.props.validateImage &&
              <p style={{ color: "red" }}>{this.props.validateImage}</p>
            }
            <label htmlFor="name">Name</label>
            <input
              className="input__form"
              type="text"
              value={this.props.mode === "Submit" ? this.props.name : this.props.editItem.name}
              onChange={this.props.handleChangeName}
              placeholder="Name..."
            />
            {this.props.validateName &&
              <p style={{ color: "red" }}>{this.props.validateName}</p>
            }
            <label htmlFor="description">Description</label>
            <input
              className="input__form"
              type="text"
              value={this.props.mode === "Submit" ? this.props.description : this.props.editItem.description}
              onChange={this.props.handleChangeDescription}
              placeholder="Description..."
            />
            {this.props.validateDescription &&
              <p style={{ color: "red" }}>{this.props.validateDescription}</p>
            }
            <button
              className="btn-action"
              type="submit"
              defaultValue="Submit"
              onClick={(event) => {
                event.preventDefault();
                this.props.handleOnsubmit();
              }}
            >{this.props.mode === "Submit" ? "Submit" : "Update"}</button>
          </form>
        </div>
      </div>
    );
  }
}
