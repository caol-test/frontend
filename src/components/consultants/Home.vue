<template>
  <v-container>
    <settings-nav-drawer />

    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="mb-3">Consultants performance</h2>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <users-table />

        <v-btn class="mt-5">
          <v-icon class="mr-2">mdi-chart-bell-curve-cumulative</v-icon>
          Visualize Data
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <chart v-if="graphType === 'chart'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersTable from "@/components/consultants/children/UsersTable";
import Chart from "@/components/charts/GraphChart";
import SettingsNavDrawer from "@/components/consultants/children/SettingsNavDrawer";

export default {
  name: "ConsultantsHome",

  data: () => ({
    settingsDrawer: true,
    settingsDrawerMini: true,
    startMonth: null,
    endMonth: null,
    graphType: null,
  }),
  components: { UsersTable, Chart, SettingsNavDrawer },
  methods: {
    setMonth(dateType, value) {
      if (dateType === "start") {
        this.startMonth = value;
      } else {
        this.endMonth = value;
      }
    },
  },
  mounted() {
    this.$root.$on("start", (data) => {
      this.setMonth("start", data);
    });
    this.$root.$on("end", (data) => {
      this.setMonth("end", data);
    });
  },
};
</script>
