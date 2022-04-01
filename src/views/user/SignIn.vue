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
        <span><b>SignIn</b></span>
      </h2>

      <div class="login_box">

        <div class="login_area_wrap">

          <div class="login_area">

            <div class="login_inp id">
              <label for="inp_id">아이디</label>

              <span class="input_txt">
                <input type="text" id="inp_id" class="ime_en" v-model="username">
              </span>
            </div>  <!-- div class="login_inp id" 끝 -->

            <div class="login_inp">
              <label for="inp_pw">패스워드</label>

              <span class="input_txt">
                <input type="password" id="inp_pw" v-model="password">
              </span>
            </div>  <!-- div class="login_inp" 끝 -->

            <a href="#" @click="doLogin" class="btn_orange login_inp">로그인</a>

            <div class="btm_cont">

              <div class="link_area">
                <router-link to="searchUserInfo">
                  <a class="list_link">ID / Password 찾기</a>
                </router-link>

                <router-link to="/user/signUp">
                <a href="SignUp.vue" class="list_link">회원 가입</a>
                </router-link>
              </div>  <!-- div class="link_area" 끝 -->

            </div>  <!-- div class="btm_cont" 끝 -->
          </div>  <!-- div class="login_area" 끝 -->

        </div>  <!-- div class="login_area_wrap" 끝 -->

    </div>  <!-- div class="login_box" 끝 -->

    </div>  <!-- div id="topVisualWrap" 끝 -->

  </div>  <!-- div id="contentWrap" 끝 -->
</template>

<script>
import {mapActions} from "vuex";
import {signIn} from "@/api/user/user";

const userStore = 'userStore';

export default {
  name: "SignInPage",

  data() {
    return {
      username : '',
      password : ''
    }
  }, // data() 끝

  methods : {
    ...mapActions(userStore, ['login', 'getInfo']),

    doLogin() {
      const userInfo = {
        username : this.username,
        password : this.password
      } // userInfo 끝

      signIn(userInfo).then(response => {

      });
    }, // doLogin() 끝
  }, // methods 끝
} // export default 끝
</script>

<style lang="">

</style>