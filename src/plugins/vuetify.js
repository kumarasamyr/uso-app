import Vue from 'vue';
import {
  transitions,
  VAlert,
  VApp,
  VAvatar,
  VBadge,
  VBottomNav,
  VBtn,
  VCard,
  VDataTable,
  VDialog,
  VDivider,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VImg,
  VList,
  VMenu,
  VNavigationDrawer,
  VSelect,
  VSnackbar,
  VStepper,
  VSubheader,
  VSwitch,
  VTextField,
  VToolbar,
<<<<<<< HEAD
  VCard,
  VBottomNav,
  VBadge,
  VImg,
  VChip,
  VAvatar,
  VSubheader,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'
=======
  Vuetify
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';
>>>>>>> a33bc1d57aca425110da051fefe4d3a6bd6caa05

Vue.use(Vuetify, {
  components: {
    transitions,
    VAlert,
    VApp,
    VAvatar,
    VBadge,
    VBottomNav,
    VBtn,
    VCard,
<<<<<<< HEAD
    VBottomNav,
    VBadge,
    VImg,
    VChip,
    VAvatar,
    VSubheader,
    transitions
=======
    VDataTable,
    VDialog,
    VDivider,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VImg,
    VList,
    VMenu,
    VNavigationDrawer,
    VSelect,
    VSnackbar,
    VStepper,
    VSubheader,
    VSwitch,
    VTextField,
    VToolbar
>>>>>>> a33bc1d57aca425110da051fefe4d3a6bd6caa05
  },
  theme: {
    primary: '#bb133e',
    secondary: '#002147',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  customProperties: true,
  iconfont: 'fa',
});
