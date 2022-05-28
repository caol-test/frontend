<template>
  <v-app>
    <navigation-drawer />

    <app-bar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/sidebar/NavigationDrawer";
import AppBar from "@/components/sidebar/AppBar";

export default {
  name: "App",
  components: { NavigationDrawer, AppBar },
};
</script>
