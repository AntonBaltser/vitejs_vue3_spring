<template>
  <v-card
      style="margin: 10vh auto 80vh"
      max-width="344"
      elevation="8"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Profile
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{profileGetters.name}}
        </v-list-item-title>
        <v-list-item-subtitle>
          <p>{{profileGetters.name}}</p>
          <p>{{profileGetters.locale}}</p>
          <p>Last visit: {{profileGetters.lastVisit}}</p>
         </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
          tile
          size="80"
          color="grey"
      >
        <img :src="profileGetters.userpic" alt="">
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'userprofile',
    computed: mapGetters(['profileGetters'])
}
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
}
</style>