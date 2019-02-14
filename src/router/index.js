import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home';
import CoctailPreview from '../components/coctail-preview';

Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'home',
        components:{
            default: Home
        }
    },
    {
        path: '/coctail/:id',
        name:'preview',
        components:{
            default: CoctailPreview
        }
    }
];

export default new Router({routes});