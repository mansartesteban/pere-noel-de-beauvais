import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            let elem = document.querySelector(to.hash);
            return elem && window.scrollTo({top: elem.offsetTop - 80, behavior: 'smooth'});
        }
        return window.scrollTo({top: 0, behavior: 'smooth'});
    },
    routes: [
        {
            path: "/",
            component: () => import("@/Components/Public/Views/Main"),
            children:  [
                {
                    name: "Home",
                    path: "",
                    component: () => import("@/Components/Public/Views/Home")
                },
                {
                    name: "Galery",
                    path: "galery",
                    component: () => import("@/Components/Public/Views/Gallery")
                },
                {
                    name: "Legacy",
                    path: "legacy"
                },
                {
                    name: "Credits",
                    path: "credits"
                }
            ]
        }
   ],
})

export default router