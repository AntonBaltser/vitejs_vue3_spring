<script>
import MessageList from './components/messages/MessageList.vue'
import axios from "axios";
import {addHandler} from "./util/ws";
import {getIndex} from "./util/collections";
export default {
  components: {
    MessageList,
  },
  data() {
    return {
      messages: frontendData.messages,
      profile: frontendData.profile
      // messages: '',
      // pofile: 'null'
    }
  },
// mounted(){
//     axios.get('http://localhost:8080/message/')
//         .then(res => this.messages = res.data)
//   console.log(this.messages)
// },
created() {
    addHandler(data => {
    let index = getIndex(this.messages, data.id)
      if(index > -1)
        this.messages.splice(index, 1, data)
      else
        this.messages.push(data)
    })
}
}
</script>

<template>
  <div>
    <p>phallop</p>
        <div v-if="!profile">Необходимо авторизоваться через <a href="/login">Google</a></div>
        <div v-else>
          <div>{{ profile.name }}&nbsp <a href="/logout">ВЫйти</a></div>
          <MessageList :messages="messages"/>
        </div>
  </div>
</template>
