import { createApp } from 'vue'
import App from './App.vue'
import { connect } from "./util/ws"

if(frontendData.profile){
    connect()
}


const app = createApp(App)
app.mount('#app')
