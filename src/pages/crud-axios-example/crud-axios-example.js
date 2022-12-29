import React, { Component } from "react";
import Header from "../../components/CrudAxoisExample/Header/Header";
import "./CrudAxiosExample.css";
import EntryItem from "../../components/CrudAxoisExample/EntryItem/EntryItem";
import EntryModal from "../../components/EntryModal/EntryModal";

export default class CrudAxiosExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listEntries: [
        {
          id: 1,
          avatar: "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
          name: "Phong Anh",
          description: "Pham van phong"
        },
        {
          id: 2,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Phu Em",
          description: "Pham van Phu"
        },
        {
          id: 3,
          avatar: "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
          name: "Bong",
          description: "Pham Thi Thu"
        },
        {
          id: 4,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Mami",
          description: "Vu Thi Hoa"
        },
        {
          id: 5,
          avatar: "https://toppng.com/uploads/preview/beauty-center-png-beauty-center-logo-png-115560977852gkdo8akey.png",
          name: "papa",
          description: "Pham Van Thuong"
        },
        {
          id: 6,
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Yen",
          description: "Pham Van Yen"
        },
      ],
      showModelEmtries: false,
      validateImage: "",
      validateName: "",
      validateDescription: "",
      avatar: "",
      name: "",
      description: "",
      mode: true,
      editItem: {}
    };
  }

  handleShowModelEmtries = () => {
    this.setState((prevState) => ({
      ...prevState,
      showModelEmtries: true,
    }))
  }

  // handleShowModelEmtries = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     showModelEmtries: true,
  //     mode: "Update"
  //   }))
  // }

  handleHideModelEmtries = () => {
    this.setState((prevState) => ({
      ...prevState,
      showModelEmtries: false,
      avatar: "",
      name: "",
      description: "",
      mode: true
    }))
  }

  handleOnClickDeleteItem = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      listEntries: prevState.listEntries.filter(el => el.id !== item.id)
    }))
  }

  handleOnclickEdititem = (item) => {
    console.log('editItem', item);
    this.setState((prevState) => ({
      ...prevState,
      editItem: item,
      avatar: item.avatar,
      name: item.name,
      description: item.description,
      mode: false
    }))
  }

  handleChangeAvatar = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      avatar: event.target.value,
      validateImage: ""
    }))
  }

  handleChangeName = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      name: event.target.value,
      validateName: ""
    }))
  }

  handleChangeDescription = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      description: event.target.value,
      validateDescription: ""
    }))
  }
  handleOnsubmit = () => {
    if (!this.state.avatar || !this.state.name || !this.state.description) {
      alert('Xin hay nhap du du lieu');
      return;
    }
    if (this.state.mode) {
      this.setState((prevState) => ({
        ...prevState,
        listEntries: [
          ...prevState.listEntries,
          {
            id: Math.floor(Math.random() * 1000),
            avatar: prevState.avatar,
            name: prevState.name,
            description: prevState.description
          }
        ],
        avatar: "",
        name: "",
        description: "",
        showModelEmtries: false,
        validateName: "",
        validateDescription: "",
        validateImage: ""
      }))
    } else {
      this.setState((prevState) => ({
        ...prevState,
        listEntries: [
          ...prevState.listEntries.map((it) => {
            if (it.id === prevState.editItem.id) {
              return {
                ...it,
                avatar: prevState.avatar,
                name: prevState.name,
                description: prevState.description
              }
            }
            return it;
          })
        ],
        editItem: {},
        avatar: "",
        name: "",
        description: "",
        showModelEmtries: false,
        validateName: "",
        validateDescription: "",
        validateImage: "",
      }))
    }
  }

  render() {
    return (
      <>
        <Header handleShowModelEmtries={() => this.handleShowModelEmtries()} />
        <main className="wrap_list" id="wrap_list">
          {this.state.listEntries.map((item) => {
            return (
              <EntryItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                description={item.description}
                handleOnClickDeleteItem={() => this.handleOnClickDeleteItem(item)}
                handleOnclickEdititem={() => this.handleOnclickEdititem(item)}
                handleShowModelEmtries={this.handleShowModelEmtries}
              />
            );
          })}
        </main>
        {this.state.showModelEmtries &&
          <EntryModal
            validateImage={this.state.validateImage}
            validateName={this.state.validateName}
            validateDescription={this.state.validateDescription}
            editItem={this.state.editItem}
            avatar={this.state.avatar}
            name={this.state.name}
            description={this.state.description}
            handleHideModelEmtries={this.handleHideModelEmtries}
            handleChangeAvatar={this.handleChangeAvatar}
            handleChangeName={this.handleChangeName}
            handleChangeDescription={this.handleChangeDescription}
            handleOnsubmit={this.handleOnsubmit}
            mode={this.state.mode}
          />
        }
      </>
    );
  }
}
