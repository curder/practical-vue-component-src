<template>
  <div class="flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-2xl font-semibold mb-6">点击出现菜单</h2>
      <div class="w-64 h-64 bg-gray-300 flex justify-center items-center">
        <dropdown>
          <template v-slot:trigger>
            <button>...</button>
          </template>
          <li>
            <a class="pl-2 pr-8 my-1 leading-loose hover:bg-gray-800" href="#">编辑</a>
          </li>
          <li>
            <a class="pl-2 pr-8 my-1 leading-loose hover:bg-gray-800" href="#">删除</a>
          </li>
        </dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "../components/Dropdown.vue";

export default {
  components: {
    Dropdown
  }
};
</script>
