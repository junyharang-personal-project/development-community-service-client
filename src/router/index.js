import { createRouter, createWebHistory} from "vue-router";
import Home from "../views/myHome.vue";

// Q&A 게시글
import DevInquryRegist from "@/views/support/q&a/DevInquryRegist";
import DevInquryList from "@/views/support/q&a/DevInquryList";
import DevInquryDetailView from "@/views/support/q&a/DevInquryDetailView";
import SignUp from "@/views/user/SignUp";

const routes = [{
    /* 1. Main 화면 */
    path: '/',
    name: 'Home',
    component: Home,
},
{
    // 회원 가입
    path: '/user/signUp',
    name: 'SignUp',
    component: SignUp
},
{
    // Q&A 게시판 - 등록 / 수정
    path: '/support/devInquryRegist',
    name: 'DevInquryRegist',
    component: DevInquryRegist
},
{
    // Q&A 게시판 - 목록 조회
    path: '/support/devInquryList',
    name: 'DevInquryList',
    component: DevInquryList
},
{
   // Q&A 게시판 - 상세 조회
   path: '/support/devInquryDetailView',
   name: 'DevInquryDetailView',
   component: DevInquryDetailView
},
];

export const ressetRouter = () => {

}

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;