<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-100">
    <router-view class="flex-1"/>
    <div class="flex-shrink-0 py-12 text-center">
      <div>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/">首页</router-link>

        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/smooth-scrolling">平滑滚动</router-link>

        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/context-menus">下拉菜单</router-link>

        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          to="/condition-visibility"
        >条件隐藏</router-link>

        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/modals">模态框</router-link>

        <span class="mx-4 text-gray-500">|</span>
        <router-link
          class="font-semibold text-gray-700 hover:underline"
          to="/confirmation-dialog"
        >确认框</router-link>

        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/number-count">滚动的数字</router-link>

        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/carousel">轮播图</router-link>


        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/faqs">切换问答</router-link>
      </div>
      <div class="mt-2">
        <a
          target="_blank"
          href="https://github.com/curder/practical-vue-component-src"
          class="text-sm font-semibold text-gray-600 hover:underline"
        >Source on GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>
