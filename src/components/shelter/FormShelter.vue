<template>
  <v-container>
    <div>
      <v-row>
        <h1>เพิ่มข้อมูลสถานที่รับเลี้ยง</h1>
      </v-row>
      <v-row>
        <v-text-field v-model="user.firstname" label="ชื่อ"></v-text-field>
        <v-text-field v-model="user.lastname" label="นามสกุล"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field v-model="user.lineId" label="ไลน์ไอดี"></v-text-field>
        <v-text-field v-model="user.tel" label="โทรศัพท์"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field v-model="user.age" label="อายุ"></v-text-field>
        <v-select v-model="user.gender" :items="gender" label="เพศ"></v-select>
        <v-select
          v-model="user.typeOfUser"
          :items="typeOfUser"
          label="ปรเภทผู้ใช้งาน"
        ></v-select>
      </v-row>

      <v-row>
        <v-text-field v-model="user.adress" label="ที่อยู่"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="user.description"
          label="คำอธิบาย"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="user.image"
          label="รูปภาพ"
          prepend-icon="mdi-camera"
        ></v-text-field>
      </v-row>
      <v-btn @click="submit"> บันทึก </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    apiUrl: process.env.VUE_APP_API_URL,
    gender: ["ผู้ชาย", "หญิง"],
    typeOfUser: ["สถานที่รับเลี้ยง"],
    user: {
      firstname: "",
      lastname: "",
      typeOfUser: "",
      lineId: "",
      tel: "",
      image: "",
      gender: "",
      age: "",
      // province:"",
      // distict:"",
      // subdistict:"",
      address: "",
      description: "",
    },
  }),
  methods: {
    submit() {
      // console.log("user", this.user);
      axios.post(`${this.apiUrl}/user`, this.user).then((response) => {
        console.log("add user", response);
        this.$router.push("/");
      });
    },
  },
};
</script>