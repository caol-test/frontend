<template>
  <v-row class="text-center">
    <v-col cols="12" offset-xs="1" offset-sm="2" offset-md="3">
      <div id="pie">
        <apex-chart
          type="pie"
          :options="chartOptions"
          :series="chartSeries"
        ></apex-chart>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "GraphPie",

  data: () => ({
    series: [],
    chartOptions: {
      legend: {
        position: "bottom",
      },
      labels: [],
    },
  }),
  props: ["chartSeries"],
  components: {
    ApexChart: VueApexCharts,
  },
  methods: {
    setChartOptions(labels) {
      let newOptions = JSON.parse(JSON.stringify(this.chartOptions));
      newOptions.labels = labels;

      this.chartOptions = newOptions;
    },
  },
};
</script>

<style scoped>
#pie {
  max-height: 500px !important;
  max-width: 500px !important;
}
/*@media (min-device-width: 240px) and (max-device-width: 480px) {
  #pie {
    min-height: 300px;
    width: auto;
  }
}

@media (min-device-width: 481px) and (max-device-width: 800px) {
  #pie {
    min-height: 300px;
    width: auto;
  }
}

@media (min-device-width: 801px) {
  #pie {
    width: 40%;
  }
}*/
</style>
