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
              <input type="text" id="inp_id" v-model="inputParam.username" class="regi" maxlength="30" placeholder="사용하실 ID를 입력 해 주세요!" ref="username" @blur="idHelthCheck">

              <button type="button" @click="idCheck" class="btn02">중복 확인</button>

              <span class="font_s t_red" v-show="isIDSpaceCheck">공백을 입력할 수 없습니다!</span>

              <span class="font_s t_red" v-show="isIDNullCheck">ID를 입력 해 주세요!</span>

              <span class="font_s t_red" v-show="isIDKOREANCheck">한글은 입력할 수 없습니다!</span>

              <span class="font_s t_red" v-show="isIDSpecialCheck">특수문자는 입력할 수 없습니다!</span>

              <span class="font_s t_red" v-show="isIDGoodCheck">정상 입니다! 중복 확인을 해 주세요!</span>

              <span class="font_s t_blue" v-show="isIDDupplicateCheck">사용 가능!</span>
            </td>
          </tr>

          <tr>
            <td class="PalignL">비밀번호
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="password" id="inp_pwd" v-model="inputParam.password" class="pwd" ref="pwd" @blur="pwdCheck">

              <p class="font_s t_red">[영문자(소, 대문자) + 숫자 + 특수문자]로 조합된 8글자 이상 15자리 이하의 비밀번호를 입력 해 주세요!</p>

              <span class="font_s t_red" v-show="pwdLengthShow">비밀번호는 8자리 이상 15자리 이하로 입력해야 하며, 영(소, 대)문자, 숫자, 특수문자($@$!%*?&)만 입력 가능 합니다!</span>
            </td>
          </tr>

          <tr>
            <td class="PalignL">비밀번호 확인
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="password" id="inp_pwd_check" v-model="userPasswordCheck" ref="checkPwd" @blur="pwdCheck">

              <span class="font_s t_blue" v-show="isPWDEqualShow">정상 입니다!</span>

              <span class="font_s t_red" v-show="notEqualShow">비밀번호가 일치하지 않습니다!</span>

              <span class="font_s t_red" v-show="pwdLengthShow">비밀번호는 8자리 이상 15자리 이하로 입력해야 하며, 영(소, 대)문자, 숫자, 특수문자($@$!%*?&)만 입력 가능 합니다!</span>

            </td>
          </tr>

          <tr>
            <td class="PalignL">별명
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="text" id="inp_nickname" class="regi" v-model="inputParam.nickname" ref="nickname">

              <button type="button" @click="nickNameCheck" class="btn02">중복 확인</button>
            </td>
          </tr>

          <tr>
            <td class="PalignL">E-Mail
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="email" id="inp_email" class="regi" v-model="inputParam.userEmail" ref="userEmail">

              <span class="font_s t_red">E-mail은 필수 입력 사항 입니다!</span>

              <button type="button" @click="emailCheck" class="btn02">중복 확인</button>
            </td>
          </tr>

          <tr>
            <td class="PalignL">핸드폰 번호
              <span class="t_red">*</span>
            </td>

            <td class="PalignL">
              <input type="text" id="inp_phone1" class="phone" v-model="inputParam.userPhone" maxlength="11" placeholder="숫자만 입력" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" ref="userPhone">

              <button type="button" @click="phoneNumberCheck" class="btn02">중복 확인</button>
            </td>
          </tr>

          <tr>
            <td class="PalignL">회원 구분
              <span class="t_red">*</span>
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
          </tbody>
        </table>
      </div>  <!-- div class="ListTbWrap mt-20" 끝 -->

      <div class="btn_wrap">
        <a href="#" class="btn03">취 소</a>

        <a href="#" class="btn04" @click="goSignup">회원 가입</a>
      </div>  <!-- div class="btn_wrap" 끝 -->

      <!-- Popup ( Check ) -->
      <div class="card3_popup" style="top: 160px;" v-show="checkShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">사용 가능한 값 입니다!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.checkShow = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->
      <!-- Popup ( Check ) 끝-->

      <!-- Popup ( 중복 상황 ) -->
      <div class="card3_popup" style="top:160px;" v-show="equalShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">이미 존재 합니다!</p>
          </div> <!-- div class="card_mody mt-20" 끝 -->
        </div> <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.equalShow = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div> <!-- div class="card3_popup" style="top:160px;" v-show="idEqualShow" 끝 -->

      <!-- Popup ( 중복 상황 ) 끝 -->

      <!-- Popup ( 공백 입력 ) -->
      <div class="card3_popup" style="top: 160px;" v-show="spaceShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">공백을 입력할 수 없습니다!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.spaceShow = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->

      <!-- Popup ( 공백 입력 ) 끝 -->

      <!-- Popup ( 미 입력 ) -->
      <div class="card3_popup" style="top: 160px;" v-show="nullShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">필수 값을 입력 해 주세요!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.nullShow = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->

      <!-- Popup ( 미 입력 ) 끝 -->

      <!-- Popup ( 한글 입력 ) -->
      <div class="card3_popup" style="top: 160px;" v-show="showKOREAN">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">한글을 입력할 수 없습니다!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.showKOREAN = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->

      <!-- Popup ( 한글 입력 ) 끝 -->

      <!-- Popup ( 특수 문자 입력 ) -->
      <div class="card3_popup" style="top: 160px;" v-show="spacialShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">특수문자를 입력할 수 없습니다!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.spacialShow = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->

      <!-- Popup ( 특수 문자 입력 ) 끝 -->

      <!-- Popup ( Email 특수 문자 입력 ) -->
      <div class="card3_popup" style="top: 160px;" v-show="emailSpacialShow">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">Email에 '@, ., -, _'를 제외한 특수문자를 입력할 수 없습니다!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.emailSpacialShow = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->

      <!-- Popup ( Email 특수 문자 입력 ) 끝 -->

      <!-- Popup ( Email 형식 맞게 입력 ) -->
      <div class="card3_popup" style="top: 160px;" v-show="emailForm">

        <div class="popup_body">

          <div class="card_mody mt-20">
            <p class="c_tit">Email 형식에 맞게 입력 해 주세요!</p>
          </div>  <!-- div class="card_mody mt-20" 끝 -->
        </div>  <!-- div class="popup_body" 끝 -->

        <button class="btn_m01 blue" @click="this.emailForm = false">확 인</button>

        <div class="popup_close">닫 기</div>
      </div>  <!-- div class="card3_popup" style="top: 160px;" v-show="idCheckShow" 끝  -->

      <!-- Popup ( Email 형식 맞게 입력 ) 끝 -->

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

      </div>  <!-- div id="Content" 끝 -->
    </div>  <!-- div id="ContentWrap" 끝  -->
