<template>
  <div class="container mx-auto text-center">
    <h2 class="text-5xl font-bold text-gray-700 py-10">模态框</h2>

    <div class>
      <a href="#cancel-modal" class="text-blue-500 hover:underline">取消</a>

      <modal name="cancel-modal">
        <h1 class="text-2xl text-center mb-2 font-bold text-gray-700">确定离开吗？</h1>
        <p
          class="leading-snug text-gray-600"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, explicabo. Veritatis excepturi expedita harum doloribus molestiae incidunt laudantium, aliquid illum ab, repudiandae, repellat minus dicta! Repudiandae placeat quae officia est.</p>

        <template v-slot:footer>
          <a
            class="bg-gray-200 rounded px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-gray-900"
            href="#"
          >Cancle</a>
          <a
            class="bg-blue-500 px-4 py-2 rounded ml-2 text-white hover:bg-blue-600"
            href="#continue-modal"
          >Continue</a>
        </template>
      </modal>

      <modal name="continue-modal">
        <h1 class="text-2xl text-center mb-2 font-bold text-gray-700">确定吗？</h1>
        <p
          class="leading-snug text-gray-600"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, explicabo. Veritatis excepturi expedita harum doloribus molestiae incidunt laudantium, aliquid illum ab, repudiandae, repellat minus dicta! Repudiandae placeat quae officia est.</p>

        <template v-slot:footer>
          <a
            class="bg-gray-200 rounded px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-gray-900"
            href="#"
          >Cancle</a>
          <a
            class="bg-blue-500 px-4 py-2 rounded ml-2 text-white hover:bg-blue-600"
            href="#a"
          >Continue</a>
        </template>
      </modal>
    </div>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal
  }
};
</script>
