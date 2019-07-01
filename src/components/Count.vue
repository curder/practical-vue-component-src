<template>
  <span v-text="count"></span>
</template>
<script>
import inView from "in-viewport";

export default {
  props: ["to"],

  data() {
    return {
      count: 0,
      interval: null
    };
  },

  computed: {
    increment() {
      // 步进值
      return Math.ceil(this.to / 20);
    }
  },

  mounted() {
    inView(this.$el, () => {
      this.interval = setInterval(this.tick, 50);
    });
  },

  methods: {
    tick() {
      if (this.count + this.increment >= this.to) {
        this.count = this.to;
        return clearInterval(this.interval);
      }

      return (this.count += this.increment);
    }
  }
};
</script>
