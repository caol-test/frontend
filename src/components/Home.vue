<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2>Welcome to CAOL Test</h2>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <v-btn to="/consultants" color="info">
          <v-icon class="mr-2">mdi-account-group</v-icon>
          Let's do this
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
};
</script>
