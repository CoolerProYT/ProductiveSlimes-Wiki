import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import MeltingRecipe from './components/MeltingRecipe.vue'
import SolidingRecipe from "@/components/SolidingRecipe.vue";
import DnaExtractingRecipe from "@/components/DnaExtractingRecipe.vue";
import DnaSynthesizingRecipe from "@/components/DnaSynthesizingRecipe.vue";
import './assets/index.css'

const routes = [
    { path: '/Home', component: Home },
    { path: '/MeltingRecipe', component: MeltingRecipe },
    { path: '/SolidingRecipe', component: SolidingRecipe },
    { path: '/DnaExtractingRecipe', component: DnaExtractingRecipe },
    { path: '/DnaSynthesizingRecipe', component: DnaSynthesizingRecipe },
    { path: '/:pathMatch(.*)*', redirect: '/Home' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app')