import axios from "axios"
const url = "https://63a4ff782a73744b00836054.mockapi.io/list";
const Api = {
    getList: () => {
        return axios.get(url).then((data) => {
            return data
        })
    },
    createTodoList: (params) => {
        return axios.post(url, params);
    },
    DeleteItem: (id) => {
        return axios.delete(`${url}/` + id);
    },
    UpdateItem: (id, params) => {
        return axios.put(`${url}/${id}`, params);
    }
}

export default Api;
