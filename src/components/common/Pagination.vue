<!-- Paging 처리 관련 Component -->
<template>
  <div class="tPages">

    <ul>
      <li class="prev02">
        <a href="javascript:" @click="firstPage">
          <img :src="require(`@/assets/images/btn_first.png`)">
        </a>
      </li>

      <li class="prev">
        <a href="javascript:" @click="prevPage">
          <img :src="require(`@/assets/images/btn_prev.png`)">
        </a>
      </li>

      <li v-for="i in range(startPage, endPage)" v-bind:key="i" :class="classActive(i)">
        <a href="javascript:" @click="setPage(i)">
          <template v-if="i !== nowPage" style="cursor: pointer;">{{ i }}</template>

          <template v-else-if="i === nowPage">{{ i }}</template>
        </a>
      </li>

      <li class="next">
        <a href="javascript:" @click="nextPage">
          <img :src="require(`@/assets/images/btn_next.png`)">
        </a>
      </li>

      <li class="next02">
        <a href="javascript:" @click="lastPage">
          <img :src="require(`@/assets/images/btn_last.png`)">
        </a>
      </li>
    </ul>

  </div>  <!-- div class="tPages" 끝 -->
</template>

<script>
import _ from "lodash";

export default {
  name: "Pagination",
  props: {
    totalCount: {
      type: Number,
      default: 0
    }, // totalCount 끝
    rowCount: {
      type: Number,
      default: 10
    }, // rowCount 끝
    pageLimit: {
      type: Number,
      default: 10
    }, // pageLimit 끝
    currPage: {
      type: Number,
      default: 1
    }, // currPage 끝
  }, // props 끝

  data() {
    return {
      startPage: 1,
      nowPage: 1,
      nowPageBlock: 1,
      pervRowCount: 0
    };
  }, // data() 끝

  watch: {
    currPage: "currPageSet"
  }, // watch 끝

  computed: {
    totalPage() {  // 한 Page 당 건 수 변경 시 1 Page로 설정
      if (this.rowCount !== this.prevRowCount) {
        this.prevRowCount = this.rowCount;

        // 1Page로 변경
        this.setFirstPage();
      } // if (this.rowCount != this.prevRowCount) 끝

      console.log("페이징 처리 부에서 총 페이지 수 : " + this.totalPage + " 를 알려 드립니다!");

      return _.ceil(this.totalCount / this.rowCount);
    }, // totalPage() 끝

    endPage() { // 한 Page 당 건 수 변경 시 1 Page로 설정
      if (this.rowCount !== this.prevRowCount) {
        this.prevRowCount = this.rowCount;
        // 1 Page로 설정
        this.setFirstPage();
      } // if (this.rowCount !== this.prevRowCount) 끝

      const check = this.startPage + this.pageLimit - 1;

      return check <= this.totalPage ? check : this.totalPage;

    } // endPage() 끝
  }, // computed 끝

  methods: {
    range(start, end) {
      return _.range(start, end + 1);
    }, // range(start, end) 끝

    setPage(page) {
      this.nowPage = page;

      this.changePage();
    }, // setPage(page) 끝

    firstPage() {
      // 1 Page로 설정
      this.setFirstPage();

      this.changePage();
    }, // firstPage() 끝

    prevPage() {
      if (this.nowPage > 1) {
        this.nowPage --;
      } // if (this.nowPage > 1) 끝

      if (this.nowPage < this.startPage) {
        this.nowPageBlock --;

        this.startPage = (this.nowPageBlock - 1) * this.pageLimit + 1;
      } // if (this.nowPage < this.startPage) 끝

      this.changePage();

    }, // prevPage() 끝

    nextPage() {
      console.log("페이징 처리 부에서 현재 Page : " + this.nowPage + " 를 알려 드립니다!");
      console.log("페이징 처리 부에서 총 페이지 수 : " + this.totalPage + " 를 알려 드립니다!");
      console.log("페이징 처리 부에서 마지막 페이지 : " + this.endPage + " 를 알려 드립니다!");

      if (this.nowPage < this.totalPage) {
        this.nowPage ++;
      } // if (this.nowPage < this.totalPage) 끝

      if (this.nowPage > this.endPage) {
        this.nowPageBlock ++;

        this.startPage = this.nowPage;
      } // if (this.nowPage > this.endPage) 끝

      this.changePage();

    }, // nextPage() 끝

    lastPage() {
      this.nowPage = this.totalPage;
      this.nowPageBlock = _.ceil(this.totalPage / this.pageLimit);
      this.startPage = (this.nowPageBlock - 1) * this.pageLimit + 1;

      this.changePage();
    }, // lastPage() 끝

    changePage() {
      this.$emit("change-page", this.nowPage);
    }, // changePage() 끝

    classActive(i) {
      if (i === this.nowPage) {
        return "active";
      } // if (i === this.nowPage) 끝
    }, // classActive(i) 끝

    setFirstPage() {  // 1 Page로 설정
      this.nowPage = 1;
      this.nowPageBlock = 1;
      this.startPage = 1;
    }, // setFirstPage() 끝

    currPageSet() {
      this.nowPage = this.currPage;

      if (this.nowPage === 1) {
        this.startPage = 1;
      } // if (this.nowPage === 1) 끝
    } // currPageSet() 끝
  } // methods 끝
}; // export default 끝
</script>