import api from "../helpers/apiClient";


export const getUsersApi = () =>  api.get(`https://jsonplaceholder.typicode.com/users`);

export const rootService = {
    getUsersApi,
}