<template>
  <MyDashboard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyDashboard from "@/components/DashboardView.vue"; // @ is an alias to /src

export default defineComponent({
  name: "DashboardView",
  components: {
    MyDashboard,
  },
});
</script>
