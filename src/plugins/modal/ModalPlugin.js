let Plugin = {
  install(Vue, options = {}) {
    Vue.component("modal", require("./Component.vue").default);

    Vue.prototype.$model = {
      hide() {
        location.hash = "#";
      },

      show(name) {
        location.hash = name;
      }
    };
  }
};
export default Plugin;
