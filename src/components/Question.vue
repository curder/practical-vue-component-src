<template>
  <div class="mb-8 flex">
    <div class="mr-4">
      <button
        @click="toggle"
        class="border border-solid border-grey-dark rounded-full w-6 h-6 flex items-center justify-center text-xs text-gray-900 font-bold leading-none cursor-pointer focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" class="fill-current">
          <path
            v-if="isOpen"
            d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
          <path v-else d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path>
        </svg>
      </button>
    </div>
    <div class="leading-loose">
      <h3 @click="toggle"
          class="font-bold text-lg md:text-2xl mb-3 text-gray-800 leading-none cursor-pointer hover:text-gray-900"
          v-text="question.ask"></h3>
      <div class="text-gray-800 hover:text-gray-900"
           v-text="question.answer"
           v-show="isOpen"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    }
  },

  methods: {
    toggle() {
      const currentIndex = this.currentIndex === this.index ? null : this.index;

      this.$emit('toggle', {currentIndex})
    }
  }
}
</script>
