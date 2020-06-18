import request from "./request";

export const getUsers = () => {
    return request({
        url : `/users/`
    });
};

export const getUser = (userId) => {
    return request({
        url : `/users/${userId}/`
    });
};

export const postUser = (userId) => {
    return request({
        url : `/users/${userId}/`,
        method:'post'
    });
};

export const putUser = (userId) => {
    return request({
        url : `/users/${userId}/`,
        method:'put'
    });
};

export const delUser = (userId) => {
    return request({
        url : `/users/${userId}/`,
        method:'delete'
    });
};
