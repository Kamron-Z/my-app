import axios from "axios";


let axiosCreator = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "93dd530c-fc6d-4e26-bfa6-16b1f7bc6644"
    }
})

export let usersAPI = {
    getUsersApi(currentPage = 1, pageSize = 5) {
        return axiosCreator.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    delFollow(userId) {
        return axiosCreator.delete('follow/' + userId)
    },
    postFollow(userId) {
        return axiosCreator.post('follow/' + userId)
    }
}

export let authAPI = {
    me(userId) {
       return axiosCreator.get('profile/' + userId)
    },
    authUser() {
        return axiosCreator.get('auth/me')
    },

}
