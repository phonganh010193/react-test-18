import React, { Component } from "react";
import Api from "../server/Api";
import HeaderTodo from "./HeaderTodo";
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
            todoList: [],
            content: "",
            editItem: {},
            showInputEditItem: false,
            tab: BUTTON.all,
        }
    }

    async componentDidMount() {
        try {
            const res = await Api.getList();
            console.log('res', res);
            this.setState((prevState) => ({
                ...prevState,
                todoList: res.data
            }))
        } catch (error) {
            console.log('error', error);
        }
    }

    handleOnchangeContent = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            content: event.target.value
        }))
    }

    handleOnAddTodoList = async () => {
        if (!this.state.content) {
            return;
        }
        const params = {
            content: this.state.content,
            isComplete: false
        }
        try {
            await Api.createTodoList(params);
            const data = await Api.getList();
            console.log('resCreate', data.data)
            this.setState((prevState) => ({
                ...prevState,
                todoList: data.data,
                content: ""
            }))
        } catch (error) {
            console.log('error', error);
        }
    }
    handleOnclickDeleteItem = async (item) => {
        try {
            await Api.DeleteItem(item.id);
            const res = await Api.getList()
            this.setState((prevState) => ({
                ...prevState,
                todoList: res.data,
                content: ""
            }));
        } catch (error) {
            console.log('error', error);
        }
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

    handleOnEditItem = async (item) => {
        try {
            await Api.UpdateItem(item.id, {
                content: item.content
            })
            const res = await Api.getList();
            console.log('resUpdate', res.data);
            this.setState((prevState) => ({
                ...prevState,
                todoList: res.data,
                showInputEditItem: false
            }))
        } catch (error) {
            console.log('error', error);
        }
    }

    handleShowList = (tab) => {
        this.setState((prevState) => ({
            ...prevState,
            tab,
        }))
    }

    handleOnChangeCheckbox = async (item) => {
        await Api.UpdateItem(item.id, {
            isComplete: !item.isComplete
        });
        const res = await Api.getList();
        this.setState((prevState) => ({
            ...prevState,
            todoList: res.data
        }));
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
                    <HeaderTodo
                        content={this.state.content}
                        handleOnchangeContent={this.handleOnchangeContent}
                        handleOnAddTodoList={this.handleOnAddTodoList}
                    />
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

