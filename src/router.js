import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import API from "@/views/Api";
import Contacts from "@/views/Contacts";
import Countries from "@/views/Countries";
import Documentation from "@/views/Documentation";
import Networks from "@/views/Networks";
import AsAndIxp from "@/views/AsAndIxp";
import SignIn from "@/views/user/SignIn";
import AccountActivation from "@/views/user/AccountActivation";
import PersonalPage from "@/views/user/PersonalPage";
import ResetPassword from "@/views/user/ResetPassword";

Vue.use(Router);

const routerBase = "/:locale/";

export default new Router({
  mode: "history", //TODO https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  routes: [
    {
      path: "/",
      redirect: "/en-us/"
    },
    {
      name: "home",
      path: routerBase,
      component: Home
    },
    {
      name: "api",
      path: `${routerBase}api`,
      component: API
    },
    {
      name: "contacts",
      path: `${routerBase}contacts`,
      component: Contacts
    },
    {
      name: "countries",
      path: `${routerBase}countries`,
      component: Countries
    },
    {
      name: "docs",
      path: `${routerBase}docs`,
      component: Documentation
    },
    {
      name: "networks",
      path: `${routerBase}networks`,
      component: Networks
    },
    {
      name: "as_and_ixp",
      path: `${routerBase}as_and_ixp/:asn`,
      component: AsAndIxp
    },
    {
      name: "sign_in",
      path: `${routerBase}sign_in`,
      component: SignIn
    },
    {
      name: "account_activation",
      path: `${routerBase}account_activation`,
      component: AccountActivation
    },
    {
      name: "reset_password",
      path: `${routerBase}reset_password`,
      component: ResetPassword
    },
    {
      name: "personal_page",
      path: `${routerBase}personal_page`,
      component: PersonalPage
    }
  ]
});
