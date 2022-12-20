import React from "react";
import Todo from "./Todo";

function ListTodo(props) {
    const {
        listTodo,
        handleOnAllCheckbox,
        isAllCheckbox
    } = props;

    return (
        <div>
            <section className="main" data-reactid=".0.1">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    checked={isAllCheckbox}
                    data-reactid=".0.1.0"
                    onChange={() => {
                        handleOnAllCheckbox()
                    }}
                />
                <label htmlFor="toggle-all" data-reactid=".0.1.1" />
                <div>
                    <div>
                        <ul className="todo-list" data-reactid=".0.1.2">
                            {listTodo.map((item, index) => {
                                return (
                                    <Todo item={item} index={index} key={item.id} {...props} />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ListTodo;
