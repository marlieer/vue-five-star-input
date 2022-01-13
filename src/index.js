import VueFiveStarInput from "./component.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-five-star-input", VueFiveStarInput);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueFiveStarInput.install = install;

export default VueFiveStarInput;