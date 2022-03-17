<template>
  <!-- 컨텐츠 영역 -->
  <div id="contentWrap">

    <div id="topVisualWrap">

      <div class="topVisual">
        <p class="tit01">[JUNY COMPANY] 개발자 업무 협업 서비스 위한</p>
        <p class="tit02">인공지능 클라우드 주니하랑 플랫폼 <span></span></p>
      </div> <!-- class="topVisual" 끝 -->

    </div> <!-- id="topVisualWrap" 끝 -->

    <!-- 컨텐츠 영역 -->
    <div id="Content">
      <h2>
        <span>개발지원</span>
        <span><b>Q&A</b></span>
      </h2>

      <div class="topSearch">
        <select name="" class="tops_sel" v-model="searchParams.srchType">
          <option value="1">제목</option>
          <option value="2">내용</option>
          <option value="3">작성자</option>
        </select>

        <input type="text" name="" class="tops_inp" placeholder="검색어를 입력 해 주세요!" v-model="searchParams.srcWord" @keyup.enter="searchList()">

        <button type="button" onclick="" class="topBtnSearch" @click="searchList()">검색</button>
      </div> <!-- class="topSearch" -->

      <div class="ListTbWrap mt-20">

        <div class="tbHead">

          <div class="total">
            총<span>{{total}}</span>건 게시글 존재
          </div> <!-- class="total" 끝 -->

          <div class="tbHeadR">
            <button type="button" class="btn01" @click="goRegist()">글쓰기</button>
          </div> <!-- class="tbHeadR" 끝 -->
        </div>  <!-- class="tbHead" 끝 -->

        <table class="tList">
          <caption>개발자 가이드 목록</caption>
          <colgroup>
            <col style="width: 8%">
            <col>
            <col style="width: 10%">
            <col style="width: 15%">
            <col style="width: 10%">
          </colgroup>

          <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>등록자</th>
            <th>등록일</th>
            <th>답변 여부</th>
          </tr>
          </thead>

          <tbody>
          <template v-if="this.total > 0">
            <tr v-for="(list) in devInquryList" :key="list.inqrySn">
              <td>{{list.inqryIndex}}</td>
              <td class="alignL">
                <a href="#" :class="{'ellipsis' : list.secretAt==='N', 'ellipsis lock' : list.secretAt === 'Y'}" @click="goDetailView(list.inqrySn)">{{list.inqrySj}}</a>
              </td>
              <td>{{list.userId}}</td>
              <td>{{list.creatDt}}</td>
              <td>
                <label class="lb01" v-if="list.answerAt==='N'">대기</label>

                <label class="lb01" v-else-if="list.answerAt!=='N'">완료</label>
              </td>
            </tr>
          </template>

          <template v-else>

            <tr>
              <td colspan="5" class="noData">데이터가 존재하지 않습니다.</td>
            </tr>

          </template>
          </tbody>
        </table>

        <!-- 페지징 처리 부 -->
        <pagination
          v-show="total > 0"
          ref="pagination"
          :total-count="total"
          :row-count="this.searchParams.perPageNum"
          :curr-page="this.searchParams.page"
          @change-page="changePage"
          />

        <!-- 인가 관련 Pop up -->
        <div class="card3_popup" style="display: block; top: 160px;" v-show="this.viewDeletePopup">

          <div class="popup_body">

            <!-- Message -->
            <div class="card_mody mt-20">
              <p class="c_tit">작성자만 열람 가능 합니다!</p>
            </div> <!-- class="card_mody mt-20" 끝 -->

          </div> <!-- class="popup_body" 끝 -->

          <div class="popup_close" @click="this.viewDeletePopup = false">닫기</div>

        </div>  <!-- class="card3_popup" style="display: block; top: 160px;" v-show="this.viewDeletePopup" 끝 -->
        <!-- 인가 관련 Pop up End -->

        <!-- Login 관련 Pop up -->
        <div class="card3_popup" style="display: block; top:160px;" v-show="this.loginDeletePopup">

          <div class="popup_body">

            <!-- Message -->
            <div class="card_mody mt-20">
              <p class="c_tit">로그인 후 이용 가능 합니다!</p>
            </div>

          </div>  <!-- class="popup_body" 끝 -->

          <div class="btn_wrap_pop">
            <button class="btn_m01_50" @click="this.loginDeletePopup = false">확인</button>

            <button class="btn_m02_50" @click="this.loginDeletePopup = false">취소</button>
          </div>  <!-- class="btn_wrap_pop" 끝 -->

          <div class="popup_close" @click="this.loginDeletePopup = false">닫기</div>

        </div> <!-- class="card3_popup" style="display: block; top:160px;" v-show="this.loginDeletePopup" 끝 -->
        <!-- Login 관련 Pop up End -->


      </div> <!-- class="ListTbWrap mt-20" 끝 -->
    </div> <!-- id="Content" 끝 -->
  </div> <!-- id="contentWrap" 끝 -->
</template>

<script>
import {devInquryList} from "@/api/devInquryApi";

export default {
  data() {
    return {
      searchParams : {
        srchWord : "",
        srchType : "1",
        page: 1,
        perPageNum: 10
      }, // serchParams 끝

      devInquryList : [],
      total : 0,
      loginDeletePopup : false, viewDeletePopup : false
    } // return 끝
  }, // data() 끝

  created() {
    this.handleFilter();
  }, // created() 끝

  methods: {
    searchList() {
      devInquryList(this.searchParams)
      .then(response => {
        console.log("Q&A 게시판 목록 조회 값(response.data.devInquryList) : ", response.data)

        this.devInquryList = response.data.devInquryList;

        this.total = response.data.devInquryListCnt;
      });
    }, // searchList() 끝

    handleFilter() {
      this.searchParams.page = 1;
      this.searchList();    // 목록 조회 Method 호출
    }, // handleFilter() 끝

    /* 페이지당 갯수 변경 */
    changeRowCount(perPageNum) {
      this.searchParams.perPageNum = perPageNum;
      this.changePage(1);
    },
    changePage(page) {
      this.searchParams.page = page;
      this.searchList(); // 목록 조회
    },

    goDetailView(inqrySn) {
      this.$router.push({
        path : "/support/devInquryDetailView",
        query : {
          inqrySn : inqrySn,
        } // query 끝
      });
    }, // goDetailView(inqrySn) 끝

    goRegist() {
      this.$router.push({
        path: "/support/devInquryRegist",
        query : {
          status : 'C',
          noticeSn : 0
        }
      });
    }, // goRegist() 끝
  } // methods 끝
}
</script>

<style lang="">

</style>