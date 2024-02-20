import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c1c104ef-1237-4c7b-8db0-352c0d7688f2"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    },

    getCurrentUser() {
        console.warn('Obsolete method. Please use autheAPI')
        return authAPI.getCurrentUser()
    },

    deleteFriends(userId) {
        return instance.delete(`follow/${userId}`)
    },

    addFriends(userId) {
        return instance.post(`follow/${userId}`)
    },
}

export const authAPI = {
    getCurrentUser() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(
            `profile/photo`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
        )
    }
}
