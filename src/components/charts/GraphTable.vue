<template>
  <v-row>
    <v-col class="offset-1 col-10">
      <v-data-table
        dense
        class="elevation-1"
        group-by="full_name"
        show-group-by
        :headers="headers"
        :items="items"
      >
        <template v-slot:item.month_year="{ item }">
          <span
            :class="item.month_year === 'BALANCE' ? 'font-weight-bold' : ''"
            >{{ item.month_year }}</span
          >
        </template>

        <template v-slot:item.net_earnings="{ item }">
          <span :class="getTextColor(item.net_earnings)">{{
            item.net_earnings | BRL
          }}</span>
        </template>

        <template v-slot:item.fixed_cost="{ item }">
          <span :class="getTextColor(item.fixed_cost)">{{
            item.fixed_cost | BRL
          }}</span>
        </template>

        <template v-slot:item.commission="{ item }">
          <span :class="getTextColor(item.commission)">{{
            item.commission | BRL
          }}</span>
        </template>

        <template v-slot:item.profit="{ item }">
          <span :class="getTextColor(item.profit)">{{
            item.profit | BRL
          }}</span>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Consultant", value: "full_name", sortable: false },
        { text: "Period", value: "month_year" },
        { text: "Earning", value: "net_earnings" },
        { text: "Fixed cost", value: "fixed_cost" },
        { text: "Commission", value: "commission" },
        { text: "Profit", value: "profit" },
      ],
    };
  },
  props: ["items"],
  methods: {
    getTextColor(value) {
      if (value === 0) {
        return "yellow--text";
      }

      if (value > 0) {
        return "green--text";
      }

      return "red--text";
    },
  },
  filters: {
    BRL(value) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    },
  },
};
</script>
