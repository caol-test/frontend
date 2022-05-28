<template>
  <div class="home">
    <consultants-component />
  </div>
</template>

<script>
import ConsultantsComponent from "@/components/Consultants";

export default {
  name: "Home",
  components: {
    ConsultantsComponent,
  },
};
</script>
