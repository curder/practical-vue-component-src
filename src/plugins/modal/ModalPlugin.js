let Plugin = {
  // eslint-disable-next-line
  install(Vue, options = {}) {
    Vue.component("modal", require("./Component.vue").default);

    Plugin.events = new Vue();

    Vue.prototype.$model = {
      hide() {
        location.hash = "#";
      },

      show(name, params = {}) {
        location.hash = name;

        Plugin.events.$emit("show", params);
      },

      dialog(message, params = {}) {
        if (typeof message === "string") {
          params.message = message;
        } else {
          params = message;
        }
        // eslint-disable-next-line
        return new Promise((resolve, reject) => {
          this.show("dialog", params);

          Plugin.events.$on("clicked", confirmed => {
            resolve(confirmed);
          });
        });
      }
    };
  }
};
export default Plugin;
