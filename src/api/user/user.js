import axios from "axios";

export function duplicateUserIdCheck(params) {
    console.log("user.js의 회원가입 직전 이용자가 입력한 ID 중복 확인 Logic duplicateUserIdCheck()가 동작하였습니다!")
    console.log("Back End에 이용자가 입력한 정보를 전달하여 중복 확인을 실시 하겠습니다!")

    return axios({
        url: '/api/user/duplicate/userid',
        method : 'post',
        data : params
    });
} // duplicateUserIdCheck(params) 끝

export function duplicateUserNickNameCheck(params) {
    console.log("user.js의 회원가입 직전 이용자가 입력한 별명 중복 확인 Logic duplicateUserNickNameCheck()가 동작하였습니다!")
    console.log("Back End에 이용자가 입력한 정보를 전달하여 중복 확인을 실시 하겠습니다!")

    return axios({
        url: '/api/user/duplicate/nickname',
        method : 'post',
        data : params
    });
} // duplicateUserIdCheck(params) 끝

export function duplicateUserEmailCheck(params) {
    console.log("user.js의 회원가입 직전 이용자가 입력한 E-mail 중복 확인 Logic duplicateUserEmailCheck()가 동작하였습니다!")
    console.log("Back End에 이용자가 입력한 정보를 전달하여 중복 확인을 실시 하겠습니다!")

    return axios({
        url: '/api/user/duplicate/email',
        method : 'post',
        data : params
    });
} // duplicateUserEmailCheck(params) 끝

export function duplicatePhoneNumber(params) {
    console.log("user.js의 회원가입 직전 이용자가 입력한 E-mail 중복 확인 Logic duplicateUserEmailCheck()가 동작하였습니다!")
    console.log("Back End에 이용자가 입력한 정보를 전달하여 중복 확인을 실시 하겠습니다!")

    return axios({
        url: '/api/user/duplicate/phone-number',
        method : 'post',
        data : params
    });
} // duplicateUserEmailCheck(params) 끝

export function apiSignup(params) {
    console.log("user.js의 회원가입 Logic apiSignup()이 동작하였습니다!")
    console.log("Back End에 이용자가 입력한 정보를 전달하여 회원 가입을 실시 하겠습니다!")

    return axios({
        url: '/api/user/signup',
        method : 'post',
        data : params
    });
} // apiSignup(params) 끝

// Object 형태로 Data 응답
export function signIn(params) {
    return axios({
        url: '/api/user/signin',
        method : 'post',
        data : params
    });
}   // signIn(params) 끝

export function logout(token) {
    return axios({
        url : 'api/user/logout',
        method : 'delete',
        data : token
    });
}   // logout(token) 끝

