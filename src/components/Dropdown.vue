<template>
  <div class="dropdown-list">
    <div class="dropdown-trigger" aria-haspopup="true" :aria-expanded="open" @click="open = !open">
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
      <ul
        v-show="open"
        class="dropdown-menu py-2 absolute bg-gray-900 rounded text-white text-xs shadow z-10"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    };
  },

  watch: {
    open(open) {
      if (open) {
        document.addEventListener("click", this.closeIfClickOutside);
      }
    }
  },

  methods: {
    closeIfClickOutside(event) {
      if (!event.target.closest(".dropdown-list")) {
        this.open = false;
      }
    }
  }
};
</script>
<style>
.pop-out-quick-enter-active,
.pop-out-quick-leave-active {
  transition: all 0.5s;
}

.pop-out-quick-enter,
.pop-out-quick-leave-to {
  opacity: 0;
  transition: translateY(-7px);
}
</style>

