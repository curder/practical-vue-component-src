<template>
  <modal name="dialog">
    {{ params.message }}
    <template v-slot:footer>
      <button
        class="bg-gray-500 px-6 py-2 rounded-lg text-white hover:bg-gray-600"
        @click.prevent="handleClick(false)"
        v-text="params.cancleButton"
      ></button>
      <button
        class="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 ml-4"
        @click.prevent="handleClick(true)"
        v-text="params.confirmButton"
      ></button>
    </template>
  </modal>
</template>
<script>
import Modal from "../plugins/modal/ModalPlugin.js";

export default {
  data() {
    return {
      params: {
        message: "确定?",
        cancleButton: "取消",
        confirmButton: "确定"
      }
    };
  },

  beforeMount() {
    Modal.events.$on("show", params => {
      this.params = Object.assign(this.params, params);
    });
  },

  methods: {
    handleClick(confirmed) {
      Modal.events.$emit("clicked", confirmed);

      this.$model.hide();
    }
  }
};
</script>
