<template>
  <v-app>
    <v-navigation-drawer
      dark
      absolute
      permanent
      expand-on-hover
      color="primary"
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

    <v-app-bar app color="primary" dark>
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
    <v-main>
      <router-view />
    </v-main>
  </v-app>
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
