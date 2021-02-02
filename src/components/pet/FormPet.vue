<template>
  <v-container>
    <div>
      <h1>เพิ่มข้อมูลประกาศน้อง</h1>
      <v-text-field label="ชื่อ"></v-text-field>
      <v-text-field label="อายุ"></v-text-field>
      <v-select :items="gender" label="เพศ"></v-select>
      <v-select :items="specy" label="ประเภท"></v-select>
      <v-text-field label="คำอธิบาย"></v-text-field>
      <v-file-input
        label="รูปภาพ"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    gender: ["ผู้ชาย", "ผู้หญิง"],
    specy:["โฮ่ง", "เหมียว"]
  }),
};
</script>