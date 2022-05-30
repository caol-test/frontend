<template>
  <div id="chart">
    <apex-chart
      type="line"
      height="350"
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Chart",

  data: () => ({
    chartOptions: {
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: "Consultant Performance",
        align: "left",
        offsetX: 110,
      },
      xaxis: {
        categories: [],
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft",
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  }),
  props: ["chartSeries"],
  components: {
    ApexChart: VueApexCharts,
  },
  methods: {
    setChartOptions(xAxis) {
      let newOptions = JSON.parse(JSON.stringify(this.chartOptions));
      newOptions.xaxis.categories = xAxis;

      this.chartOptions = newOptions;
    },
  },
};
</script>
