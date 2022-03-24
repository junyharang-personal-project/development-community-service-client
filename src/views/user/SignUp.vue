<template>
  <!-- 컨텐츠 영역 -->
  <div id="contentWrap">

    <div id="topVisualWrap">

      <div class="topVisual">
        <p class="tit01">[JUNY COMPANY] 개발자 업무 협업 서비스 위한</p>

        <p class="tit02">주니하랑 플랫폼 <span></span></p>
      </div>  <!-- div class="topVisual" 끝 -->

    </div>  <!-- div id="topVisualWrap" 끝 -->

    <!-- 컨텐츠 영역 -->
    <div id="Content">
      <h2>
        <span>이용신청</span>
        <span><b>회원 가입</b></span>
      </h2>

      <div class="ListTbWrap mt-20">
        <table class="tList">
          <caption>회원 가입 Form</caption>

          <colgroup>
            <col style="width: 15%">
            <col>
          </colgroup>

          <tbody>
          <tr>
            <td class="PalignL">ID
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="text" id="inp_id" v-model="inputParam.username" class="regi" placeholder="사용하실 ID를 입력 해 주세요!" ref="userId">

              <button type="button" @click="idCheck" class="btn02">중복 확인</button>
            </td>
          </tr>

          <tr>
            <td class="PalignL">비밀번호
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="password" id="inp_pwd" v-model="inputParam.userPassword" class="pwd">

              <p class="font_s t_red">[영문자(소, 대문자) + 숫자 + 특수문자]로 조합된 8글자 이상의 비밀번호를 입력 해 주세요! 연속된 문자는 사용할 수 없습니다!</p>
            </td>
          </tr>

          <tr>
            <td class="PalignL">비밀번호 확인
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="password" id="inp_pwd_check" v-model="userPasswordCheck" @blur="pwdCheck">

              <span class="font_s t_blue" v-show="equalShow">정상 입니다!</span>

              <span class="font_s t_red" v-show="notEqualShow">비밀번호를 확인 해 주세요!</span>
            </td>
          </tr>

          <tr>
            <td class="PalignL">별명
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="text" id="inp_nickname" class="regi" v-model="inputParam.nickname">

              <button type="button" @click="nickNameCheck" class="btn02">중복 확인</button>
            </td>
          </tr>

          <tr>
            <td class="PalignL">E-Mail
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="email" id="inp_email" class="regi" v-model="inputParam.emailAddress">

              <span class="font_s t_red">E-mail은 필수 입력 사항 입니다!</span>

              <button type="button" @click="emailCheck" class="btn02">중복 확인</button>
            </td>
          </tr>

          <tr>
            <td class="PalignL">핸드폰 번호
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="text" id="inp_phone1" class="phone" v-model="mobile1">-

              <input type="text" id="inp_phone2" class="phone" v-model="mobile2">-

              <input type="text" id="inp_phone3" class="phone" v-model="mobile3">

              <button type="button" @click="phoneNumberCheck" class="btn02">중복 확인</button>
            </td>
          </tr>

          <tr>
            <td class="PalignL">회원 구분
              <span class="t_red">* 필수 입력</span>
            </td>

            <td class="PalignL">
              <input type="radio" checked name="radio1">

              <label>
                <span></span>일반 회원
              </label>

              <input type="radio" checked name="radio1">

              <label>
                <span></span>개발자
              </label>

              <input type="radio" checked name="radio1">

              <label>
                <span></span>관리자
              </label>
            </td>
          </tr>

          <tr>
            <td class="PalignL">소속기관</td>

            <td class="PalignL">
              <select class="tops_sel">
                <option>선택</option>
                <option></option>
              </select>
            </td>
          </tr>
          </tbody>
        </table>
      </div>  <!-- div class="ListTbWrap mt-20" 끝 -->

      <div class="btn_wrap">
        <a href="#" class="btn03">취 소</a>

        <a href="#" class="btn04" @click="goSignup">회원 가입</a>
      </div>  <!-- div class="btn_wrap" 끝 -->

      <!-- Popup ( ID Check ) -->
      <div class="card3_popup" style="top: 160px;" v-show="idCheckShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">사용 가능한 ID 입니다!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->
      <!-- Popup ( ID Check ) 끝-->

      <!-- Popup ( ID 중복 상황 ) -->
      <div class="card3_popup" style="top:160px;" v-show="idEqualShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">이미 존재하는 ID 입니다!</p>
          </div> <!-- div class="card_mody mt-20" 끝 -->
        </div> <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue">확 인</button>

        <div class="popup_close">닫 기</div>

      <!-- Popup ( ID 중복 상황 ) 끝 -->

        <!-- Popup Validation Check -->
        <div class="card3_popup" style="top:160px;" v-show="validShow">

          <div class="popup_body">

            <div class="card_mody mt-20">
              <p class="c_tit">필수 항목을 입력 해 주세요!</p>
            </div>  <!-- div class="card_mody mt-20" 끝 -->
          </div> <!-- div class="popup_body" 끝 -->

          <button class="btn_m01 blue">확 인</button>

          <div class="popup_close">닫 기</div>
        </div>  <!-- div class="card3_popup" style="top:160px;" v-show="validShow" 끝 -->

        <!-- Popup Validation Check 끝 -->

        <!-- Popup Validation Manager Check -->
        <div class="card3_popup" style="top:160px;" v-show="adminValidShow">

          <div class="popup_body">

            <div class="card_mody mt-20">
              <p class="c_tit">
                관리자 / 개발자의 경우<br>
                소속기관은 필수 항목입니다.<br>
                소속 기관을 선택 해 주세요!
              </p>
            </div>  <!-- div class="card_mody mt-20" 끝 -->
          </div>  <!-- div class="popup_body" 끝 -->

          <button class="btn_m01 blue">확 인</button>

          <div class="popup_close">닫 기</div>
        </div>  <!-- div class="card3_popup" style="top:160px;" v-show="adminValidShow" 끝 -->

        <!-- Popup Validation Manager Check 끝 -->

        <!-- Popup 회원 가입 완료 -->
        <div class="card3_popup" style="top:160px;" v-show="regShow">
          <div class="popup_body">
            <div class="card_mody mt-20">

              <p class="c_tit">회원 가입이 완료 되었습니다!<br>
                Login 화면으로 이동 합니다!
              </p>

            </div>  <!-- div class="card_mody mt-20" 끝 -->
          </div>  <!-- div class="popup_body" 끝 -->
        </div>  <!-- div class="card3_popup" style="top:160px;" v-show="regShow" 끝 -->
        <!-- Popup 회원 가입 완료 끝 -->

        <!-- Popup 신청 완료 안내 -->
