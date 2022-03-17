<template>
  <!-- Contents 영역 -->
  <div id="contentWrap">

    <div id="topVisualWrap">

        <div id="topVisual">
        <p class="tit01">대한민국 개발자 업무 협업 서비스 위한</p>
        <p class="tit02">인공지능 클라우드 주니하랑 플랫폼 <span></span></p>
        </div>
      </div>

      <!-- Contents 영역 -->
      <div id="Content">

        <div class="main_top">
          <ul class="main_info">
            <li>
              <a href="">
                <div class="info_img"><img :src="require(`@/assets/images/main_img1.gif`)"></div>
                  <p class="info_tit01">표준 플랫폼 소개</p>
                  <p class="info_tit02">개발자 데이터 획득 통합 모니터링</p>
              </a>
            </li>

            <li>
              <a href="">
                <div class="info_img"><img :src="require(`@/assets/images/main_img2.gif`)"></div>
                <p class="info_tit01">개발자 가이드</p>
                <p class="info_tit02">개발자 가이드. 클라이언트 접속. 같은 VPC Subnet 이용하는 인스턴스의</p>
              </a>
          </li>
          </ul>
        </div>  <!-- Main top 끝 -->

        <div class="noticeWrap">

          <div class="main_qna">

            <div class="qna_top">
              <span>질의응답</span>
              <a href="#">더보기</a>
            </div>

            <ul class="qna_list">
            <li><a href="">기능이용가이드를 참고하여 기능 개선 작업 안내 <span class="date">2021-08-25</span></a></li>
            <li><a href="">프로젝트 등록 관련 약관이 수정되 어  접속에러시 대처<span class="date">2021-08-25</span></a></li>
            <li><a href="">Test api와 Sample을 제공해 쉽게 개발이 가능하도록<span class="date">2021-08-25</span></a></li>
            <li><a href="">기능이용가이드를 참고하여 기능 개선 작업 안내<span class="date">2021-08-25</span></a></li>
            <li><a href="">프로젝트 등록 관련 약관이 수정되 어  접속에러시 대처<span class="date">2021-08-25</span></a></li>
            <li><a href="">Test api와 Sample을 제공해 쉽게 개발이 가능하도록<span class="date">2021-08-25</span></a></li>
            </ul>
          </div> <!-- //main_qna 끝-->

        </div>  <!-- //noticeWrap 끝-->

        <div class="main_banner">
          <ul>
            <li><a href="https://stackoverflow.com/"><img :src="require(`@/assets/images/main_bn1.png`)" alt="StackOverFlow"></a></li>
            <li><a href="https://okky.kr/"><img :src="require(`@/assets/images/main_bn2.png`)" alt="OKYY"></a></li>
            <li><a href="https://www.inflearn.com/"><img :src="require(`@/assets/images/main_bn3.png`)" alt="Inflearn"></a></li>
            <li><a href="https://github.community/"><img :src="require(`@/assets/images/main_bn4.png`)" alt="github-Community"></a></li>
            <li></li>
          </ul>
        </div>  <!-- class="main_banner" 끝-->

      </div>  <!-- id="Content" 끝-->
  </div>  <!-- id="contentWrap" 끝-->

</template>

<script>
export default {

}
</script>

<style lang="">

</style>