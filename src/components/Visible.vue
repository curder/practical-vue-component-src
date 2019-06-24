<template>
  <transition name="fade">
    <div v-show="shouldDisplay">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import inViewport from "in-viewport";

export default {
  props: {
    whenHidden: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      shouldDisplay: false
    };
  },

  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        this.shouldDisplay = !inViewport(
          document.querySelector(this.whenHidden)
        );
      },
      { passive: true }
    );
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

