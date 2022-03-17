import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";

// 자주 사용되는 공통 Component
import Pagination from "@/components/common/Pagination";       // Paging 처리
import CommRowCount from "@/components/common/CommRowCount";        // Paging Limit 변경

const app = createApp(App);
app.use(router);

// app.component('pagination', Pagination);
app.component('pagination', Pagination);
app.component('comm-row-count', CommRowCount);

app.mount('#app');
