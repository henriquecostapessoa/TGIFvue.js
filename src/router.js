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
        },

        {
            path:"/HouseData",
            name:"HouseData",

            component: () =>
                import("./Views/HouseData.vue")
        },

        {
            path:"/SenateAttendance",
            name:"SenateAttendance",

            component: () =>
                import("./Views/SenateAttendance.vue")
        },

        {
            path:"/HouseAttendance",
            name:"HouseAttendance",

            component: () =>
                import("./Views/HouseAttendance.vue")
        },

        {
            path:"/SenateLoyalty",
            name:"SenateLoyalty",

            component: () =>
                import("./Views/SenateLoyalty.vue")
        },

        {
            path:"/HouseLoyalty",
            name:"HouseLoyalty",

            component: () =>
                import("./Views/HouseLoyalty.vue")
        }

    ]
})