<template>
  <v-container>
    <div>
      <v-row justify="center">
        <h1>ประกาศหาเจ้าของ</h1>
        <v-spacer></v-spacer>
        <v-btn to="/allpet" class="my-2"> ดูเพิ่มเติม </v-btn>
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
              </v-img>

              <v-card-subtitle class="pb-0"
                ><h2>{{ pet.name }}</h2></v-card-subtitle
              >

              <v-card-text class="text--primary">
                <div>{{ pet.gender }}</div>
                <div>{{ pet.specy }}</div>
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
    pets: [
      {
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
      {
        id: 2,
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
      {
        id: 3,
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
      {
        id: 4,
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
    ],
  }),
  mounted() {
    this.getPetByLimit();
  },
  methods: {
    getPetByLimit() {
      axios
        .get("https://johnny-animal-api.herokuapp.com/pet/only6")
        .then((response) => (this.pets = response.data));
    },
  },
};
</script>