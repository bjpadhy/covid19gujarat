import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/analytics";
import VueRouter from "vue-router";
import MainContent from "./components/MainContent.vue";
import NewsFeed from "./components/NewsFeed.vue";
Vue.use(VueRouter);

var firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

// Initialize Router
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: MainContent },
    { path: "/newsfeed", component: NewsFeed }
  ]
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
