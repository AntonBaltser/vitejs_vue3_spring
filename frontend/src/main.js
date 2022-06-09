import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'
import { connect } from "./util/ws"
import  store from './store'

import { createRouter, createWebHistory } from "vue-router";
if(frontendData.profile){
    connect()
}
loadFonts()

const routes = [
    { path: '/', component:() => import('./pages/MessageList.vue')},
    { path: '/auth', component:() => import('./pages/Auth.vue')},
    { path: '/profile', component:() => import('./pages/Profile.vue')},
    { path: '/*', component:() => import('./pages/MessageList.vue')},

];
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(vuetify)
    .use(store)
    .use(router)
    .mount('#app')
