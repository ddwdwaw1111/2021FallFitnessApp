import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma'
import { Notification, Config, Modal } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(Modal)
    .use(Notification)
    .use(Config, {
        iconPack: 'fas'
    })
    .mount('#app')