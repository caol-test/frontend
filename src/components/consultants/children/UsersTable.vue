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
      let response = await this.$axios({ url: "jwt" });
      let responseData = this.getResponseData(response);

      this.$store.commit("setJwt", responseData.jwt);
    },
    async loadConsultants() {
      await this.getJwt();

      this.$axios({ url: "users/consultants" })
        .then((response) => {
          this.loadingConsultants = false;
          this.consultants = this.getResponseData(response);
        })
        .catch((error) => {
          this.loadingConsultants = false;
          this.consultants = [];

          console.log(error);
        });
    },
    getResponseData(response) {
      let { data: responseData } = response;
      return responseData.data;
    },
  },
  mounted() {
    this.loadConsultants();
  },
};
</script>