<!--        <div class="card3_popup" style="top:160px;" v-model="appShow">-->
<!--          <div class="popup_body">-->
<!--            <div class="card_mody mt-20">-->

<!--              <p class="c_tit">-->
<!--                신청이 완료되었습니다!<br>-->
<!--                Site 관리자 승인 이 후<br>-->
<!--                Login 가능합니다!-->
<!--              </p>-->

<!--            </div>  &lt;!&ndash; div class="card_mody mt-20" 끝 &ndash;&gt;-->
<!--          </div>  &lt;!&ndash; div class="popup_body" 끝 &ndash;&gt;-->

<!--          <button class="btn_m01 blue">확 인</button>-->

<!--          <div class="popup_close">닫 기</div>-->

<!--        </div>  &lt;!&ndash; div class="card3_popup" style="top:160px;" v-model="appShow" 끝 &ndash;&gt;-->
        <!-- Popup 신청 완료 안내 끝 -->

      </div>  <!-- div class="card3_popup" style="top:160px;" v-show="idEqualShow" 끝 -->
    </div>  <!-- div id="Content" 끝  -->
  </div>  <!-- div id="contentWrap" 끝 -->
</template>

<script>
import {apiSignup, duplicateUserIdCheck, duplicateUserNickNameCheck} from "@/api/user/user";

