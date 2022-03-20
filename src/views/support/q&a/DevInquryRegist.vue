<template>
    <!-- 컨텐츠 영역 -->
    <div id="contentWrap">

        <div id="topVisualWrap">
            
            <div class="topVisual">
                <p class="tit01">[JUNY COMPANY] 개발자 업무 협업 서비스 위한</p>

                <p class="tit02">인공지능 클라우드 주니하랑 플랫폼 <span></span></p>
            </div>  <!-- div class="topVisual" 끝 -->

        </div>  <!-- div id="topVisualWrap" 끝 -->

        <!-- 컨텐츠 영역 -->
        <div id="Content">
            <h2>
                <span>개발 지원</span>

                <span @click="goList()"><b>Q&A</b></span>
            </h2>

            <div class="ListTbWrap mt-20">
                
                <div class="margin-left:5px;margin-bottom:5px;">
                    <input type="checkbox" name="" id="result01"
                           :checked="devInquryData.secretAt === false"
                           v-model="devInquryData.secretAt" value=false>
                    <label for="result01">
                        <span></span>비밀글
                    </label>
                </div> <!-- div class="margin-left:5px;margin-bottom:5px;" 끝 -->

                <table class="tList">
                    <caption>Q&A 수정</caption>

                    <colgroup>
                        <col style="width:15%">
                        <col>
                    </colgroup>

                    <tbody>
                        <tr>
                            <td class="PalignL">제목
                                <span class="t_red">*</span>
                            </td>

                            <td class="PalignL">
                                <input id="" type="text" class="w100p" placeholder="제목을 입력 해 주세요!" v-model="devInquryData.inqrySj" ref="inqrySj">
                            </td>
                        </tr>

                        <tr>
                            <td class="PalignL">내용
                                <span class="t_red">*</span>
                            </td>

                            <td class="PalignL">
                                <textarea class="w100p" rows="15" placeholder="내용을 입력 해 주세요!" v-model="devInquryData.inqryCn" ref="inqryCn"></textarea>
                            </td>
                        </tr>

                        <tr>
                            <td class="PalignL">첨부 파일</td>

                            <td class="PalignL">
                                <template v-if="devInquryData.isNew === 'C'">
                                    <input type="file" name="" @change="doFileChange">
                                </template>

                                <template v-else>
                                    <input type="file" name="" @change="doFileChange">

                                    <a href="#" class="attatch_file ml-10">{{ devInquryData.fileNm }}</a>

                                    <button type="button" class="btnFileDel" :hidden="isNew">삭제</button>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>  <!-- div class="ListTbWrap mt-20" 끝 -->

            <div class="btn_wrap">
                <a href="#" class="btn04" @click="doRegist()">{{ this.isNewText }}</a>

                <a href="#" class="btn03" @click="goList()">취 소</a>
            </div>  <!-- div class="btn_wrap" 끝 -->
        </div>  <!-- div id="Content" 끝 -->

    </div>  <!-- div id="contentWrap" 끝 -->

    <!-- Pop up -->
    <div class="card3_popup" style="display: block; top:160px;" v-show="this.finishPopupShow">

        <div class="popup_body">

            <!-- Message -->
            <div class="card_mody mt-20">
                <p class="c_tit">게시글 수정이 완료 되었습니다!</p>
            </div>  <!-- div class="card_mody mt-20" 끝 -->

            <div class="btn_wrap_pop">
                <button class="btn_m01 blue">확 인</button>
            </div>  <!-- div class="btn_wrap_pop" 끝 -->

            <div class="popup_close" @click="this.finishPopupShow = false">닫기</div>

        </div>  <!-- div class="popup_body" 끝 -->

        <!-- Pop up 끝 -->

    <!-- Pop up -->
    <div class="card3_popup" style="display: block; top:160px;" v-show="this.validationPopupShow">

        <div class="popup_body">

            <div class="card_mody mt-20">
                <p class="c_tit">필수 항목은 꼭 입력 해 주세요!</p>
            </div> <!-- div class="card_mody mt-20" 끝 -->

        </div>  <!-- div class="popup_body" 끝 -->

        <div class="btn_wrap_pop">
            <button class="btn_m01 blue" @click="this.validationPopupShow = false">확인</button>

            <div class="popup_close" @click="this.validationPopupShow = false">닫기</div>
        </div>  <!-- div class="btn_wrap_pop" 끝 -->

    </div> <!-- div class="card3_popup" 끝 -->        
 
    </div>  <!-- div class="card3_popup" style="display: block; top:160px;" v-show="this.finishPopupShow" 끝 -->
    <!-- Pop up 끝 -->
