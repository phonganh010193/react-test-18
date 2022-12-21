import { useContext, useState } from "react";
import { TodoContext } from "./useContext";

function Todo(props) {
    const {
        item,
        index,
    } = props;
    const {
        onDelete,
        isShowInputEdit,
        onClickEditItem,
        editItem,
        onEdit,
        handleOnchangeCheckboxItem
    } = useContext(TodoContext);
    const [text, setText] = useState(item.content);
    return (
        <li
            className=""
            data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
        >
            <div
                className={isShowInputEdit === true && item.id === editItem.id ? "view" : ""}
                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
            >
                <input
                    className="toggle"
                    type="checkbox"
                    checked={item.isComplete}
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                    onChange={() => {
                        handleOnchangeCheckboxItem(item)
                    }}
                />
                <label
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1"
                    onDoubleClick={() => {
                        onClickEditItem(item)
                    }}
                >
                    <span className={item.isComplete === true ? "text-content" : ""}>
                        {item.content}
                    </span>
                </label>
                <button
                    className="destroy"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                    onClick={() => {
                        onDelete(item)
                    }}
                />
            </div>
            <input
                style={isShowInputEdit === true && item.id === editItem.id ? { display: "block" } : null}
                className="edit"
                value={text || ""}
                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                onChange={(event) => {
                    setText(event.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onEdit({
                            ...item,
                            content: text
                        }, index);
                        return;
                    }
                }}
            />
        </li>
    )
}

export default Todo;
