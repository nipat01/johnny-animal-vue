<template>
  <div>
    <v-app-bar app color="primary lighten-1" dark>
      <!-- <v-app-bar app color="primary" dark> -->

      <v-btn to="/" plain text>
        <img
          class="mr-3"
          :src="require('../assets/animal-icon.png')"
          height="50"
        />
        <v-toolbar-title>Johnny Animal</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        v-for="item in menu"
        :key="item.id"
        :to="item.to"
        color="white"
        text
        class="my-2"
        >{{ item.title }}</v-btn
      >
      <!-- </v-toolbar-items> -->

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => ({
    menu: [
      { id: 1, title: "ประกาศหาเจ้าของ", to: "/add/pet" },
      { id: 2, title: "เพิ่มสถานที่รับเลี้ยง", to: "/add/shelter" },
      { id: 3, title: "เข้าสู่ระบบ", to: "/login" },
    ],
  }),
};
</script>