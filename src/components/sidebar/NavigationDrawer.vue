<template>
  <v-navigation-drawer
    dark
    absolute
    permanent
    expand-on-hover
    :color="$store.getters.getThemeColor"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> MENU ITEMS </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
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
