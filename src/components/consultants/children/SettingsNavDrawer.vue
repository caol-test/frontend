<template>
  <v-navigation-drawer
    dark
    fixed
    permanent
    right
    v-model="settingsDrawer"
    :color="$store.getters.getThemeColor"
    :mini-variant.sync="settingsDrawerMini"
  >
    <v-list-item class="px-2 mt-15">
      <v-list-item-avatar>
        <v-icon>mdi-cog</v-icon>
      </v-list-item-avatar>

      <v-list-item-title>Settings</v-list-item-title>

      <v-btn icon @click.stop="settingsDrawerMini = !settingsDrawerMini">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <month-picker label="Start month" dateType="start" />
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <month-picker label="End month" dateType="end" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import MonthPicker from "@/components/consultants/children/MonthPicker";

export default {
  name: "SettingsNavDrawer",

  data: () => ({
    settingsDrawer: true,
    settingsDrawerMini: true,
  }),
  components: { MonthPicker },
};
</script>
