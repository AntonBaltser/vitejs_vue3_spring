<template>
  <v-card
      style="margin: auto"
      max-width="80%"
  >
    <v-card-title class="white--text orange darken-4">
      <MessageForm
          :messageAttr="message"
      />
    </v-card-title>
    <MessageRow
        v-for="message in sortedMessages"
        :key="message.id"
        :message="message"
        :editMessage="editMessage"
    />

  </v-card>
<!--  <v-container>-->
<!--    <v-layout align-space-around justify-start column>-->
<!--      <message-form :messageAttr="message" />-->
<!--      <message-row v-for="message in sortedMessages"-->
<!--                   :key="message.id"-->
<!--                   :message="message"-->
<!--                   :editMessage="editMessage" />-->
<!--    </v-layout>-->
<!--  </v-container>-->
</template>

<script >

import MessageForm from "../components/messages/MessageForm.vue";
import MessageRow from "../components/messages/MessageRow.vue";
import {mapGetters} from "vuex";

export default{
  name: 'MessageList',
  components: {
    MessageRow,
    MessageForm
  },
  data() {
    return {
      message: null
    }
  },
  computed: mapGetters(['sortedMessages']),
  methods: {
    editMessage(message) {
      this.message = message
    },
  }
}

</script>

<style>

</style>