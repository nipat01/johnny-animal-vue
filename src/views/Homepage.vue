<template>
  <v-container>
    <div>
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