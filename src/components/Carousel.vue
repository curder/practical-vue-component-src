<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
export default {
  props: {
    cellAlign: {
      default: "left"
    },
    contain: {
      type: Boolean,
      default: true
    },
    wrapAround: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: true
    },
    pageDots: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      /* eslint-disable */
      type: Boolean | Number,
      default: true
    },
    pauseAutoPlayOnHover: {
      type: Boolean,
      deault: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
    // More options see: https://flickity.metafizzy.co/options.html
  },
  mounted() {
    new Flickity(this.$el, this.$props);
  }
};
</script>
