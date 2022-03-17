/* eslint-disable */
<template>

  <header>

    <div id="headerWrap">

      <h1>

        <a href="#">
          <router-link to="/">
            <span></span>
          </router-link>
        </a>

      </h1>

      <div class="topLink">
        <a href="#" class="topLink">

          <div v-if="loginState === false">

            <router-link to="/user/Login">
              <span>Sign In</span>
            </router-link>

          </div>

          <div v-else-if="loginState === true">
            <span @click="Logout">Logout</span>
          </div>

        </a>
      </div>

      <div class="topNav">

        <ul class="topNavList">

          <li>

            <a href="#">
              <span>이용 가이드</span>
            </a>

            <div class="subNavi sub01" style="display: none">

              <ul class="deps1">

                <li>
                  서비스 소개
                  <!-- 서비스 소개 -->
                </li>

                <li>
                  공지 사항
                  <!-- 공지 사항 -->
                </li>
              </ul>

            </div>  <!-- sub_navigation 끝 -->

          </li>

          <li>
            <a href="#">
              <span>개발 지원</span>
            </a>

            <div class="subNavi sub02" style="display: none">

              <ul class="deps1">
                <li>
                  개발 지원
                  <!-- 개발 지원 -->
                </li>

                <li>
                  개발자 가이드
                  <!-- 개발자 가이드 -->
                </li>

                <li>
                  <router-link to="/support/devInquryList">
                    Q&A
                  </router-link>
                </li>
              </ul>

            </div> <!-- class="subNavi sub02" 끝 -->
          </li>

          <li>

            <a href="#"><span>이용 신청<!-- 이용신청 --></span></a>

            <div class="subNavi sub03" style="display: none">

              <ul class="deps1">

                <li>
                  회원 가입
                  <!-- 회원 가입 -->
                </li>

                <li>
                  기관 등록
                  <!-- 기관 등록 -->
                </li>
              </ul>

            </div> <!-- class="subNavi sub03" 끝 -->

          </li>

          <li>

            <a href="#">
              <span>데이터 관리</span>
            </a>

            <div class="subNavi sub04" style="display: none">

              <ul class="deps1">

                <li>
                  수집 현황
                  <!-- 수집 현황 구현 필요 -->
                </li>

                <li>
                  데이터 추출
                  <!-- 데이터 추출 구현 필요 -->
                </li>

                <li>
                  추출 이력
                  <!-- 추출 이력 구현 필요 -->
                </li>


              </ul>

            </div> <!-- class="subNavi sub04" 끝 -->

          </li>

          <li>

            <a href="#">
              <span>서비스 관리</span>
            </a>

              <div class="subNavi sub05" style="display: none">

              <ul class="deps1">
                <li>
                  회원 정보
                  <!-- 회원 정보 구현 필요 -->
                </li>

                <li>
                  회원 관리
                  <!-- 회원 관리 구현 필요 -->
                </li>

                <li>
                  기관 정보
                  <!-- 기관 관리 구현 필요 -->
                </li>
              </ul>
            </div> <!-- class="subNavi sub05" 끝 -->
          </li>
        </ul> <!-- depth1 끝 -->
      </div>  <!-- topNave 끝 -->
    </div>  <!-- headerWrap 끝 -->

  </header> <!-- 헤더 영역 끝 -->

</template>


<script>
import {VueCookieNext} from 'vue-cookie-next';
import {mapActions} from 'vuex';

const userStore = 'userStore';

export default {
  data() {
    return {
      loginState : false,
    }
  },

  mounted() {
    if (VueCookieNext.getCookie('token') != undefined) {

      this.loginState = true;

    } else {

      this.loginState = false;

    }
  },

  methods : {

    ...mapActions(userStore, ['logout']),

    Logout() {
      const ok = confirm('로그아웃 하시겠습니까?')

      if (ok) { this.logout(); }
    }
  }
}
</script>
/* eslint-disable */