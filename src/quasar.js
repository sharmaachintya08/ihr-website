import Vue from "vue";

import "@/styles/quasar.styl";
import "quasar/dist/quasar.ie.polyfills";
import iconSet from "quasar/icon-set/fontawesome-v5.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import {
  Quasar,
  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSelect,
  QMenu,
  QSeparator,
  QAvatar,
  QSpace,
  QSpinner,
  QBtnDropdown,
  ClosePopup,
  QCard,
  QCardSection,
  QCardActions,
  QTabPanels,
  QTabPanel,
  QTabs,
  QTab,
  QRouteTab,
  QImg,
  QRange,
  QTime,
  QDate,
  QInput,
  QPopupProxy,
  QPageSticky,
  QTable,
  QTh,
  QTr,
  QTd,
  QExpansionItem,
  QResizeObserver,
  QBanner,
  QScrollArea,
  QToggle,
  QInnerLoading,
  QSpinnerGears,

  //non component
  Cookies
} from "quasar";

Vue.use(Quasar, {
  components: {
    QLayout,
    QHeader,
    QFooter,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSelect,
    QMenu,
    QSeparator,
    QAvatar,
    QSpace,
    QSpinner,
    QBtnDropdown,
    QCard,
    QCardSection,
    QCardActions,
    QTabPanels,
    QTabPanel,
    QTabs,
    QTab,
    QRouteTab,
    QImg,
    QRange,
    QTime,
    QDate,
    QInput,
    QPopupProxy,
    QPageSticky,
    QTable,
    QTh,
    QTr,
    QTd,
    QExpansionItem,
    QResizeObserver,
    QBanner,
    QScrollArea,
    QToggle,
    QInnerLoading,
    QSpinnerGears
  },
  directives: { ClosePopup },
  extras: ["material-icons", "fontawesome-v5"],
  plugins: { Cookies },
  iconSet: iconSet
});
