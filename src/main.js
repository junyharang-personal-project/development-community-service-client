import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import {VueCookieNext} from "vue-cookie-next";                  // Vue Cookie

// 자주 사용되는 공통 Component
import Pagination from "@/components/common/Pagination";       // Paging 처리
import CommRowCount from "@/components/common/CommRowCount";        // Paging Limit 변경

const app = createApp(App);

app.config.globalProperties.$cookies;

app.use(router);
app.use(VueCookieNext, {
    expire : "7d",
    path : "/",
    domain : "",
    secure : "",
    sameSite : "none"
});

// eslint-disable-next-line vue/multi-word-component-names
app.component('pagination', Pagination);
app.component('comm-row-count', CommRowCount);

app.mount('#app');
