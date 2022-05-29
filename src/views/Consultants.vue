<template>
  <div class="home">
    <consultants-component />
  </div>
</template>

<script>
import ConsultantsComponent from "@/components/consultants/Home";

export default {
  name: "Home",
  components: {
    ConsultantsComponent,
  },
};
</script>
