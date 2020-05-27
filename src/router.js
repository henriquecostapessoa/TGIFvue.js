import Vue from "vue"
import Router from "vue-router"
import Home from "./Views/Home.vue"

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:"/",
            name: "Home",
            component: Home
        },

        {
            path:"/SenateData",
            name:"SenateData",

            component: () =>
                import("./Views/SenateData.vue")
        }
    ]
})