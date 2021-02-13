<template>
  <v-container>
    <div>
      <h1>เพิ่มข้อมูลประกาศน้อง</h1>
      <v-text-field v-model="pet.name" label="ชื่อ"></v-text-field>
      <v-text-field v-model="pet.age" label="อายุ"></v-text-field>
      <v-select v-model="pet.gender" :items="gender" label="เพศ"></v-select>
      <v-select v-model="pet.specy" :items="specy" label="ประเภท"></v-select>
      <v-text-field v-model="pet.description" label="คำอธิบาย"></v-text-field>
      <v-file-input
        label="รูปภาพ"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
      <v-btn @click="submit"> บันทึก </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    apiUrl: process.env.VUE_APP_API_URL,
    gender: ["ผู้ชาย", "ผู้หญิง"],
    specy: ["โฮ่ง", "เหมียว"],
    info: [],
    pet: {
      name: "",
      age: "",
      gender: "",
      specy: "",
      color: "",
      image:
        "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg",
      status: "",
      description: "",
    },
  }),

  methods: {
    submit() {
      if (this.pet.specy == "โฮ่ง") {
        this.pet.image =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgv2R3oUiiUQUCmEL5Lsmw0Qf6oQqa5Jrqg&usqp=CAU";
      }
      axios.post(`${this.apiUrl}/pet`, this.pet).then((response) => {
        console.log(response);
        this.$router.push("/");
      });
    },
  },
};
</script>