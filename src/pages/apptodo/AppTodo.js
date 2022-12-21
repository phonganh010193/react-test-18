import React from "react";
import ListTodo from "./TodoList";
import "./Apptodo.css";
import TodoFilter from "./FilterTodo";
import Header from "./Header";

function AppTodo() {
    return (
        <section className="todoapp">
            <div data-reactid=".0">
                <Header />
                <ListTodo />
                <TodoFilter />
            </div>
        </section>
    );
}

export default AppTodo;



