import React, { Component } from "react";
import ListTodo from "./ListTodo";
import "./TodoApp.css";
import TodoFilter from "./TodoFilter";

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { id: 1, content: "an sang", isActive: false, isComplete: false },
                { id: 2, content: "an trua", isActive: false, isComplete: false },
                { id: 3, content: "an toi", isActive: false, isComplete: false }
            ],
            content: "",
            editItem: {},
            showInputEditItem: false,
            showList: false,
        }
    }

    handleOnchangeContent = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            content: event.target.value
        }))
    }

    handleOnAddTodoList = () => {
        this.setState((prevState) => ({
            ...prevState,
            todoList: [
                ...prevState.todoList,
                {
                    id: Math.floor(Math.random() * 1000),
                    content: prevState.content,
                    isActive: false,
                    isComplete: false
                }
            ],
            content: ""
        }))
    }

    handleOnclickDeleteItem = (item) => {
        console.log('itemDelete', item);
        this.setState((prevState) => ({
            ...prevState,
            todoList: prevState.todoList.filter(el => el.id !== item.id)
        }))
    }

    handleOnclickEditItem = (item) => {
        console.log('itemEdit', item);
        this.setState((prevState) => ({
            ...prevState,
            editItem: item,
            showInputEditItem: true,
        }))
    }

    handleOnchangeInputEdit = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            editItem: {
                ...prevState.editItem,
                content: event.target.value
            }
        }))
    }

    handleOnEditItem = () => {
        this.setState((prevState) => ({
            ...prevState,
            todoList: [
                ...prevState.todoList.map((item, index) => {
                    if (item.id === prevState.editItem.id) {
                        return { ...item, content: prevState.editItem.content }
                    }
                    return item;
                })
            ],
            showInputEditItem: false
        }))
    }

    handleShowList = () => {
        this.setState((prevState) => ({
            ...prevState,
            showList: true
        }))
    }

    handleOnChangeCheckbox= (item) => {
        console.log('item checkbox', item)
        this.setState((prevState) => ({
            ...prevState,
            todoList:[
                ...prevState.todoList.map((el, index) => {
                    if(item.id === el.id) {
                        return {
                            ...el,
                            isComplete: !item.isComplete
                        }
                    }
                    return el;
                })
            
            ]
        }))
    }

    // handleShowActiveList = () => {
    //     this.setState((prevState) => ({
    //         ...prevState,
    //         todoList: prevState.todoList.filter(el => el.isComplete !== true)
    //     }))
    // }

    // handleCompleteList = () => {
    //     this.setState((prevState) => ({
    //         ...prevState,
    //         todoList: prevState.todoList.filter(el => el.isComplete === true)
    //     }))
    // }
    
    
    render() {
        return (
            <section className="todoapp">
                <div data-reactid=".0">
                    <header className="header" data-reactid=".0.0">
                        <h1 data-reactid=".0.0.0">todos</h1>
                        <input
                            className="new-todo"
                            placeholder="What needs to be done?"
                            value={this.state.content}
                            data-reactid=".0.0.1"
                            onChange={(event) => this.handleOnchangeContent(event)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    this.handleOnAddTodoList()
                                    return;
                                }
                            }}
                        />
                    </header>
                    <ListTodo
                        todoList={this.state.todoList}
                        handleOnclickDeleteItem={(item) => this.handleOnclickDeleteItem(item)}
                        handleOnclickEditItem={(item) => this.handleOnclickEditItem(item)}
                        editItem={this.state.editItem}
                        showInputEditItem={this.state.showInputEditItem}
                        content={this.state.content}
                        handleOnchangeInputEdit={(event) => this.handleOnchangeInputEdit(event)}
                        handleOnEditItem={this.handleOnEditItem}
                        showList={this.state.showList}
                        handleOnChangeCheckbox={(item) => this.handleOnChangeCheckbox(item)}
                    />
                    <TodoFilter
                        todoList={this.state.todoList}
                        handleShowList={this.handleShowList}
                        // handleShowActiveList={this.handleShowActiveList}
                        // handleCompleteList={this.handleCompleteList}
                    />
                </div>
            </section>
        );
    }
}

