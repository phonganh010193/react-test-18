import React from "react";
import { BUTTON } from "./TodoApp";


class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        const {
            todoList,
            handleShowList,
            tab,
            handleOnDeleteComplete
        } = this.props;
        const numberOf = todoList.reduce(function (accumulator, currentValue) {
            if (currentValue.isComplete === false) {
                return accumulator + 1;
            }
            return accumulator;

        }, 0);
        return (
            <div>
                <footer className="footer" data-reactid=".0.2">
                    <span className="todo-count" data-reactid=".0.2.0">
                        <strong data-reactid=".0.2.0.0">{numberOf}</strong>
                        <span data-reactid=".0.2.0.1"> </span>
                        <span data-reactid=".0.2.0.2">item</span>
                        <span data-reactid=".0.2.0.3"> left</span>
                    </span>
                    <ul className="filters" data-reactid=".0.2.1">
                        <li data-reactid=".0.2.1.0">
                            <a
                                className={tab === BUTTON.all ? 'selected' : ''}
                                href="#/"
                                data-reactid=".0.2.1.0.0"
                                onClick={() => {
                                    handleShowList(BUTTON.all);
                                }}
                            >
                                All
                            </a>
                        </li>
                        <span data-reactid=".0.2.1.1"> </span>
                        <li data-reactid=".0.2.1.2">
                            <a
                                className={tab === BUTTON.active ? 'selected' : ''}
                                href="#/"
                                data-reactid=".0.2.1.2.0"
                                onClick={() => {
                                    handleShowList(BUTTON.active);
                                }}
                            >
                                Active
                            </a>
                        </li>
                        <span data-reactid=".0.2.1.3"> </span>
                        <li data-reactid=".0.2.1.4">
                            <a
                                className={tab === BUTTON.inactive ? 'selected' : ''}
                                href="#/"
                                data-reactid=".0.2.1.4.0"
                                onClick={() => {
                                    handleShowList(BUTTON.inactive);
                                }}
                            >
                                Completed
                            </a>
                        </li>
                    </ul>
                    {numberOf < todoList.length &&
                        <a
                            href="#/"
                            onClick={() => handleOnDeleteComplete()}
                            className="clear-completed"
                        >
                            Clear completed
                        </a>
                    }
                </footer>
            </div>
        )
    }
}

export default TodoFilter;
