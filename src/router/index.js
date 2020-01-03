import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import AddTask from '../components/AddTask.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import EditTask from '../components/EditTask.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/add_task',
            name: 'addtask',
            component: AddTask
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/update_task:id',
            name: 'edittask',
            component: EditTask
        },
    ]
})
