<template>
  <v-app>
    <Nav />
    <v-main>
      <!-- <HelloWorld /> -->
      <Shelter />
      <Pet />
      <router-view></router-view>
    </v-main>
    <Foorter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./views/Nav.vue";
import Foorter from "./views/Footer.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import Shelter from "./components/shelter/index.vue";
import Pet from "./components//pet/index.vue";
export default Vue.extend({
  name: "App",

  components: {
    Nav,
    Foorter,
    // HelloWorld,
    Shelter,
    Pet,
  },

  data: () => ({
    //
  }),
});
</script>
