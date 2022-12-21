import React from "react";

class HeaderTodo extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {
            handleOnchangeContent,
            handleOnAddTodoList
        } = this.props;
        return (
            <header className="header" data-reactid=".0.0">
                <h1 data-reactid=".0.0.0">todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.state.content || ""}
                    data-reactid=".0.0.1"
                    onChange={(event) => handleOnchangeContent(event)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleOnAddTodoList()
                            return;
                        }
                    }}
                />
            </header>
        )
    }
}

export default HeaderTodo;
