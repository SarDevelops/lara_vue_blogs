import {createRouter, createWebHistory} from "vue-router";
import Dashboard from '../views/dashboard/Dashboard.vue';
import Login from "../views/login_register/Login.vue";
import Register from "../views/login_register/Register.vue";
import DefaultLayout from '../components/DefaultLayout.vue';
import store from "../store";
import AuthLayout from "../components/AuthLayout.vue";
import CreateBlogs from "../views/blogs/CreateBlogs.vue";


const routes =[

    {
        path:'/',
        redirect:'/dashboard',
        name:'Dashboard',
        component:DefaultLayout,
        meta:{requiresAuth:true},
        children:[
            {
                path:'/dashboard',
                name:'Dashboard',
                component:Dashboard
            },
            {
                path:'/create-blog',
                name:'CreateBlogs',
                component:CreateBlogs
            },
        ]

    },

    {
        path:'/auth',
        redirect:'/login',
        name:'Auth',
        meta:{isGuest:true},
        component:AuthLayout,
        children:[
            {
                path:'/login',
                name:'Login',
                component:Login
            },
            {
                path:'/register',
                name:'Register',
                component:Register
            }
            ,
        ]

    },


];

const  router = createRouter(
    {
        history:createWebHistory(),
        routes

    }
)

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});
export default router;
