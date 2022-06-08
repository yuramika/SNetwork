import * as axios from "axios";

const instanse = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "0dee9d7c-dd76-4537-9a14-d016332233d8"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {return    instanse.get(`profile/`+ userId)}
}

export const followAPI = {
    getFollow(userID = 1){
        return instanse.delete(`follow/${userID}`)}
}
export const unfollowAPI = {
    getUnfollow(userID){
        return instanse.post(`follow/${userID}`)
    }
}

export  const authAPI = {
    getAuth() {
        return instanse.get(`auth/me`)
    }
}