</template>

<script>
import { devInquryRegist, devInquryDetail } from "@/api/devInquryApi";

export default {
    data() {
        return {
            finishPopupShow : false,
            validationPopupShow : false,
            isNew : false,
            isNewText : '등 록',
            devInquryData : {secretAt : false},
        }
    }, // data() 끝

    created() {
        // 글 등록을 들어가기 위한 조건절 (status가 C이면 등록으로 처리)
        if(this.$route.query.status !== 'C') {
            this.isNew = false;
            this.isNewText = '수 정';
            this.getDetailView();
        } else {
            this.isNew = true;
            this.isNewText = '등 록';
        } // if(this.$route.query.status != 'C') 끝
    }, // created() 끝

    methods : {
        goList() {
            this.$router.push({
                path : "/support/devInquryList",
            });
        }, // goList() 끝

        goDetailView(inqurySn) {
            this.$router.push({
                path : "/support/devInquryDetailView",
                query : {
                    inqurySn
                } // query 끝
            });
        },

        getDetailView() {
          devInquryDetail({
              inqrySn : this.$route.query.inqrySn
            }).then(response => {
                console.log("응답으로 들어온 상세 조회 정보 : " + response.data);
                
                this.devInquryData = response.data.devInquryVO;

                console.log("현재 DevInquryRegist.vue의 this.devInquryData 값 :" + this.devInquryData);
            }).catch(error => {
                console.log("게시물 / 수정 과정을 위한 글 상세 조회에서 문제가 생겨 Catch문이 동작하였습니다!" + error + "문제 발생으로 목록 조회로 이동 됩니다.");
                this.goList();
            });
        }, // getView() 끝

        doRegist() {
            console.log("글 등록(doRegist\(\)) Method가 동작하였습니다! DevInquryRegist.vue의 Member 변수 inqurySj 값 : " + this.devInquryData.inqrySj);
            // 필수 입력 항목 검사를 위한 Validation 분기절 (제목)
            if(this.devInquryData.inqrySj === undefined || this.devInquryData.inqrySj === '') {
                this.validationPopupShow = true;
                this.$ref.inqrySj.focus();

                return false;
            }   // if(this.devInquryData.inqurySj == undefined || this.devInquryData.inqurySj == '') 끝

            // 필수 입력 항목 검사를 위한 Validation 분기절 (내용)
            if(this.devInquryData.inqryCn == undefined || this.devInquryData.inqryCn == '') {
                this.validationPopupShow = true;
                this.$ref.inquryCn.focus();

                return false;
            } // if(this.devInquryData.inqryCn == undefined || this.devInquryData.inqryCn == '' 끝

            // 글 등록을 위해 API를 호출해서 Backend에 내용 전달
            devInquryRegist(this.devInquryData).then(response => {
                console.log("글 등록을 위해 Back End에게 내용을 요청하고, 응답 받은 값 : " + response.data);
                alert("게시글 " + (this.isNew === true ? "등록" : "수정") + "이 완료 되었습니다!");

                // 작성된 게시글 상세 조회로 이동 시키기 위해 해당 Method 호출
                this.goDetailView(response.data.resultSn);
            }).catch(error => {
                console.log("글 등록을 처리하는 중에 문제가 발생하여 catch문이 동작 하였습니다!");
                alert("게시글 " + (this.isNew === true ? "등록을" : "수정을" + " 실패하였습니다! \r\n 관리자에게 문의 바랍니다!"));

                // 목록 조회로 이동 시키기 위해 해당 Method 호출
                this.goList();
            });
        }, //doRegist() 끝

        doFileChange(e) {},
    }, // methods 끝
}   // export default 끝
</script>