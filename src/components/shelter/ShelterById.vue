<template>
  <v-container>
    <div>this is shelter id</div>
    {{ shelters }}
  </v-container>
</template>

<script>
export default {
  data: () => ({
    shelters: {
      id: 1,
      shelterName: "ป้าจุ๊",
      typeOfUser: "3",
      thumpb:
        "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
    },
  }),

  created() {
    console.log(this.$route.params.id);
  },
};
</script>