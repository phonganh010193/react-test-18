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
            showList,
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
                        checked={isAllCheckbox}
                        data-reactid=".0.1.0"
                        onChange={handleOnCheckboxAll}
                    />
                    <label htmlFor="toggle-all" data-reactid=".0.1.1" />
                    {showList === true ?
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
                                                    style={showInputEditItem === true && item.id === editItem.id ?
                                                        { display: "none" }
                                                        : null
                                                    }
                                                    className="view"
                                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                                                >
                                                    <input
                                                        className="toggle"
                                                        type="checkbox"
                                                        data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                                                        checked={item.isComplete}
                                                        onChange={() => handleOnChangeCheckbox(item)}
                                                        
                                                    />
                                                    <label
                                                        data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1"
                                                        onDoubleClick={() => {
                                                            this.props.handleOnclickEditItem(item)
                                                        }}
                                                    >
                                                        <p style={item.isComplete === true? {textDecoration:"line-through", color:"gray", margin: "0px", opacity: 0.4} : {margin:"0px"}}>{item.content}</p>
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
                                                    value={showInputEditItem === true && item.id === editItem.id ? editItem.content : content}
                                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                                                    onChange={(event) => handleOnchangeInputEdit(event)}
                                                    onBlur={handleOnEditItem}
                                                    onKeyDown={(event) => {
                                                        if (event.key === "Enter") {
                                                            handleOnEditItem();
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
                        : null
                    }


                </section>
            </div>
        )
    }
}

export default ListTodo;