export default {
  data() {
    return {
      // Modal Show
      idCheckShow : false,
      idEqualShow : false,
      validShow : false,
      adminValidShow : false,
      regShow : false,
      appShow : false,

      // 중복 관련
      equalShow : false,
      notEqualShow : false,

      // 매개변수(Parameter)
      userPasswordCheck : "",
      mobile1 : "",
      mobile2 : "",
      mobile3 : "",

      inputParam : {
        userId : "",
        userPassword : "",
        username : "",
        nickname : "",
        emailAddress : "",
        userMobildNum : "",
      } // inputParam 끝
    }
  }, // data() 끝

  methods: {
    // ID 중복 확인
    idCheck() {

      const pattern = /^\s+|\s+$/g;  // 공백(Space)에 해당하는 정규 표현식

      console.log("입력된 이용자가 이용하고자 하는 ID 값 : " + this.inputParam.username);

      if (this.inputParam.userId === undefined || this.inputParam.username === '' || this.inputParam.username === null) {
        console.log("ID가 입력되지 않았습니다!")

        alert("ID를 입력 해 주세요!")

        this.$refs.userId.focus();

        return false;
      } // if (this.inputParam.userId === undefined || this.inputParam.userId === '') 끝

      if (this.inputParam.username.replace(pattern, '') === "") {
        console.log("ID에 공백 문자가 있습니다!")

        alert("ID에는 공백을 입력할 수 없습니다!")

        this.$refs.username.focus();

        return false;
      } // if (this.inputParam.userId.replace(pattern, '') === "") 끝

      console.log("Back End로 요청과 함께 Data를 보내기 전 Data 값 확인 : " + this.inputParam.toString())

      duplicateUserIdCheck(this.inputParam).then(response => {

        console.log("ID 중복 요청 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! ID 값 : " + response.data.toString());

        if (response.data.statusCode === 409 || response.data.messageEn === "conflict") {
          console.log("이미 등록된 ID 입니다!");

          alert("이미 등록된 ID 입니다!")

          this.$refs.userId.focus();

          return false;

        } else {
          console.log("이용 가능한 ID 입니다!")

          alert("이용 가능한 ID  입니다!")

          return true;
        }
      });
    }, // idCheck() 끝

    // 비밀번호 확인
    pwdCheck() {

      if (this.inputParam.userPassword !== this.userPasswordCheck) {
        console.log("비밀번호가 일치하지 않습니다!")

        this.notEqualShow = true;
        this.equalShow = false;

      } else {
        console.log("비밀번호가 일치합니다!")

        this.equalShow = true;
        this.notEqualShow = false;

      } // if (this.inputParam.userPassword !== this.userPasswordCheck) - else 끝
    }, // pwdCheck() 끝

    nickNameCheck() {

      const pattern = /^\s+|\s+$/g;  // 공백(Space)에 해당하는 정규 표현식

      console.log("입력된 이용자가 이용하고자 하는 별명 값 : " + this.inputParam.nickname);

      if (this.inputParam.nickname === undefined || this.inputParam.nickname === '' || this.inputParam.nickname === null) {
        console.log("별명 입력되지 않았습니다!")

        alert("별명을 입력 해 주세요!")

        this.$refs.nickname.focus();

        return false;
      } // if (this.inputParam.userId === undefined || this.inputParam.userId === '') 끝

      if (this.inputParam.nickname.replace(pattern, '') === "") {
        console.log("별명에 공백 문자가 있습니다!")

        alert("별명에는 공백을 입력할 수 없습니다!")

        this.$refs.nickname.focus();

        return false;
      } // if (this.inputParam.userId.replace(pattern, '') === "") 끝

      console.log("Back End로 요청과 함께 Data를 보내기 전 Data 값 확인 : " + this.inputParam.nickname)

      duplicateUserNickNameCheck(this.inputParam.nickname).then(response => {

        console.log("ID 중복 요청 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! ID 값 : " + response.data.toString());

        if (response.data.statusCode === 409 || response.data.messageEn === "conflict") {
          console.log("이미 등록된 별명 입니다!");

          alert("이미 등록된 별명 입니다!")

          this.$refs.nickname.focus();

          return false;

        } else {
          console.log("이용 가능한 별명 입니다!")

          alert("이용 가능한 별명  입니다!")

          return true;
        }
      });

    }, // nickNameCheck()

    // 저장
    goSignup() {
      // validate
      if (this.inputParam.devlopGuidSj === "" || this.inputParam.devlopGuideVerValue === "" || this.inputParam.devlopGuideCn === "") {

        this.validModel = true;

        return false;

      } // if (this.inputParam.devlopGuidSj == "" || this.inputParam.devlopGuideVerValue == "" || this.inputParam.devlopGuideCn == "") 끝

      apiSignup(this.inputParam).then(response => {
        console.log("회원 가입 요청을 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! 응답 코드 : " + response.data.code);

        if (response.data.code === 200) {
          this.$router.push({
            path: "/user/signup"
          });
        } else {
          alert("회원 가입 실패 하였습니다!");
        } // if (response.data.code === 200) - else 끝
      }).catch(error => {
        console.log("회원 가입 중 문제가 발생하였습니다! 문제 내용 : " + error);

        alert("회원 가입 실패 하였습니다!")
      });
    } // getInsert() 끝
  } // methods 끝
} // export default 끝
</script>

<style lang="">
</style>