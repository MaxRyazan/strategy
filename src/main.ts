import {createApp} from 'vue'
import './scss/global-styles.scss'
import App from './App.vue'
import {router} from "./router";
import PrimeVue from 'primevue/config';
import ReusableButton from '@/components/reusable/buttons/Reusable-button.vue'
import ReusableText from '@/components/reusable/text/ReusableTextForDescription.vue'
import Dialog from "primevue/dialog";
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App)
app
    .use(router)
    .use(pinia)
    .use(PrimeVue)
    .component('ReusableButton', ReusableButton)
    .component('ReusableText', ReusableText)
    .component('Dialog', Dialog)
    .mount('#app')
