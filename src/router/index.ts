import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/components/MainPage.vue";
import LoginPage from "@/components/LoginPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/', component: MainPage},
        {path: '/login', component: LoginPage},
    ]
})



