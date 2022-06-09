<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>My app</v-toolbar-title>
      <v-toolbar-items>
        <v-btn
            color="info"
            v-if="profileGetters"
            :disabled="$route.path === '/'"
            disabled
            @click="showMessages"
        >
          Messages
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
            color="info"
            v-if="profileGetters"
            :disabled="$route.path === '/profile'"
            @click="showProfile">
          {{profileGetters.name}}
        </v-btn>
      </v-toolbar-items>
      <v-btn v-if="profileGetters" value="exit" href="/logout">
        <span class="material-icons">logout</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import MessageList from './pages/MessageList.vue'
import {addHandler} from "./util/ws";
import {mapGetters, mapMutations} from "vuex";

export default {
  components: {
    MessageList,
  },
  computed: mapGetters(['profileGetters']),

  methods: {
    ...mapMutations(['addMessageMutation', 'updateMessageMutation', 'removeMessageMutation']),
    showMessages(){
      this.$router.push('/')
    },
    showProfile(){
      this.$router.push('/profile')
    }

  },
  created() {
    addHandler(data => {
      if (data.objectType === 'MESSAGE') {
        switch (data.eventType) {
          case 'CREATE':
            this.addMessageMutation(data.body)
            break
          case 'UPDATE':
            this.updateMessageMutation(data.body)
            break
          case 'REMOVE':
            this.removeMessageMutation(data.body)
            break
          default:
            console.error(`Looks like the event type if unknown "${data.eventType}"`)
        }
      } else {
        console.error(`Looks like the object type if unknown "${data.objectType}"`)
      }
    })
  },
  beforeMount(){
    if(!this.profileGetters){
      this.$router.replace('/auth')
    }
  }
}
</script>
<style scoped>
v-content{
  background: linear-gradient(transparent 50%, rgba(93, 218, 21, 0.55) 50%),
  linear-gradient(90deg, rgba(54, 32, 147, 0.2) 50%, transparent 50%);
  background-size: 40px 40px;

}
</style>
