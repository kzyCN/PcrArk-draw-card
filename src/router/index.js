import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import pcr from '../views/Pcr/Pcr.vue';
import Arknights from '../views/Ark/Arknights.vue';
import about from '../views/About.vue';
import PcrDrawCard from '../components/PcrComponents/PcrDrawCard.vue';
import notfound from '../views/NotFound.vue';

Vue.use(VueRouter, Element);

const routes = [
  // 公主连结蛋池模拟
  {
    path: '/',
    component: pcr,
    meta: { title: '公主连结蛋池模拟' },
    children: [
      // { path: '/', component: index, meta: { title: '公主连结蛋池模拟' } },
      { path: '/', component: PcrDrawCard, meta: { title: '公主连结蛋池模拟' } },
      { path: 'about', component: about, meta: { title: '关于|公主连结蛋池模拟' } },
    ],
  },

  // 明日方舟蛋池模拟
  {
    path: '/arknights',
    component: Arknights,
    meta: {
      title: '明日方舟蛋池模拟',
    },
  },

  // 404路由
  {
    path: '*',
    component: notfound,
    meta: { title: '页面走丢了~' },
  },
];

// 将路由模式改成history模式
const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
