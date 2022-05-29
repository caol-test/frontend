<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="mb-3">Consultants</h2>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <chart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from "@/components/charts/GraphChart";

export default {
  name: "ConsultantsGraph",

  data: () => ({}),
  components: { Chart },
};
</script>
