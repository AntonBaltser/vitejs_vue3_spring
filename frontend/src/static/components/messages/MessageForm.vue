<!--<script setup>-->

<!--import axios from "axios";-->
<!--import {ref, watch, watchEffect} from "vue";-->

<!--const getIndex = (list, id) => {-->
<!--  console.log(list)-->
<!--  for (let i = 0; i < list.length; i++) {-->
<!--    if (list[i].id === id) {-->
<!--      return i;-->
<!--    }-->
<!--  }-->
<!--  return -1;-->
<!--}-->
<!--// {-->
<!--//   messages: Object,-->
<!--//       messageAttr: String-->
<!--// }-->
<!--const props = defineProps( ['messages', 'messageAttr'])-->
<!--let text = ref('');-->
<!--let id ='';-->



<!--watchEffect(props.messageAttr, (newVal, oldVal) => {-->
<!--  // console.log({newValue, oldValue})-->
<!--  console.log(props.messageAttr)-->
<!--  console.log(newVal)-->
<!--        //   text = newVal.text-->
<!--        // id = newVal.id-->
<!--})-->

<!--const save = async () => {-->

<!--  const message = {text: text.value};-->
<!--  if (id) {-->
<!--   await axios.put(`http://localhost:8080/message/${id}`, message).then(result => {-->
<!--    console.log(result.data)-->
<!--      const index = getIndex(props.messages, result.data.id)-->

<!--     props.messages.splice(index, 1, result.data);-->
<!--      // text = '';-->
<!--      // id = '';-->
<!--    })-->
<!--  } else {-->
<!--    await  axios.post('http://localhost:8080/message/' , message)-->
<!--        .then(data => props.messages.push(data.data));-->
<!--    // text = '';-->
<!--    text.value = '';-->
<!--  }-->

<!--}-->
<!--</script>-->
<script>
import axios from "axios";
import { sendMessage } from "../../util/ws"


export default {
  props: ["messages", "messageAttr"],
  data() {
    return {
      text: "",
      id: "",
    };
  },
  watch: {
    messageAttr(newVal, oldVal) {
      this.text = newVal.text;
      this.id = newVal.id;
    },
  },
  methods: {
    save() {
      sendMessage({id: this.id, text: this.text})
      this.text = '';
    }
    //     const message = { text: this.text };
    //     if (this.id) {
    //       axios.put(`http://localhost:8080/message/${this.id}`, message).then((result) => {
    //         const index = getIndex(this.messages, result.data.id);
    //
    //         this.messages.splice(index, 1, result.data);
    //         this.text = "";
    //         this.id = "";
    //       });
    //     } else {
    //       axios.post("http://localhost:8080/message/", message).then((data) => this.messages.push(data.data));
    //       this.text = "";
    //     }
    //   },
    // },
  }
}
</script>


<template>
  <div>
    <input type="text" placeholder="Write something" v-model="text"/>
    <input type="button" value="Save" @click="save" />
  </div>
</template>



<style>

</style>