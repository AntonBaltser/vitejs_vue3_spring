<template>
  <form>
    <v-card-content
        style="width: 80%">
    <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required

    ></v-text-field>
    <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
    ></v-text-field>
    </v-card-content>
    <v-card-text class="cente">
    <v-btn
        class="mr-4"
        @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
    </v-card-text>
  </form>


</template>

<script>
// import axios from "axios";
// import store from '../../store'
export default {
data(){
  return{
    name: '',
    email: ''
  }
}
}
</script>


<style>
input{
  text-align: center;
}
</style>