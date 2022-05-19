<script >
import MessageForm from "./MessageForm.vue";
import MessageRow from "./MessageRow.vue";
export default{

  props: ['messages'],
  data() {
    return {
      message: null,
    };
  },

  components: {
    MessageForm,
    MessageRow,
  },
  methods: {
    editMethod(message) {
      this.message = message;
    },
  },
}

</script>

<template>

  <div style="position:relative; width: 300px">
    <MessageForm
        :messages="messages"
        :messageAttr="message"
    />

    <MessageRow
        v-for="message in messages"
        :key="message.id"
        :message="message"
        :editMethod="editMethod"
        :messages="messages"
    />
  </div>
</template>
<!--<script setup>-->
<!--import MessageForm from "./MessageForm.vue";-->
<!--import MessageRow from "./MessageRow.vue";-->
<!--import axios from "axios";-->
<!--// {-->
<!--//   messages: Array-->
<!--// }-->
<!--/*const props = */defineProps(-->
<!--    ['messages']-->
<!--)-->
<!--let message1 = null-->
<!--const editMethod = (message) =>  {-->
<!--  // console.log(message)-->
<!--  console.log(message)-->
<!--  return message1 = message;-->

<!--}-->
<!--</script>-->
<style>

</style>