<template>
  <v-container>
    <div>
      <v-row justify="center">
        <h1>รวมสถานรับเลี้ยงสัตว์</h1>
        <v-spacer></v-spacer>
        <v-btn to="/allshelter" class="my-2"> ดูเพิ่มเติม </v-btn>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="3"
          md="4"
          v-for="(shelter, index) in shelters"
          :key="index"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="shelter.image"
            >
              <!-- <v-card-title>{{ shelter.shelterName }}</v-card-title> -->
            </v-img>

            <v-card-subtitle class="pb-0">
              <h2>{{ shelter.firstname }} {{ shelter.lastname }}</h2>
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ shelter.address }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                :to="`/user/${shelter.id}`"
                target="_blank"
                color="orange"
                text
              >
                Open
              </v-btn>
              <v-btn color="orange" text> Share </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    apiUrl: process.env.VUE_APP_API_URL,
    shelters: [
      // {
      //   id: 1,
      //   shelterName: "ป้าจุ๊",
      //   typeOfUser: "3",
      //   thumpb:
      //     "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      // },
      // {
      //   id: 2,
      //   shelterName: "ป้าจุ๊",
      //   typeOfUser: "3",
      //   thumpb:
      //     "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      // },
      // {
      //   id: 3,
      //   shelterName: "ป้ากัญญา",
      //   typeOfUser: "3",
      //   thumpb:
      //     "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      // },
      // {
      //   id: 4,
      //   shelterName: "ป้ากัญญา",
      //   typeOfUser: "3",
      //   thumpb:
      //     "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      // },
    ],
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get(`${this.apiUrl}/user`).then((response) => {
        console.log("response", response);
        this.shelters = response.data;
      });
    },
  },
};
</script>