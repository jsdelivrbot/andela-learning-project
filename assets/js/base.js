import Vue from 'vue';
import Default from './components/default.vue';
import Login from './components/login.vue';
import CreateStudent from './components/create_student.vue';
import ListStudents from './components/list_students.vue';
import EditStudent from './components/edit_student.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	
	{path:'/home', component: Default},
	{path:'/', component: Default},
	{path:'/login', component: Login},
	{path:'/student/create', component: CreateStudent},
	{path:'/student/all', component: ListStudents},
	{path:'/student/edit/:id', component: EditStudent},
]

const router = new VueRouter({
	routes:routes
})

const app = new Vue({
	router

}).$mount('#app');