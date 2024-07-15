<template>
  <div class="wrapper">
    <SidebarView />

    <div class="main-panel">
      <HeaderView />

      <div class="container">
        <div class="page-inner">
          <router-view />
        </div>
      </div>

      <FooterView />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import SidebarView from "@/views/layout/SidebarView.vue";
import HeaderView from "@/views/layout/HeaderView.vue";
import FooterView from "@/views/layout/FooterView.vue";

export default {
  name: "HelloWorld",
  components: {
    SidebarView,
    HeaderView,
    FooterView,
  },
  props: {
    msg: String,
  },
  mounted() {
    $(document).ready(function () {
      // $("body").removeClass("bg-default");
    });
  },
};
</script>
