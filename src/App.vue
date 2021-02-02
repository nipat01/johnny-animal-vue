<template>
  <v-app>
    <Nav />
    <v-main>
      <v-row>
        <v-col>
          <v-img
            src="https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281_960_720.jpg"
          ></v-img>
        </v-col>
      </v-row>
      <router-view></router-view>
    </v-main>
    <Foorter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./views/Nav.vue";
import Foorter from "./views/Footer.vue";
export default Vue.extend({
  name: "App",

  components: {
    Nav,
    Foorter,
  },

  data: () => ({
    //
  }),
});
</script>
