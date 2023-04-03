import {defineStore} from "pinia";
import router from "../router/index.js";

export const useAuthStore = defineStore({
    id:'auth',
    state :() =>({
        user : null,
        loading: false,
    }),

    //login logout
    actions: {
        handleLogin(data){
            if(!data.username || !data.password){
                alert('Boşlıkları Dondurunuz')
            }

            this.loading = true

            setTimeout(()=>{
                delete data.password
                this.user = data
                this.loading =false;
                router.push({name:'home'})
            }, 1000);

        },
        handleLogout(){
            this.user=null
            router.push({name:'login'})
        }

    },

    getters: {
        getCurrentUser(state){
            return state.user
        }
    }



})