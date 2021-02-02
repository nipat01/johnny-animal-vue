<template>
  <div>
    <v-app-bar app color="primary" dark>
      <!-- <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Johnny Animal</v-toolbar-title>
      </div> -->

      <v-btn to="/" text>
        <span class="mr-2">Johnny Animal</span>
      </v-btn>

      <v-btn color="white" text rounded class="my-2">ประกาศน้อง </v-btn>
      <v-btn color="white" text rounded class="my-2"
        >เพิ่มสถานรับเลี้ยงสัตว์
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>