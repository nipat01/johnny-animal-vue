<template>
  <v-app>
    <Nav />
    <v-main>
      <!-- <HelloWorld /> -->
      <!-- <Home /> -->
    </v-main>
    <Foorter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./views/Nav.vue";
import Foorter from "./views/Footer.vue";

// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./views/Home.vue";
export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    // Home,
    Nav,
    Foorter,
  },

  data: () => ({
    //
  }),
});
</script>
