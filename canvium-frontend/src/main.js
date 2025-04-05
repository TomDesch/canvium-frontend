import {createApp} from "vue";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";

import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";
import './assets/style.css'

let app = createApp(App);

app.use(VueSmoothScroll/** @type {any} */)


app.component("Button", Button);
app.component("LinkButton", LinkButton);

app.mount("#app");
