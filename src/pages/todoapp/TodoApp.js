import React, { Component } from "react";
import ListTodo from "./ListTodo";
import "./TodoApp.css";
import TodoFilter from "./TodoFilter";

export const BUTTON = {
    all: 'all',
    active: 'active',
    inactive: 'inactive',
}

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { id: 1, content: "an sang", isComplete: false },
                { id: 2, content: "an trua", isComplete: false },
                { id: 3, content: "an toi", isComplete: false }
            ],
            content: "",
            editItem: {},
            showInputEditItem: false,
            tab: BUTTON.all,
        }
    }

    handleOnchangeContent = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            content: event.target.value
        }))
    }

    handleOnAddTodoList = () => {
        if (!this.state.content) {
            return;
        }
        this.setState((prevState) => ({
            ...prevState,
            todoList: [
                ...prevState.todoList,
                {
                    id: Math.floor(Math.random() * 1000),
                    content: prevState.content,
                    isComplete: false
                }
            ],
            content: ""
        }))
    }

    handleOnclickDeleteItem = (item) => {
        this.setState((prevState) => ({
            ...prevState,
            todoList: prevState.todoList.filter(el => el.id !== item.id)
        }))
    }

    handleOnclickEditItem = (item) => {
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

    handleShowList = (tab) => {
        this.setState((prevState) => ({
            ...prevState,
            tab,
        }))
    }

    handleOnChangeCheckbox = (item) => {
        this.setState((prevState) => ({
            ...prevState,
            todoList: [
                ...prevState.todoList.map((el) => {
                    if (el.id === item.id) {
                        return {
                            ...item,
                            isComplete: !item.isComplete
                        }
                    }
                    return el;
                })
            ],
        }))
    }
    handleOnCheckboxAll = () => {
        const findUnchecked = this.state.todoList.find(el => !el.isComplete);
        if (findUnchecked) {
            this.setState((prevState) => ({
                ...prevState,
                todoList: prevState.todoList.map((item) => {
                    return {
                        ...item,
                        isComplete: true,
                    };
                }),
            }))
        } else {
            this.setState((prevState) => ({
                ...prevState,
                todoList: prevState.todoList.map((item) => {
                    return {
                        ...item,
                        isComplete: false,
                    };
                }),
            }))
        }
    }

    isAllChecked() {
        const findUnchecked = this.state.todoList.find(el => !el.isComplete);
        if (this.state.todoList.length === 0) {
            return findUnchecked;
        }
        return !findUnchecked;
    }

    getShowTodoList() {
        if (this.state.tab === BUTTON.all) {
            return this.state.todoList;
        } else if (this.state.tab === BUTTON.active) {
            return this.state.todoList.filter(el => {
                return !el.isComplete;
            });
        } else {
            return this.state.todoList.filter(el => {
                return el.isComplete;
            });
        }
    }

    handleOnDeleteComplete = () => {
        this.setState((prevState) => ({
            ...prevState,
            todoList: prevState.todoList.filter((item) => {
                if (item.isComplete !== true) {
                    return item;
                }
            })
        }))
    }


    render() {
        return (
            <section className="todoapp">
                <div data-reactid=".0">
                    <header className="header" data-reactid=".0.0">
                        <h1 data-reactid=".0.0.0">todos</h1>
                        <input
                            className="new-todo"
                            placeholder="What needs to be done?"
                            value={this.state.content || ""}
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
                        isAllCheckbox={this.isAllChecked()}
                        todoList={this.getShowTodoList()}
                        showList={this.state.showList}
                        editItem={this.state.editItem}
                        content={this.state.content}
                        handleOnclickDeleteItem={(item) => this.handleOnclickDeleteItem(item)}
                        handleOnclickEditItem={(item) => this.handleOnclickEditItem(item)}
                        showInputEditItem={this.state.showInputEditItem}
                        handleOnchangeInputEdit={(event) => this.handleOnchangeInputEdit(event)}
                        handleOnEditItem={this.handleOnEditItem}
                        handleOnChangeCheckbox={this.handleOnChangeCheckbox}
                        handleOnCheckboxAll={this.handleOnCheckboxAll}
                    />
                    <TodoFilter
                        todoList={this.getShowTodoList()}
                        handleShowList={this.handleShowList}
                        tab={this.state.tab}
                        handleOnDeleteComplete={this.handleOnDeleteComplete}
                    />
                </div>
            </section>
        );
    }
}

