<template>
  <div class>
    <div class="text-center">
      <h3 class="font-medium py-2 text-4xl">锚点平滑滚动</h3>
      <scroll-link href="#scroll-bottom" class="hover:underline text-base text-blue-600">点击平滑滚动</scroll-link>
    </div>

    <div style="height:2000px;"></div>

    <div id="scroll-bottom" class="container mx-auto">
      <h3 class="text-3xl text-gray-700 py-3">列表</h3>
      <div class="h-64 flex -mx-2">
        <div
          class="w-1/3 bg-blue-200 h-full mx-2 text-blue-700 text-3xl flex items-center justify-center"
        >项目01</div>
        <div
          class="w-1/3 bg-teal-200 h-full mx-2 text-teal-700 text-3xl flex items-center justify-center"
        >
          <scroll-link href="#app" class="hover:underline text-base text-blue-600">返回顶部</scroll-link>
        </div>
        <div
          class="w-1/3 bg-purple-200 h-full mx-2 text-purple-700 text-3xl flex items-center justify-center"
        >项目03</div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollLink from "../components/ScrollLink.vue";

export default {
  components: {
    ScrollLink
  },
  methods: {}
};
</script>
