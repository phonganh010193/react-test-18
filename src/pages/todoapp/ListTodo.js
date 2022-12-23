import React from "react";

class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        const {
            todoList,
            editItem,
            showInputEditItem,
            content,
            isAllCheckbox,
            handleOnEditItem,
            handleOnchangeInputEdit,
            handleOnChangeCheckbox,
            handleOnCheckboxAll
        } = this.props
        return (
            <div>
                <section className="main" data-reactid=".0.1">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                        checked={isAllCheckbox || false}
                        data-reactid=".0.1.0"
                        onChange={handleOnCheckboxAll}
                    />
                    <label htmlFor="toggle-all" data-reactid=".0.1.1" />
                    <div>
                        {todoList.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <ul className="todo-list" data-reactid=".0.1.2"
                                    >
                                        <li
                                            className=""
                                            data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
                                        >
                                            <div
                                                className={showInputEditItem === true && item.id === editItem.id ? "view" : ""}
                                                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                                            >
                                                <input
                                                    className="toggle"
                                                    type="checkbox"
                                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                                                    checked={item.isComplete || false}
                                                    onChange={() => handleOnChangeCheckbox(item)}

                                                />
                                                <label
                                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1"
                                                    onDoubleClick={() => {
                                                        this.props.handleOnclickEditItem(item)
                                                    }}
                                                >
                                                    <span className={item.isComplete === true ? "text-content" : ""}>{item.content}</span>
                                                </label>
                                                <button
                                                    className="destroy"
                                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                                                    onClick={() => {
                                                        this.props.handleOnclickDeleteItem(item);
                                                    }
                                                    }
                                                />
                                            </div>

                                            <input
                                                style={showInputEditItem === true && item.id === editItem.id ?
                                                    { display: "block" }
                                                    : null
                                                }
                                                className="edit"
                                                value={showInputEditItem === true && item.id === editItem.id ? editItem.content : content || ""}
                                                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                                                onChange={(event) => handleOnchangeInputEdit(event)}
                                                onKeyDown={(event) => {
                                                    if (event.key === "Enter") {
                                                        handleOnEditItem(editItem);
                                                        return;
                                                    }
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        )
    }
}

export default ListTodo;
