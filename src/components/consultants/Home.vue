<template>
  <v-container>
    <v-navigation-drawer
      dark
      absolute
      permanent
      right
      v-model="settingsDrawer"
      :color="$store.getters.getThemeColor"
      :mini-variant.sync="settingsDrawerMini"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon class="mr-2">mdi-cog</v-icon>
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
            <month-picker
              label="Start month"
              @select-date="setMonth('start', $event)"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <month-picker
              label="End month"
              @select-date="setMonth('end', $event)"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="mb-3">Consultants performance</h2>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <users-table />
        <chart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersTable from "@/components/consultants/children/UsersTable";
import Chart from "@/components/charts/GraphChart";
import MonthPicker from "@/components/consultants/children/MonthPicker";

export default {
  name: "ConsultantsHome",

  data: () => ({
    settingsDrawer: true,
    settingsDrawerMini: true,
    startMonth: null,
    endMonth: null,
  }),
  components: { UsersTable, Chart, MonthPicker },
  methods: {
    setMonth(monthType, value) {
      if (monthType === "start") {
        this.startMonth = value;
      } else {
        this.endMonth = value;
      }
    },
  },
};
</script>
