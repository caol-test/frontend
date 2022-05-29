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
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12" xs="12" md="4">
        <v-btn
          large
          color="warning"
          class="mt-5"
          :disabled="flagDisableVisualizeBtn"
        >
          <v-icon class="mr-2">mdi-table-large</v-icon>
          View table
        </v-btn>
      </v-col>

      <v-col cols="12" xs="12" md="4">
        <v-btn
          large
          color="success"
          class="mt-5"
          :disabled="flagDisableVisualizeBtn"
        >
          <v-icon class="mr-2">mdi-chart-bar</v-icon>
          View chart
        </v-btn>
      </v-col>

      <v-col cols="12" xs="12" md="4">
        <v-btn
          large
          color="primary"
          class="mt-5"
          :disabled="flagDisableVisualizeBtn"
        >
          <v-icon class="mr-2">mdi-chart-pie</v-icon>
          View Pie
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
    selectedUsers: [],
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
  computed: {
    flagDisableVisualizeBtn() {
      return (
        this.selectedUsers.length === 0 || !this.startMonth || !this.endMonth
      );
    },
  },
  mounted() {
    this.$root.$on("start", (data) => {
      this.setMonth("start", data);
    });

    this.$root.$on("end", (data) => {
      this.setMonth("end", data);
    });

    this.$root.$on("select-users", (data) => {
      this.selectedUsers = data;
      console.log(data);
    });
  },
};
</script>
