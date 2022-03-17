<template>
  <select v-model="dRowCount" @click="changeRowCount">
    <option v-for="item in rowCountList" :key="item" :value="item"> {{ item }}개씩 보기 </option>
  </select>
</template>

<script>
export default {
  name: "CommRowCount",
  props: {
    rowCount: {
      type: Number,
      default: 20
    },

    customRowCountList: {
      type: Array,
      default: undefined
    } // customRowCountList 끝
  }, // props 끝

  data() {
    return {
      dRowCount: this.rowCount,
      rowCountList: [10, 20, 50, 100]
    };
  }, // data() 끝

  methods: {
    changeRowCount() {
      this.$emit("change-rowcount", this.dRowCount);
    } // changeRowCount() 끝
  } // methods 끝
};
</script>