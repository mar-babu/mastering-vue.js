import { createRouter, createWebHistory } from "vue-router";
import Products from '../components/Products.vue';
import Product from '../components/Product.vue';

const routes = [
    {
        path: '/', components: {
            default: Products
        }
    },    
    {
        path: '/product/:id', components: {
            default: Product
        },
        name: 'product'
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router;
