
function Header(props) {
    const {
        content,
        handleOnchangeContent,
        onAddListTodo
    } = props;
    return (
        <header className="header" data-reactid=".0.0">
            <h1 data-reactid=".0.0.0">todos</h1>
            <input
                value={content}
                className="new-todo"
                placeholder="What needs to be done?"
                data-reactid=".0.0.1"
                onChange={(event) => {
                    handleOnchangeContent(event);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onAddListTodo()
                    }
                }}
            />
        </header>
    )
}

export default Header;
