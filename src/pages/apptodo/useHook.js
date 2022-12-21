import { useState } from "react";

export const BUTTON = {
    all: "all",
    active: "active",
    complete: "conplete"
}
function UseHook() {
    const [listTodo, setListTodo] = useState([
        { id: 1, content: 'an sang', isComplete: false },
        { id: 2, content: 'an true', isComplete: false },
        { id: 3, content: 'an toi', isComplete: false },
    ]);
    const [content, setContent] = useState("");
    const [isShowInputEdit, setIsShowInputEdit] = useState(false);
    const [editItem, setEditItem] = useState("");
    const [tab, setTab] = useState(BUTTON.all);
    const handleOnchangeContent = (event) => {
        setContent(event.target.value);
    }
    const onAddListTodo = () => {
        setListTodo([
            ...listTodo,
            {
                id: Math.floor(Math.random() * 1000),
                content: content,
                isComplete: false
            }
        ]);
        setContent("")
    }
    const onDelete = (item) => {
        const copyListTodo = [...listTodo];
        const newList = copyListTodo.filter(el => el.id !== item.id);
        setListTodo(newList);
    }
    const onClickEditItem = (item) => {
        console.log('editItem', item);
        setEditItem(item)
        setIsShowInputEdit(true)
    }
    const onEdit = (item, index) => {
        const copyListTodo = [...listTodo];
        copyListTodo.splice(index, 1, item);
        setListTodo(copyListTodo);
        setEditItem("");
    }
    const handleOnchangeCheckboxItem = (item) => {
        console.log('item checkbox', item)
        const copyListTodo = [...listTodo];
        const newList = copyListTodo.map((el) => {
            if (item.id === el.id) {
                return {
                    ...el,
                    isComplete: !el.isComplete
                }
            }
            return el;
        });
        setListTodo(newList);
    }
    const handleOnAllCheckbox = () => {
        const findUncheck = listTodo.find(el => !el.isComplete);
        if (findUncheck) {
            const newList = listTodo.map((el) => {
                return {
                    ...el,
                    isComplete: true
                }
            });
            setListTodo(newList);
        } else {
            const newList = listTodo.map((el) => {
                return {
                    ...el,
                    isComplete: false
                }
            });
            setListTodo(newList);
        }
    }
    const isAllCheckbox = () => {
        const findUncheck = listTodo.find(el => !el.isComplete);
        if (listTodo.length === 0) {
            return findUncheck;
        }
        return !findUncheck;
    }
    const onShoWList = (tabshow) => {
        setTab(tabshow);
    }
    const getShowListTodo = () => {
        if (tab === BUTTON.all) {
            return listTodo;
        } else if (tab === BUTTON.active) {
            return listTodo.filter(el => el.isComplete === false);
        } else {
            return listTodo.filter(el => el.isComplete === true);
        }
    }
    const handleOnDelete = () => {
        const copyListTodo = [...listTodo]
        const newList = copyListTodo.filter(el => el.isComplete === false);
        setListTodo(newList);
    }
    return {
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
}

export default UseHook;
