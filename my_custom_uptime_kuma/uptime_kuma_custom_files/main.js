import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
polyfillCountryFlagEmojis();

// Дальше идёт код main.js, который ты предоставил как "официальный"
// (в нём нет loadToastSettings, а Toast options задаются напрямую)
import "bootstrap";
import { createApp, h } from "vue";
import contenteditable from "vue-contenteditable";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import "./assets/app.scss";
import "./assets/vue-datepicker.scss";
import { i18n } from "./i18n";
import { FontAwesomeIcon } from "./icon.js";
import datetime from "./mixins/datetime";
import mobile from "./mixins/mobile";
import publicMixin from "./mixins/public";
import socket from "./mixins/socket";
import theme from "./mixins/theme";
import lang from "./mixins/lang";
import { router } from "./router";
import { appName } from "./util.ts";
import dayjs from "dayjs";
import timezone from "./modules/dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

const app = createApp({
    mixins: [
        socket,
        theme,
        mobile,
        datetime,
        publicMixin,
        lang,
    ],
    data() {
        return {
            appName: appName
        };
    },
    render: () => h(App),
});

app.use(router);
app.use(i18n);

// Вот здесь настройки для Toast задаются напрямую, без loadToastSettings
const options = {
    position: "bottom-right",
};
app.use(Toast, options);

app.component("Editable", contenteditable);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");

// Expose the vue instance for development
if (process.env.NODE_ENV === "development") {
    console.log("Dev Only: window.app is the vue instance");
    window.app = app._instance;
}