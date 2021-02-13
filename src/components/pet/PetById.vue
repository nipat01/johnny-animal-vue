<template>
  <v-container>
    <div>
      <!-- <p>this is pet id</p> -->
      <!-- {{ pets }} -->

      <v-row>
        <h1>ประวัติน้อง</h1>
      </v-row>
      <v-row>
        <v-col>
          <v-img max-width="500" max-height="300" :src="pets.image"></v-img>
        </v-col>
        <v-col>
          {{ pets }}
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
    pets: {},
    id: "",
  }),

  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getPetById(this.id);
  },
  methods: {
    getPetById(id) {
      axios.get(`${this.apiUrl}/pet/${id}`).then((response) => {
        console.log("response", response.data);
        this.pets = response.data;
      });
    },
  },
};
</script>