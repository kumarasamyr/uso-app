import EventList from "./pages/Events/EventList.vue";
import Router from "vue-router";
import store from './store';
import Vue from "vue";
import { account } from './store/account.module';
import { isNullOrUndefined } from "util";

Vue.use(Router);

function noAuth(to, from, next) {
  if (store.state.account.status.loggedIn) {
    next('/');
  } else {
    next();
  }
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventList
    },
    {
      path: "/agenda",
      name: "agenda",
      component: () => import("./pages/Session/Agenda/Agenda.vue")
    },
    {
      path: "/bookmark",
      name: "bookmark",
      component: () => import("./pages/Bookmark.vue")
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./pages/Events/EventList.vue")
    },
    {
      path: "/event/details",
      name: "eventdetails",
      component: () => import("./pages/Events/EventDetails.vue")
    },
    {
<<<<<<< HEAD
      path: '/speakerbio',
      name: 'speakerbio',
      component: () => import('./pages/Speakerbio.vue')
    },
    {
      path: '/attendeelist',
      name: 'attendeelist',
      component: () => import('./pages/AttendeeList.vue')
    },
    {
      path: '/eventMaterialHome',
      name: 'eventMaterialHome',
      component: () => import('./pages/EventMaterialHome.vue')
    },
=======
      path: "/events/feedback",
      name: "feedback",
      component: () => import("./pages/Events/Feedback.vue")
    },
    {
      path: "/events/progress",
      name: "progress",
      component: () => import("./pages/Events/MyProgress.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("./pages/Info/Faq.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Account/Login.vue'),
      beforeEnter: noAuth
    },
    {
      path: "/notification",
      name: "notification",
      component: () => import("./pages/Notification.vue")
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./pages/Account/Profile.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./pages/Account/Register.vue'),
      beforeEnter: noAuth
    },
    {
      path: "/session-info",
      name: "session-info",
      component: () => import("./pages/Session/SessionInfo/SessionInfo.vue")
    },
    {
      path: "/take-notes",
      name: "take-notes",
      component: () => import("./pages/Session/Notes/TakeNotes.vue")
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('./pages/Account/Setup.vue'),
      beforeEnter: function(to, from, next) {
        if (account.state.status.registered) {
          next();
        } else {
          next('/register');
        }
      }
    },
    {
      path: '/startup',
      name: 'startup',
      component: () => import('./pages/Startup.vue'),
      beforeEnter: noAuth
    }
>>>>>>> a33bc1d57aca425110da051fefe4d3a6bd6caa05
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => isNullOrUndefined(route.beforeEnter));
  if (requiresAuth) {
    if (account.state.status.loggedIn) {
      next();
    } else {
      next('/startup');
    }
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  store.dispatch('alert/clear').then(() => {
    store.dispatch('common/setNewBacklink', from.path);
    store.dispatch('common/setShowBackButton', false);
    store.dispatch('common/setNewHeading', '');
    next();
  });
});

export default router;
