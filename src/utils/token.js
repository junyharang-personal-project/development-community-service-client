import {VueCookieNext} from "vue-cookie-next";

export function getToken() {
    return {
        accessToken: VueCookieNext.getCookie('access_token'),
        refreshToken: VueCookieNext.getCookie('refresh_token')
    };
} // getToken() 끝

// Client의 Cookie에 Token 저장
export function setToken(access_token, refresh_token) {

    VueCookieNext.setCookie('access_token', access_token, {secure : true, httpOnly : true});
    VueCookieNext.setCookie('refresh_token', refresh_token, {secure : true, httpOnly : true});

} // setToken(access_token, refresh_token) 끝

export function removeToken() {
    VueCookieNext.removeCookie('access_token');
    VueCookieNext.removeCookie('refresh_token');
}   // removeToken() 끝