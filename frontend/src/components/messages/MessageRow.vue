<template>
  <v-card
      class="m-3"
  >
    <v-layout>
      <v-card-content >
        <v-card-text>
          <div
              style="width: 100%; word-break: break-word"
          >
            <i>({{ message.id }})</i>
            {{ message.text }}
          </div>
        </v-card-text>

      </v-card-content>

      <v-card-actions class="d-block d-sm-flex">
<!--        <div >-->
        <v-btn type="button" value="edit" @click="edit">
          <span class="material-icons">edit</span>
        </v-btn>
          <v-spacer></v-spacer>
        <v-btn type="button" value="X" @click="del">
          <span class="material-icons">delete</span>
        </v-btn>
<!--        </div>-->
      </v-card-actions>
    </v-layout>
  </v-card>
  <Media
      v-if="message.link"
      :message="message"
  />
</template>

<script>

import { mapActions } from 'vuex'
import Media from "../media/Media.vue";
export default {
  components: { Media },
  props: ['message', 'editMessage'],
  methods: {
    ...mapActions(['removeMessageAction']),
    edit() {
      this.editMessage(this.message)
    },
    del() {
      this.removeMessageAction(this.message)
    }
  }
}
</script>


<style>

</style>
