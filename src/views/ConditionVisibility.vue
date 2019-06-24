<template>
  <div class="container mx-auto">
    <h2 class="text-2xl font-bold my-8 text-center">条件隐藏</h2>
    <p class="mb-8 text-center text-gray-600">鼠标滚动右下脚出现“新增按钮”，当鼠标滚动到视窗出现“新增文章”则隐藏右下角“新增按钮”</p>
    <div class="w/3/4 bg-gray-200 p-4" style="height: 2000px">
      <a href="#" id="new-post-link" class="text-blue-500 hover:underline">新增文章</a>
      <visible when-hidden="#new-post-link">
        <button
          class="bg-blue-500 hover:bg-blue-600 hover:shadow-lg rounded-full w-24 h-24 text-white text-4xl fixed z-10 right-0 bottom-0 mr-4 mb-4 flex items-center justify-center focus:outline-none"
        >&plus;</button>
      </visible>
    </div>
  </div>
</template>
<script>
import Visible from "../components/Visible.vue";

export default {
  components: {
    Visible
  }
};
</script>
