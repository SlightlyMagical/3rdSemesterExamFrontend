export const UserHelper = {

    getUserId() {
        return Number.parseInt(localStorage.getItem("user") as string);
    },

    getUserToken() {
        return localStorage.getItem("token");
    },

    setUserId(id : any | null) {
        if(id == null) localStorage.removeItem("user");
        else localStorage.setItem("user", id.toString());
    },

    setUserToken(token : string | null) {
        if(token == null) localStorage.removeItem("token");
        else localStorage.setItem("token", token);
    }
}