</template>

<script>
import {
  apiSignup,
  duplicatePhoneNumber,
  duplicateUserEmailCheck,
  duplicateUserIdCheck,
  duplicateUserNickNameCheck
} from "@/api/user/user";

export default {
  data() {
    return {
      // 공백 및 잘 못 입력된 값 Check
      isIDSpaceCheck : false,   // ID 공백 입력 여부 검사를 위한 변수
      isIDNullCheck : false,    // ID 미 입력 검사를 위한 변수
      isIDKOREANCheck : false,  // ID에 한글이 입력 되었는지 검사를 위한 변수
      isIDSpecialCheck : false, // ID에 특수 문자 입력 되었는지 검사를 위한 변수
      isIDGoodCheck : false,    // ID 공백, 미 입력 검사가 완료 되었을 때 이용될 변수
      isIDconfirm : false,       // ID 중복 확인 여부를 확인하기 위한 변수
      isPWDCheck : false,       // 비밀번호 8자리 이상 확인 변수

      // 중복 확인 여부
      // 최종 '회원 가입' 버튼을 눌렀을 때, 중복 체크를 안하면 가입을 못하게 막기 위한 변수
      isIDDupplicateCheck : false,
      isNickNameDupplicateCheck : false,
      isEmailDupplicateCheck : false,
      isPasswordDupplicateCheck : false,
      isPhoneNumberDupplicateCheck : false,

      // Modal Show
      checkShow : false,
      equalShow : false,
      spaceShow : false,
      nullShow : false,
      showKOREAN : false,
      spacialShow : false,
      pwdLengthShow : false,
      validShow : false,
      adminValidShow : false,
      regShow : false,
      appShow : false,
      emailSpacialShow : false,
      emailForm : false,

      // 중복 관련
      isPWDEqualShow : false,
      notEqualShow : false,

      // 매개변수(Parameter)
      userPasswordCheck : "",
      mobile1 : "",
      mobile2 : "",
      mobile3 : "",

      inputParam : {
        password : "",
        username : "",
        nickname : "",
        userEmail : "",
        userPhone : "",
      }, // inputParam 끝
      specialCharacters : /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi,      // 특수문자에 해당하는 정규 표현식
      spaceCharacters : /^\s+|\s+$/g,                                                 // 공백(Space)에 해당하는 정규 표현식
      charKOREAN : /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,                                                // 한글 정규 표현식
      passwordCharacters : /^[A-Za-z\d$@$!%*?&]{8,15}$/,
      emailCharacters : /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.([a-z]+)*$/,

    }
  }, // data() 끝

  methods: {
    // ID 중복 확인
    idCheck() {

      console.log("입력된 이용자가 이용하고자 하는 ID 값 : " + this.inputParam.username);

      if (this.isIDKOREANCheck) {
        this.showKOREAN = true;

        this.$refs.username.focus();

        return false;
      } else if (this.isIDNullCheck) {
        this.nullShow = true;

        this.$refs.username.focus();

        return false;
      } else if (this.isIDSpaceCheck){
        this.spaceShow = true;

        this.$refs.username.focus();

        return false;
      } else if (this.isIDSpecialCheck) {
        this.spacialShow = true;

        this.$refs.username.focus();

        return false;
      } // validation if 끝

      duplicateUserIdCheck(this.inputParam).then(response => {

        console.log("ID 중복 요청 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! HTTP STATUS CODE 값 : " + response.data.statusCode);
        console.log("HTTP STATUS CODE 값 : " + response.data.statusCode);
        console.log("DATA 값 : " + response.data.data);
        console.log("한글 응답 값 : " + response.data.messageKo);
        console.log("영어 응답 값 : " + response.data.messageEn);

        if (response.data.statusCode === 409 || response.data.messageEn === "conflict") {
          console.log("이미 등록된 ID 입니다!");

          this.$refs.username.focus();

          this.equalShow = true;
          this.checkShow = false;

          // 최종 '회원 가입' 버튼을 눌렀을 때, 중복 체크를 안하면 가입을 못하게 막기 위한 변수를 false로 바꿔 회원 가입이 안 되게 한다.
          this.isIDDupplicateCheck = false;

          return false;

        } else {
          console.log("이용 가능한 ID 입니다!")

          this.checkShow = true;
          this.equalShow = false;

          // 최종 '회원 가입' 버튼을 눌렀을 때, 중복 체크를 안하면 가입을 못하게 막기 위한 변수를 true로 바꿔 회원 가입이 되게 한다.
          this.isIDDupplicateCheck = true;

          // 중복 확인이 완료된 뒤 '중복 확인' 해달라는 문구를 지우기 위해 false로 변경
          this.isIDGoodCheck = false;

          return true;
        } // if (response.data.statusCode === 409 || response.data.messageEn === "conflict") - else 끝
      })
    }, // idCheck() 끝

    idHelthCheck() {

      if (this.inputParam.username === undefined || this.inputParam.username === '' || this.inputParam.username === null) {

        console.log("ID가 입력되지 않았습니다!")

        this.isIDNullCheck = true;
        this.isIDSpaceCheck = false;
        this.isIDKOREANCheck = false;
        this.isIDSpecialCheck = false;
        this.isIDGoodCheck = false;
        this.isIDDupplicateCheck = false;

        this.$refs.username.focus();

        return false;

      } else if (this.inputParam.username.replace(this.spaceCharacters, '') === "") {
        console.log("ID에 공백 문자가 있습니다!")

        this.isIDSpaceCheck = true;
        this.isIDNullCheck = false;
        this.isIDKOREANCheck = false;
        this.isIDSpecialCheck = false;
        this.isIDGoodCheck = false;
        this.isIDDupplicateCheck = false;

        this.$refs.username.focus();

        return false;

      } else if (this.charKOREAN.exec(this.inputParam.username) !== null) {

        this.isIDKOREANCheck = true;
        this.isIDNullCheck = false;
        this.isIDSpaceCheck = false;
        this.isIDSpecialCheck = false;
        this.isIDGoodCheck = false;
        this.isIDDupplicateCheck = false;

        this.$refs.username.focus();

        return false;

      } else if (this.specialCharacters.exec(this.inputParam.username) !== null) {

        this.isIDSpecialCheck = true;
        this.isIDKOREANCheck = false;
        this.isIDNullCheck = false;
        this.isIDSpaceCheck = false;
        this.isIDGoodCheck = false;
        this.isIDDupplicateCheck = false;

      } else {

          this.isIDKOREANCheck = false;
          this.isIDNullCheck = false;
          this.isIDSpaceCheck = false;
          this.isIDSpecialCheck = false;
          this.isIDDupplicateCheck = false;
          this.isIDGoodCheck = true;

          return true;

      }// if (this.inputParam.userId.replace(pattern, '') === "") 끝
    }, // idSpaceCheck() 끝

    // 비밀번호 확인
    pwdCheck() {

      if (this.passwordCharacters.test(this.inputParam.password) === false) {
        console.log("비밀번호는 8자리 이상 15자리 이하로 입력해야 하며, 영(소, 대)문자, 숫자, 특수문자($@$!%*?&)만 입력 가능 합니다!")

        this.pwdLengthShow = true;
        this.isPWDCheck = true;

        this.isPasswordDupplicateCheck = false;

        return false;

      } else if (this.inputParam.password !== this.userPasswordCheck) {
        console.log("비밀번호가 일치하지 않습니다!")

        this.notEqualShow = true;
        this.equalShow = false;
        this.pwdLengthShow = false;
        this.isPWDCheck = true;

        this.isPasswordDupplicateCheck = false;

        return false;

      } else {
        console.log("비밀번호가 일치합니다!")

        this.isPWDEqualShow = true;
        this.notEqualShow = false;
        this.pwdLengthShow = false;

        this.isPasswordDupplicateCheck = true;

        return true;

      } // if (this.inputParam.userPassword !== this.userPasswordCheck) - else 끝
    }, // pwdCheck() 끝

    nickNameCheck() {

      const specialCharacters = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;      // 특수문자에 해당하는 정규 표현식

      console.log("입력된 이용자가 이용하고자 하는 별명 값 : " + this.inputParam.nickname);

      if (this.inputParam.nickname === undefined || this.inputParam.nickname === '' || this.inputParam.nickname === null) {
        console.log("별명 입력되지 않았습니다!")

        this.nullShow = true;

        this.$refs.nickname.focus();

        return false;
      } // if (this.inputParam.userId === undefined || this.inputParam.userId === '') 끝

      if (this.inputParam.nickname.replace(this.spaceCharacters, '') === "") {
        console.log("별명에 공백 문자가 있습니다!")

        this.spaceShow = true;

        this.$refs.nickname.focus();

        return false;
      } // if (this.inputParam.userId.replace(pattern, '') === "") 끝

      if (specialCharacters.exec(this.inputParam.nickname) !== null) {
        console.log("별명에 특수 문자가 있습니다!")

        this.spacialShow = true;

        this.$refs.nickname.focus();

        return false;
      } // if (this.inputParam.userId.replace(pattern, '') === "") 끝

      console.log("Back End로 요청과 함께 Data를 보내기 전 Data 값 확인 : " + this.inputParam.nickname)

      duplicateUserNickNameCheck(this.inputParam).then(response => {

        console.log("ID 중복 요청 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! ID 값 : " + response.data.toString());

        if (response.data.statusCode === 409 || response.data.messageEn === "conflict") {
          console.log("이미 등록된 별명 입니다!");

          this.equalShow = true;
          this.checkShow = false;

          this.isNickNameDupplicateCheck = false;

          this.$refs.nickname.focus();

          return false;

        } else {
          console.log("이용 가능한 별명 입니다!")

          this.equalShow = false;
          this.checkShow = true;

          this.isNickNameDupplicateCheck = true;

          return true;
        }
      });
    }, // nickNameCheck()

    emailCheck() {

      if (this.inputParam.userEmail === undefined || this.inputParam.userEmail === '' || this.inputParam.userEmail === null)  {
        console.log("Email이 입력되지 않았습니다!")

        this.spaceShow = true;

        this.isEmailDupplicateCheck = false;

        this.$refs.userEmail.focus();

        return false;

      } else if (this.charKOREAN.exec(this.inputParam.userEmail) !== null) {
        console.log("Email에 한글이 있습니다!")

        this.showKOREAN = true;

        this.isEmailDupplicateCheck = false;

        this.$refs.userEmail.focus();

        return false;

      } else if (this.emailCharacters.exec(this.inputParam.userEmail) == null) {
        console.log("Email 형식이 아닙니다!")

        console.log("Email 값 : " + this.inputParam.userEmail)

        this.emailForm = true;

        this.isEmailDupplicateCheck = false;

        this.$refs.userEmail.focus();

        return false;

      } else {

        duplicateUserEmailCheck(this.inputParam).then(response => {

          console.log("ID 중복 요청 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! HTTP STATUS CODE 값 : " + response.data.statusCode);
          console.log("HTTP STATUS CODE 값 : " + response.data.statusCode);
          console.log("DATA 값 : " + response.data.data);
          console.log("한글 응답 값 : " + response.data.messageKo);
          console.log("영어 응답 값 : " + response.data.messageEn);

          if (response.data.statusCode === 409 || response.data.messageEn === "conflict") {
            console.log("이미 등록된 Email 입니다!");

            this.$refs.userEmail.focus();

            this.equalShow = true;
            this.checkShow = false;

            // 최종 '회원 가입' 버튼을 눌렀을 때, 중복 체크를 안하면 가입을 못하게 막기 위한 변수를 false로 바꿔 회원 가입이 안 되게 한다.
            this.isEmailDupplicateCheck = false;

            return false;

          } else {
            console.log("이용 가능한 Email 입니다!")

            this.checkShow = true;
            this.equalShow = false;

            // 최종 '회원 가입' 버튼을 눌렀을 때, 중복 체크를 안하면 가입을 못하게 막기 위한 변수를 true로 바꿔 회원 가입이 되게 한다.
            this.isEmailDupplicateCheck = true;

            return true;
          } // if (response.data.statusCode === 409 || response.data.messageEn === "conflict") - else 끝
        })

      }

    }, // emailCheck() 끝

    phoneNumberCheck() {

      duplicatePhoneNumber(this.inputParam).then(response => {
        console.log("ID 중복 요청 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! HTTP STATUS CODE 값 : " + response.data.statusCode);
        console.log("HTTP STATUS CODE 값 : " + response.data.statusCode);
        console.log("DATA 값 : " + response.data.data);
        console.log("한글 응답 값 : " + response.data.messageKo);
        console.log("영어 응답 값 : " + response.data.messageEn);

        if (response.data.statusCode === 409 || response.data.messageEn === "conflict") {

          console.log("이미 등록된 핸드폰 번호 입니다!");

          this.$refs.userEmail.focus();

          this.equalShow = true;
          this.checkShow = false;

          // 최종 '회원 가입' 버튼을 눌렀을 때, 중복 체크를 안하면 가입을 못하게 막기 위한 변수를 false로 바꿔 회원 가입이 안 되게 한다.
          this.isPhoneNumberDupplicateCheck = false;

          this.$refs.userPhone.focus();

          return false;

        } else {

          console.log("이용 가능한 핸드폰 번호 입니다!")

          this.checkShow = true;
          this.equalShow = false;

          // 최종 '회원 가입' 버튼을 눌렀을 때, 중복 체크를 안하면 가입을 못하게 막기 위한 변수를 true로 바꿔 회원 가입이 되게 한다.
          this.isPhoneNumberDupplicateCheck = true;

          return true;

        }
      })

    }, // phoneNumberCheck() 끝

    isIDDupplicateCheck : false,
    isNickNameDupplicateCheck : false,
    isEmailDupplicateCheck : false,
    isPasswordDupplicateCheck : false,
    isPhoneNumberDupplicateCheck : false,

    // 저장
    goSignup() {

      if (this.isIDDupplicateCheck && this.isNickNameDupplicateCheck && this.isEmailDupplicateCheck && this.isPasswordDupplicateCheck && this.isPhoneNumberDupplicateCheck) {

        apiSignup(this.inputParam).then(response => {
          console.log("회원 가입 요청을 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! 응답 코드 : " + response.data.statusCode);
          console.log("HTTP STATUS CODE 값 : " + response.data.statusCode);
          console.log("DATA 값 : " + response.data.data);
          console.log("한글 응답 값 : " + response.data.messageKo);
          console.log("영어 응답 값 : " + response.data.messageEn);


          if (response.data.statusCode === 200) {
            this.$router.push({
              path: "/"
            });
          } else {
            alert("회원 가입 실패 하였습니다!");
          } // if (response.data.code === 200) - else 끝
        }).catch(error => {
          console.log("회원 가입 중 문제가 발생하였습니다! 문제 내용 : " + error);

          alert("회원 가입 실패 하였습니다!")
        });

      } else {

        if (this.isIDDupplicateCheck === false) {
          alert("ID 중복 체크를 실행 해 주세요!");
        } else if (this.isNickNameDupplicateCheck === false) {
          alert("별명 중복 체크를 실행 해 주세요!")
        } else if (this.isEmailDupplicateCheck === false) {
          alert("Email 중복 체크를 실행 해 주세요!")
        } else if (this.isPasswordDupplicateCheck === false) {
          alert("비밀번호를 확인 해 주세요!")
        } else if (this.isPhoneNumberDupplicateCheck === false) {
          alert("핸드폰 번호 중복 체크를 실행 해 주세요!")
        }

        return false;

      } // if (this.isIDDupplicateCheck && this.isNickNameDupplicateCheck && this.isEmailDupplicateCheck && this.isPasswordDupplicateCheck && this.isPhoneNumberDupplicateCheck) 끝
    } // goSignup() 끝
  } // methods 끝
} // export default 끝
</script>

<style lang="">
</style>