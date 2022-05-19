<!--<script setup>-->
<!--import axios from "axios";-->

<!--const props = defineProps(['message', 'editMethod', 'messages']-->
<!--//     {'editMessage', 'deleteMessage',-->
<!--//   message: Object,-->
<!--//   editMessage: Function,-->
<!--//   deleteMessage: Function,-->
<!--//   messages: Array-->
<!--// }-->
<!--)-->
<!--let message = props.message-->
<!--const edit = () => {-->

<!--  // console.log(message)-->
<!--  props.editMethod(message)-->

<!--}-->

<!-- const del = async () => {-->
<!-- await axios.delete(`http://localhost:8080/message/${props.message.id}` ).then((result) => {-->
<!--    if (result.status === 200) {-->
<!--      props.messages.splice(props.messages.indexOf(props.message), 1);-->
<!--    }-->
<!--  })-->
<!--}-->
<!--</script>-->
<script>
import axios from "axios";

export default {
  props: ["message", "editMethod", 'messages'],
  methods: {
    edit() {
      this.editMethod(this.message);
    },
    del() {
      axios.delete(`http://localhost:8080/message/${this.message.id}`).then((result) => {
        if (result.status === 200) {
          this.messages.splice(this.messages.indexOf(this.message), 1);
        }
      })
    }
  }
};
</script>
<template>
  <div>
    <i>({{ message.id }})</i>
    {{ message.text }}
    <span style="position: absolute; right: 0">
             <input type="button" value="Edit" @click="edit"/>
             <input type="button" value="X" @click="del"/>
        </span>
  </div>
</template>


<style>

</style>