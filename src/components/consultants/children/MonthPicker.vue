<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        prepend-icon="mdi-calendar-month"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      type="month"
      min="2007-01"
      max="2007-12"
      show-current="2007-01"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="emitSelectedDateEvent()"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "MonthPicker",

  data: () => ({
    menu: false,
    date: null,
  }),
  props: ["label", "dateType"],
  methods: {
    emitSelectedDateEvent() {
      this.$refs.menu.save(this.date);
      this.$root.$emit(this.dateType, this.date);
      this.menu = false;
    },
  },
};
</script>
