<template>
  <a :href="href" @click.prevent="scroll">
    <slot></slot>
  </a>
</template>

<script>
import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

export default {
  name: "ScrollLink",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {
    scroll() {
      document.querySelector(this.href).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
