<template>
  <MyList msg="DataTables.Net" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyList from "@/components/MyList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "ListView",
  components: {
    MyList,
  },
});
</script>
