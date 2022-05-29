<template>
  <v-navigation-drawer
    dark
    fixed
    permanent
    expand-on-hover
    :color="$store.getters.getThemeColor"
  >
    <v-list dense nav class="mt-15">
      <v-list-item v-for="item in links" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    links: [
      { to: "/", title: "Home", icon: "mdi-home" },
      { to: "/consultants", title: "Consultants", icon: "mdi-account-group" },
      { to: "/about", title: "About", icon: "mdi-information" },
    ],
  }),
};
</script>
