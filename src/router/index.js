import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Index.vue'
import Product from '../views/product/index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/product', component: Product}
    ],
});


export default router;