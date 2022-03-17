<template>

  <div id="Wrap">
  <!-- 헤더 관리 영역 -->
    <TheHeaders />

  <!-- 컨텐츠 관리 영역 -->
    <router-view :key="$route.fullPath"/>

  <!-- Footer 관리 영역 -->
    <TheFooters />
  </div>

</template>

<script>
import TheHeaders from "@/views/include/myHead.vue";
import TheFooters from "@/views/include/myFooter.vue";

export default {
  components: {
    TheHeaders,
    TheFooters
  },

  data() {
    return {};
  },

  methods: {

  }
};
</script>

<style>
@import url("../src/assets/css/style.css");
</style>
