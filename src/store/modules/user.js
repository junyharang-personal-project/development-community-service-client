import {getToken, setToken} from "@/utils/token";
import {signIn} from "@/api/user/user";

const getDefaultState = () => {
  return {
      accessToken : getToken().accessToken,
      refreshToken : getToken().refreshToken,
      name : '',
      avatar : ''
  }
} // getDefaultState = () 끝

const state = getDefaultState();

const mutations = {
  // Reset
  RESET_STATE : (state) => {
      Object.assign(state, getDefaultState());
  },

  // Token 저장
  SET_TOKEN : (state, accessToken, refreshToken) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
  },    // SET_TOKEN 끝

  // 이름 설정
  SET_NAME : (state, name) => {
      state.name = name;
  },    // SET_NAME 끝

  SET_AVATAR : (state, avatar) => {
      state.avatar = avatar;
  } // SET_AVATAR 끝
}   // mutations 끝

/**
 * Promise의 사용 목적
 * 기존 JavaScript에서 비 동기 처리를 순차적으로 할 때,
 * Call Back 형식 처리 때문에 예외 처리가 어렵다는 단점 존재
 * 이를 보완하기 위해 Promise 이용
 * 비 동기 처리를 성공 했을 때 resolve를 실행하고, 실패 했을 때는 reject를 실행
 */

const actions = {
  // user SignIn
  singIn({ commit }, userInfo) {

      const { username, password } = userInfo;

      return new Promise((resolve, reject) => {

          signIn( {username : username.trim(), password : password }).then(response => {
              console.log("Login 요청을 보낸 뒤 Back End에서 돌아온 응답을 확인 합니다! 응답 코드 : " + response.data.statusCode);
              console.log("HTTP STATUS CODE 값 : " + response.data.statusCode);
              console.log("DATA 값 : " + response.data.data);
              console.log("한글 응답 값 : " + response.data.messageKo);
              console.log("영어 응답 값 : " + response.data.messageEn);

              if (response.data.messageEn === 'Not Found User of ID') {
                  alert("ID를 확인 해 주세요!")
              } else if (response.data.messageEn === 'Not Found User of Password') {
                  alert("Password를 확인 해 주세요!")
              } else {

                  commit('SET_TOKEN', response.data.accessToken, response.data.refreshToken)

                  setToken(response.data.accessToken, response.data.refreshToken);

                  if (state.accessToken !== undefined && state.refreshToken !== undefined) {

                      resolve( location.href = "http://localhost:3000");

                  } else {

                      alert("ID, 비밀번호를 확인 해 주세요!");

                  }

                  alert("Login이 성공 하였습니다!")

                  // this.$router.push({
                  //     path :"/"
                  // });
              } // if문 끝
          }).catch(error => {
              console.log("Login 중 문제가 발생 하였습니다! 문제 내용 : " + error);

              alert("Login 실패 하였습니다!")

              reject(error);
          })

      })

  }
} // actions 끝