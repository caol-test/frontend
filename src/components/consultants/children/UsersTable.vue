<template>
  <v-row>
    <v-col class="offset-1 col-10">
      <v-data-table
        v-model="selected"
        item-key="co_usuario"
        show-select
        class="elevation-1"
        loading-text="Loading... please wait"
        :loading="loadingConsultants"
        :headers="headers"
        :items="consultants"
        @input="$root.$emit('select-users', selected)"
      >
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      loadingConsultants: true,
      selected: [],
      headers: [
        { text: "Full name", value: "no_usuario", sortable: false },
        { text: "Address", value: "ds_endereco" },
        { text: "Email", value: "no_email" },
        { text: "Phone number", value: "nu_telefone" },
      ],
      consultants: [],
    };
  },
  methods: {
    async getJwt() {
      let response = await this.$axios({
        url: `${process.env.VUE_APP_BASE_URL}/jwt`,
      });
      let responseData = this.$axios.getResponseData(response);

      this.$store.commit("setJwt", responseData.jwt);
    },
    async loadConsultants() {
      await this.getJwt();

      this.$axios({ url: `${process.env.VUE_APP_BASE_URL}/users/consultants` })
        .then((response) => {
          this.loadingConsultants = false;
          this.consultants = this.$axios.getResponseData(response);
        })
        .catch(() => {
          this.loadingConsultants = false;
          this.consultants = [];
        });
    },
  },
  mounted() {
    this.loadConsultants();
  },
};
</script>
