import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import "uno.css";

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia
  };
}
