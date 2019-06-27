<template>
  <button @click="confirm">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: ""
    },

    cancleButton: {
      default: "取消"
    },

    confirmButton: {
      default: "确定"
    }
  },

  data() {
    return {
      confirmed: false
    };
  },

  methods: {
    confirm(e) {
      if (this.confirmed) {
        return;
      }

      e.preventDefault();
      this.$model.dialog(this._props).then(confirm => {
        if (confirm) {
          this.confirmed = true;
          this.$el.click();
        }
      });
    }
  }
};
</script>
