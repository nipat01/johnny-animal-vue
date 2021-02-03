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
    pets: {
      id: 1,
      joshnnyId: 111,
      name: "john",
      age: "",
      sex: "ผู้ชาย",
      specy: "โฮ่ง",
      color: "back",
      status: "wating love",
      description: "นิสันน่ารักมาก เลี้ยง่่าย",
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgv2R3oUiiUQUCmEL5Lsmw0Qf6oQqa5Jrqg&usqp=CAU",
    },
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
      axios.get(`https://johnny-animal-api.herokuapp.com/pet/${id}`).then((response) => {
        console.log("response", response.data);
        this.pets = response.data;
      });
    },
  },
};
</script>