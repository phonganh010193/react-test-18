import React from "react";

class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        const { todoList } = this.props
        console.log('todolistasd ', todoList)

        return (

            <div>
                <section className="main" data-reactid=".0.1">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                        data-reactid=".0.1.0"
                        onClick={this.props.handleActiveCheckbox}
                    />
                    <label htmlFor="toggle-all" data-reactid=".0.1.1" />
                    {this.props.showList === true ?
                        <>
                            {this.props.todoList.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <ul className="todo-list" data-reactid=".0.1.2"
                                        >
                                            <li
                                                className=""
                                                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
                                            >
                                                <div
                                                    style={this.props.showInputEditItem === true && item.id === this.props.editItem.id ?
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

                                                    />
                                                    <label
                                                        data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1"
                                                        onDoubleClick={() => {
                                                            this.props.handleOnclickEditItem(item)
                                                        }}
                                                    >
                                                        {item.content}
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
                                                    style={this.props.showInputEditItem === true && item.id === this.props.editItem.id ?
                                                        { display: "block" }
                                                        : null
                                                    }
                                                    className="edit"
                                                    value={this.props.showInputEditItem === true && item.id === this.props.editItem.id ? this.props.editItem.content : this.props.content}
                                                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                                                    onChange={(event) => this.props.handleOnchangeInputEdit(event)}
                                                    onKeyDown={(event) => {
                                                        if (event.key === "Enter") {
                                                            this.props.handleOnEditItem();
                                                            return;
                                                        }
                                                    }}
                                                    onBlur={(event) => {

                                                    }}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                );
                            })}
                        </>
                        : null
                    }


                </section>
            </div>
        )
    }
}

export default ListTodo;
