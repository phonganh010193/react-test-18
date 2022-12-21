import { createContext } from "react";
import UseHook from "./useHook";


export const TodoContext = createContext({
    listTodo: [],
    setListTodo: () => { },
    content: '',
    setContent: () => { },
    isShowInputEdit: '',
    setIsShowInputEdit: () => { },
    editItem: {},
    setEditItem: () => { },
    tab: {},
    setTab: () => { },
    handleOnchangeContent: () => { },
    onAddListTodo: () => { },
    onDelete: () => { },
    onClickEditItem: () => { },
    onEdit: () => { },
    handleOnchangeCheckboxItem: () => { },
    handleOnAllCheckbox: () => { },
    isAllCheckbox: () => { },
    onShoWList: () => { },
    getShowListTodo: () => { },
    handleOnDelete: () => { },
})

function TodoContextProvider({ children }) {
    const {
        listTodo,
        setListTodo,
        content,
        setContent,
        isShowInputEdit,
        setIsShowInputEdit,
        editItem,
        setEditItem,
        tab,
        setTab,
        handleOnchangeContent,
        onAddListTodo,
        onDelete,
        onClickEditItem,
        onEdit,
        handleOnchangeCheckboxItem,
        handleOnAllCheckbox,
        isAllCheckbox,
        onShoWList,
        getShowListTodo,
        handleOnDelete
    } = UseHook();
    const numberOf = listTodo.reduce(function (accumulator, currentValue) {
        if (currentValue.isComplete === false) {
            return accumulator + 1;
        }
        return accumulator;

    }, 0);

    const value = {
        numberOf,
        listTodo,
        setListTodo,
        content,
        setContent,
        isShowInputEdit,
        setIsShowInputEdit,
        editItem,
        setEditItem,
        tab,
        setTab,
        handleOnchangeContent,
        onAddListTodo,
        onDelete,
        onClickEditItem,
        onEdit,
        handleOnchangeCheckboxItem,
        handleOnAllCheckbox,
        isAllCheckbox,
        onShoWList,
        getShowListTodo,
        handleOnDelete
    }
    return (
        <TodoContext.Provider
            value={value}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
