<template>
  <v-container>
    <div>
      <div>this is shelter</div>
      <!-- <pre>{{ data }}</pre> -->
      <div v-for="shelter in shelters" :key="shelter">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="shelter.thumpb"
          >
            <v-card-title>{{ shelter.shelterName }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{
            shelter.shelterName
          }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    shelters: [
      {
        shelterName: "ป้าจุ๊",
        typeOfUser: "3",
        thumpb:
          "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      },
      {
        shelterName: "ป้าจุ๊",
        typeOfUser: "3",
        thumpb:
          "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      },
      {
        shelterName: "ป้ากัญญา",
        typeOfUser: "3",
        thumpb:
          "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      },
      {
        shelterName: "ป้ากัญญา",
        typeOfUser: "3",
        thumpb:
          "https://mk0southeastasih56vx.kinstacdn.com/wp-content/uploads/2020/04/000_1QF1IN-scaled.jpg",
      },
    ],
  }),
};
</script>