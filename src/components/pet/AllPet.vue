<template>
  <v-container>
    <div>
      <v-row justify="center">
        <h1>ประกาศหาเจ้าของ</h1>
        <v-spacer></v-spacer>
        <!-- <v-btn class="my-2"> ดูเพิ่มเติม </v-btn> -->
      </v-row>
      <div>
        <v-row>
          <v-col
            cols="12"
            sm="3"
            md="4"
            v-for="(pet, index) in pets"
            :key="index"
          >
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="pet.image"
              >
                <!-- <v-card-title>{{ pet.name }}</v-card-title> -->
              </v-img>

              <v-card-subtitle class="pb-0"
                ><h2>{{ pet.name }}</h2></v-card-subtitle
              >

              <v-card-text class="text--primary">
                <div>{{ pet.gender }}</div>
                <div>{{ pet.specy }}</div>
                <!-- <div>{{ pet.description }}</div> -->
              </v-card-text>

              <v-card-actions>
                <v-btn
                  :to="`/pet/${pet.id}`"
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
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    apiUrl: process.env.VUE_APP_API_URL,
    pets: [],
  }),
  methods: {
    getAllPet() {
      axios.get(`${this.apiUrl}/pet`).then((response) => {
        console.log("response", response);
        this.pets = response.data;
      });
   
    },
  },
  mounted() {
    this.getAllPet();
  },
};
</script>