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
          @click="showTable()"
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
          @click="showChart()"
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
          @click="showPie()"
        >
          <v-icon class="mr-2">mdi-chart-pie</v-icon>
          View Pie
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col>
        <graph-chart
          v-show="graphType === 'chart'"
          ref="graphChart"
          :chart-series="chartSeries"
        />

        <graph-pie
          ref="graphPie"
          v-show="graphType === 'pie'"
          :chart-series="pieSeries"
        />

        <graph-table v-show="graphType === 'table'" :items="earnings" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersTable from "@/components/consultants/children/UsersTable";
import GraphChart from "@/components/charts/GraphChart";
import GraphTable from "@/components/charts/GraphTable";
import GraphPie from "@/components/charts/GraphPie";
import SettingsNavDrawer from "@/components/consultants/children/SettingsNavDrawer";

export default {
  name: "ConsultantsHome",

  data: () => ({
    settingsDrawer: true,
    settingsDrawerMini: true,
    dialog: false,
    startMonth: "2007-01",
    endMonth: "2007-12",
    graphType: null,
    selectedUsers: [],
    earnings: [],
    chartSeries: [],
    chartXAxis: [],
    pieSeries: [],
    pieLabels: [],
  }),
  components: {
    UsersTable,
    GraphChart,
    GraphPie,
    GraphTable,
    SettingsNavDrawer,
  },
  methods: {
    setMonth(dateType, value) {
      if (dateType === "start") {
        this.startMonth = value;
      } else {
        this.endMonth = value;
      }
    },
    async showTable() {
      this.dialog = false;
      await this.fetchEarnings();

      this.graphType = "table";
      this.dialog = true;
    },
    async showChart() {
      this.dialog = false;
      await this.fetchMonthlyCosts();

      this.graphType = "chart";
      this.dialog = true;
    },
    async showPie() {
      this.dialog = false;
      await this.fetchPercents();

      this.graphType = "pie";
      this.dialog = true;
    },
    async fetchEarnings() {
      let selectedUsersIds = this.getSelectedConsultantsIds();

      let response = await this.$axios({
        url: "/earnings",
        params: {
          consultants: selectedUsersIds,
          from: this.startMonth,
          to: this.endMonth,
        },
      });

      let responseData = this.$axios.getResponseData(response);
      this.earnings = responseData.earnings;
    },
    async fetchMonthlyCosts() {
      let selectedUsersIds = this.getSelectedConsultantsIds();

      let response = await this.$axios({
        url: "/earnings/fixed-cost-avg",
        params: {
          consultants: selectedUsersIds,
          from: this.startMonth,
          to: this.endMonth,
        },
      });

      let responseData = this.$axios.getResponseData(response);

      this.chartSeries = responseData.series;
      this.chartXAxis = responseData.x_axis;

      this.$refs.graphChart.setChartOptions(this.chartXAxis);
    },
    async fetchPercents() {
      let selectedUsersIds = this.getSelectedConsultantsIds();

      let response = await this.$axios({
        url: "/earnings/percent",
        params: {
          consultants: selectedUsersIds,
          from: this.startMonth,
          to: this.endMonth,
        },
      });

      let responseData = this.$axios.getResponseData(response);

      this.pieSeries = responseData.series;
      this.pieLabels = responseData.labels;

      this.$refs.graphPie.setChartOptions(this.pieLabels);
    },
    getSelectedConsultantsIds() {
      return this.selectedUsers.map((user) => user.co_usuario);
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
    });
  },
};
</script>
