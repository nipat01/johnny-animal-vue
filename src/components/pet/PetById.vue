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
          {{ pets }}
          <p>ชื่อ</p>
          <p>{{ pets.name }}</p>
        </v-col>
        <v-col>
          <v-img max-width="500" max-height="300" :src="pets.thumb"></v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>


<script>
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
  }),

  created() {
    console.log(this.$route.params.id);
  },
};
</script>