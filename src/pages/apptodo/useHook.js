import { useEffect, useState } from "react";
import Api from "../server/Api";

export const BUTTON = {
    all: "all",
    active: "active",
    complete: "conplete"
}
function UseHook() {

    const [listTodo, setListTodo] = useState([]);
    const [content, setContent] = useState("");
    const [isShowInputEdit, setIsShowInputEdit] = useState(false);
    const [editItem, setEditItem] = useState("");
    const [tab, setTab] = useState(BUTTON.all);
    const handleOnchangeContent = (event) => {
        setContent(event.target.value);
    }
    const fetchListTodo = async () => {
        const res = await Api.getList();
        console.log('res', res.data);
        setListTodo(res.data);
    }
    useEffect(() => {
        fetchListTodo();
    }, []);
    const onAddListTodo = async () => {
        if (!content) {
            return;
        }
        await Api.createTodoList({
            content: content,
            isComplete: false
        });
        fetchListTodo()
        setContent("")
    }
    const onDelete = async (item) => {
        await Api.DeleteItem(item.id);
        fetchListTodo();
    }
    const onClickEditItem = (item) => {
        console.log('editItem', item);
        setEditItem(item)
        setIsShowInputEdit(true)
    }
    const onEdit = async (item) => {
        await Api.UpdateItem(item.id, {
            content: item.content
        });
        fetchListTodo();
        setEditItem("");
    }
    const handleOnchangeCheckboxItem = async (item) => {
        await Api.UpdateItem(item.id, {
            isComplete: !item.isComplete
        });
        fetchListTodo();
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
