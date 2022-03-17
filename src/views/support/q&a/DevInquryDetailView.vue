<template>
<!--  컨텐츠 영역 -->
  <div id="contentWrap">

    <div id="topVisualWrap">

      <div class="topVisual">
        <p class="tit01">[JUNY COMPANY] 개발자 업무 협업 서비스 위한</p>
        <p class="tit02">인공지능 클라우드 주니하랑 플랫폼 <span></span></p>
      </div> <!-- div class="topVisual" 끝 -->

    </div> <!-- div id="contentWrap" 끝 -->

  <!-- 컨텐츠 영역 -->
    <div id="Content">

      <h2>
        <span>개발지원</span>
        <span @click="goList()"><b>Q&A</b></span>
      </h2>

      <div class="ListTbWrap mt-20">
        <table class="tView">
          <caption>Q&A 상세보기</caption>
          <colgroup>
            <col>
            <col style="width: 18%">
            <col style="width: 15%">
          </colgroup>

          <thead>

          <tr>
            <th class="alignL bolder">{{devInquryData.inqrySj}}</th>
            <th>
              <span>
                등록일&nbsp;&nbsp;
                <b>{{devInquryData.creatDt}}</b>
              </span>
            </th>
            <th>
              <span>
                첨부파일&nbsp;&nbsp;
                <a href="#" class="link_down2" v-show="devInquryData.fileSn"></a>
                <span v-show="!devInquryData.fileSn">-</span>
              </span>
            </th>
          </tr>

          </thead>
        </table>

        <div class="view_wrap">
          {{devInquryData.inqryCn}}
        </div>  <!-- div class="view_wrap" 끝 -->

        <template v-if="devInquryData.answerAt !== 'N'">
          <div class="view_wrap" style="border-top: 1px solid black;">

            <div style="margin-top:-30px; margin-left: -5px; front-weight: bold;">
              [ 답변 내용 ]
            </div> <!-- div style="margin-top:-30px; margin-left: -5px; front-weight: bold;" 끝 -->

            <br>

            {{devInquryData.answerCn}}
          </div>  <!-- class="view_wrap" style="border-top: 1px solid black;" 끝 -->
        </template> <!-- template v-if="devInquryData.answerAt !== 'N'" 끝 -->

        <table class="tView2 mt-40">
          <colgroup>
            <col style="width: 12%">
            <col>
          </colgroup>

          <tbody>
          <tr>
            <th>이전 글</th>

            <td>
              <template v-if="devInquryData.beforeInqrySn !== -1">
                <router-link to="/support/devInquryDetailView" @click="goDetailView(devInquryData.beforeInqrySn)">{{devInquryData.beforeInqrySj}}</router-link>
              </template> <!-- template v-if="devInquryData.beforeInqrySn !== -1" 끝 -->

              <template v-else>
                이전 글이 없습니다.
              </template> <!-- template v-else 끝 -->
            </td>
          </tr>

          <tr>
            <th>다음 글</th>
            <td>
              <template v-if="devInquryData.nextInqrySn !== -1">
                <router-link to="/support/devInquryDetailView" @click="goDetailView(devInquryData.nextInqrySn)">{{devInquryData.nextInqrySj}}</router-link>
              </template> <!-- template v-if="devInquryData.nextInqurySn !== -1" 끝 -->

              <template v-else>
                다음 글이 없습니다.
              </template> <!-- template v-else 끝 -->
            </td>
          </tr>
          </tbody>
        </table>
      </div> <!-- div class="ListTbWrap mt-20" 끝 -->

      <div class="btn_wrap">
        <a href="#" class="btn04" @click="goList()">목 록</a>

        <template v-if="devInquryData.answerAt !== 'Y'">
          <a href="#" class="btn03" @click="goRegist(devInquryData.inqrySn)">수 정</a>
        </template> <!-- template v-if="devInquryData.answerAt != 'Y'" 끝 -->

        <a href="#" class="btn03" @click="this.deletePopup = true">삭 제</a>
      </div> <!-- div class="btn_wrap" 끝 -->

    </div>  <!-- div id="Content" 끝 -->

  </div> <!-- div id="topVisualWrap" 끝 -->

  <!-- 글 삭제 관련 Pop Up -->
  <div class="card3_popup" style="display: block; top: 160px;" v-show="this.deletePopup">

    <div class="popup_body">

      <!-- Message -->
      <div class="card_mody mt-20">
        <p class="c_tit">해당 게시글을 삭제 하시겠습니까?</p>
      </div>  <!-- div class="card_mody mt-20" 끝 -->

    </div>  <!-- div class="popup_body" 끝 -->

    <div class="btn_wrap_pop">
      <button type="button" class="btn_m01_50" @click="doDelete()">확인</button>

      <button type="button" class="btn_m02_50" @click="this.deletePopup = false">취소</button>
    </div>  <!-- div class="btn_wrap_pop" 끝 -->

    <div class="popup_close" @click="this.deletePopup = false">닫기</div>

  </div> <!-- div class="card3_popup" style="display: block; top: 160px;" v-show="this.deletePopup" 끝 -->
</template>

<script>
import {devInquryDetail, devInquryDelete } from "@/api/devInquryApi";


export default {
  data() {
    return {
      searchParam: {
        inqrySn: this.$route.query.inqrySn
      }, // searchParams 끝

      devInquryData : {},
      deletePopup : false
    }
  }, // data() 끝

  created() {
    this.getDetailView();
  }, // created() 끝

  methods: {
    getDetailView() {
      devInquryDetail({
        inqrySn: this.searchParam.inqrySn
      }).then(response => {
        console.log("Server에서 응답으로 들어온 Data의 상세 보기 정보를 출력 합니다(response.data.devInquryView) : ", response.data);

        this.devInquryData = response.data.devInquryVO;

        console.log("응답으로 들어온 모든 Data 내용 : " + this.devInquryData)
      }).catch(error => {
        console.log("Q&A 게시판 상세보기 axios 처리 중 문제가 발생 하였습니다.", error)
        this.goList();
      });
    }, // getDetailView() 끝

    goList() {
      this.$router.push({
        path: "/support/devInquryList",
      });
    }, // goList() 끝

    goDetailView(inqrySn) {
      this.$router.push({
        path: "/support/devInquryDetailView",
        query: {
          inqrySn : inqrySn,
        } // query 끝
      });
    }, // goDetailView() 끝

    goRegist(inqrySn) {
      this.$router.push({
        path: "/support/devInquryRegist",
        query: {
          status : 'U',
          inqrySn : inqrySn,
        } // query 끝
      });
    }, // goRegist(inqurySn) 끝

    doDelete() {
      devInquryDelete({
        inqrySn : this.searchParam.inqrySn
      }).then(response => {
        console.log("해당 하는 게시물이 삭제 됩니다! 해당 게시글 정보를 출력 합니다! ", response.data);
        // 삭제가 완료되면 글 목록으로 보낸다.
        this.goList();
      }).catch(error => {
        console.log("게시글을 삭제 하던 도 중 문제가 발생 하였습니다!" + error);

        alert('Q&A 게시글 삭제에 실패하였습니다! \r\n 관리자에게 문의 하여 주시기 바랍니다.')
      });
    } // doDelete() 끝
  }, // methods 끝
} // export default 끝
</script>

<style lang="">

</style>