// Utilities
import { defineStore } from 'pinia';
import axios from 'axios';


 const MyAPIInstance =  axios.create({
    baseURL: import.meta.env.VITE_MY_API,
});

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {}
  }),
  getters: {
    getUser(state){
        return state.user
    }
  },
  actions: {
     async registerUser(registerForm) {
        try{
            const {email, password, confirmPassword, firstName, lastName} = registerForm;
            const response = await MyAPIInstance.post('/register',  {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                confirm_password: confirmPassword
              });
            this.user = response;
        }catch(e){
            console.log("error in action");
        }
    },
    fetchCookie() {
       return axios.get('/sanctum/csrf-cookie')
    },
     loginUser(loginForm) {
            const {email, password} = loginForm;
            return MyAPIInstance.post('/login', {email, password});
    },
  },
})
