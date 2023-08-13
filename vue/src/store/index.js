import {createStore} from "vuex";
import axiosClient from "../axios.js";


const store = createStore({
    state:{
        user:{
            data: {
                // name: 'Tom Cook',
                // email: 'tom@example.com',
                // imageUrl:
                //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            token:sessionStorage.getItem('TOKEN')
        }
    },
    getters:{},
    actions:{
        register({commit},user){
            // return fetch(`http://127.0.0.1:8000/api/register`,{
            //     headers:{
            //         "Content-type":"application/json",
            //         Accept:"application/json"
            //     },
            //     method:"POST",
            //     body:JSON.stringify(user),
            // })
            //     .then((res)=>res.json())
            //     .then((res)=>{
            //         commit("setUser",res);
            //         return res;
            //     })
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit('setUser', data);
                    // commit('setToken', data.token)
                    return data;
                })
        }
        ,
        login({commit}, user) {
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data);
                    // commit('setToken', data.token)
                    return data;
                })
        },
        logout({commit}) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response;
                })
        },
    },
    mutations:{
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
        },
        setUser:(state,userData)=>{
            state.user.token = userData.token;
            state.user.data =userData.data;
            sessionStorage.setItem('TOKEN',userData.token);
        },
        setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
    },
    modules:{},
})

export default store;
