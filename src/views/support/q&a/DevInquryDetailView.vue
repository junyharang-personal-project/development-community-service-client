<template>
<!--  컨텐츠 영역 -->
  <div id="contentWrap">

    <div id="topVisualWrap">

      <div class="topVisual">
        <p class="tit01">[JUNY COMPANY] 개발자 업무 협업 서비스 위한</p>
        <p class="tit02">주니하랑 플랫폼 <span></span></p>
      </div> <!-- div class="topVisual" 끝 -->

    </div> <!-- div id="topVisualWrap" 끝 -->

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
          <div class="btn_wrap">
            <button class="btn04" @click="this.devInquryData.answerAt = 'N'">답글 수정</button>

            <button class="btn03" @click="this.deleteReplyPopup = true">답글 삭제</button>
          </div>
        </template> <!-- template v-if="devInquryData.answerAt !== 'N'" 끝 -->

        <template v-else>
          <table class="tList">
            <caption>답글</caption>
            <colgroup>
              <col style="width: 15%">
            </colgroup>

            <tbody>
              <tr>
                <td class="PalignL">답글
                </td>

                <td class="PalignL">
                  <textarea id="" type="text" class="w100p" rows="5" placeholder="귀하의 지식을 전수 해 주세요!" v-model="devInquryData.answerCn" ref="answerCn"></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="btn_wrap">
            <button class="btn04" @click="doRegistReply(inqrySn)">답글 등록</button>
          </div>
        </template>

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
                <router-link to="/support/devInquryDetailView" @click="goDetailView(devInquryData.beforeInqrySn)">
                  {{devInquryData.beforeInqrySj}}
                </router-link>
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
                <router-link to="/support/devInquryDetailView"
                             @click="goDetailView(devInquryData.nextInqrySn)">
                  {{devInquryData.nextInqrySj}}
                </router-link>
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

  <!-- 답글 삭제 관련 Pop up -->
  <div class="card3_popup" style="display: block; top: 160px;" v-show="this.deleteReplyPopup">

      <div class="popup_body">

        <!-- Message -->
        <div class="card_mody mt-20">
          <p class="c_tit">답글을 정말 삭제 하시겠습니까?</p>
        </div>  <!-- div class="card_mody mt-20" 끝 -->
      </div>  <!-- div class="popup_body" 끝 -->

    <div class="btn_wrap_pop">
      <button type="button" class="btn_m01_50" @click="doDeleteReply()">확인</button>

      <button type="button" class="btn_m02_50" @click="this.deleteReplyPopup = false">취소</button>
    </div>  <!-- div class="btn_wrap_pop" 끝 -->
  </div>  <!-- div class="card3_popup" style="display: block; top: 160px;" v-show="this.deleteReplyPopup" 끝 -->

  <!-- NULL값 Check Validation Pop up -->
  <div class="card3_popup" style="display: block; top:160px;" v-show="this.validationPopupShow">

    <div class="popup_body">

      <div class="card_mody mt-20">
        <p class="c_tit">답변을 등록하시려면 내용을 입력 해 주세요!</p>
      </div> <!-- div class="card_mody mt-20" 끝 -->

    </div>  <!-- div class="popup_body" 끝 -->

    <div class="btn_wrap_pop">
      <button class="btn_m01 blue" @click="this.validationPopupShow = false">확인</button>
    </div>  <!-- div class="btn_wrap_pop" 끝 -->

  </div> <!-- div class="card3_popup" style="display: block; top:160px;" v-show="this.finishPopupShow" 끝 -->

  <!-- Pop up 끝 -->
</template>

<script>
import {devInquryDetail, devInquryDelete } from "@/api/devInquryApi";
import {devInquryReplyRegist, devInquryReplyDelete, devInquryDetailViewWithReply} from "@/api/devInquryReplyApi";


export default {
  data() {
    return {
      searchParam: {
        inqrySn: this.$route.query.inqrySn
      }, // searchParams 끝

      devInquryData : {},
      deletePopup : false,
      deleteReplyPopup : false,
      validationPopupShow : false,
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

    getDetailViewWithReply() {
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

    doRegistReply() {

      const pattern = /^\s+|\s+$/g;  // 공백(Space)에 해당하는 정규 표현식

      console.log("답글 등록(doRegist\(\)) Method가 동작하였습니다! DevInquryDetailView.vue의 Member 변수 answerCn 값 : " + this.devInquryData.answerCn);

      // 필수 입력 항목 입력 여부 검사(valication) - 답글 내용
      if (this.devInquryData.answerCn === undefined || this.devInquryData.answerCn.replace(pattern, '') === "" || this.devInquryData.answerCn === null) {
        console.log("답변을 등록하고자 하지만, 답변 내용이 작성되지 않았습니다!")

        this.validationPopupShow = true;
        this.$refs.answerCn.focus();

        return false;
      } // if (this.devInquryData.answerCn === undefined || this.devInquryData.answerCn === '')문 끝

      // 답글 등록을 위해 API 호출을 통해 BackEnd에 내용 전달
      devInquryReplyRegist(this.devInquryData).then(response => {
        console.log("답글 등록을 위해 Back End에게 내용을 요청하고, 응답 받은 값 : " + response.data.inqrySn);

        alert("답글 등록이 완료 되었습니다!");

        // 작성된 답글 상세 조회로 이동 시키기 위해 해당 Method 호출
        this.getDetailViewWithReply();
      }).catch(error => {

        console.log("답글 등록을 처리하는 중에 문제가 발생하여 catch문이 동작 하였습니다!");

        alert("답글 등록이 실패 되었습니다!" + error);

        this.goDetailView();
      })
    }, // doRegistReply() 끝

    doDelete() {
      devInquryDelete({
        inqrySn : this.searchParam.inqrySn
      }).then(response => {
        console.log("해당 하는 게시물이 삭제 되었습니다! 삭제 된 게시글 정보를 출력 합니다! ", response.data);
        // 삭제가 완료되면 글 목록으로 보낸다.
        this.goList();
      }).catch(error => {
        console.log("게시글을 삭제 하던 도 중 문제가 발생 하였습니다!" + error);

        alert('Q&A 게시글 삭제에 실패하였습니다! \r\n 관리자에게 문의 하여 주시기 바랍니다.')
      });
    }, // doDelete() 끝

    doDeleteReply() {
      devInquryReplyDelete(
        this.searchParam.inqrySn
      ).then(response => {
        console.log("해당 하는 게시물의 답변이 삭제 됩니다! 해당 답변 정보를 출력 합니다! ", response.data);

        if (response.data.code === 200) {

          this.deleteReplyPopup = false;
          this.getDetailViewWithReply();
        }

      }).catch(error => {
        console.log("답글을 삭제 하던 도 중 문제가 발생 하였습니다!" + error);

        alert('Q&A 게시글 답글 삭제에 실패하였습니다! \r\n 관리자에게 문의 하여 주시기 바랍니다.')
      });
    } // doDeleteReply() 끝
  }, // methods 끝
} // export default 끝
</script>

<style lang="">

</style>