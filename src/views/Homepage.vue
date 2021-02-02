<template>
  <v-container>
    <div>
      <v-row>
        <v-col>
          <h2>ค้นหา</h2>
          <v-autocomplete rounded solo></v-autocomplete>
        </v-col>
      </v-row>
      <Shelter />
      <Pet />
    </div>
  </v-container>
</template>

<script>
import Shelter from "../components/shelter/index.vue";
import Pet from "../components/pet/index.vue";
export default {
  components: {
    Shelter,
    Pet,
  },
  data: () => ({}),
};
</script>