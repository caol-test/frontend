<template>
  <v-app-bar
    app
    :color="$store.getters.getThemeColor"
    dark
    class="elevation-0"
    fixed
    style="z-index: 99999"
  >
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="70"
      />

      <v-card-text class="font-weight-bold">CAOL FRONTEND</v-card-text>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
