<template>
  <div>
    <h2 class="text-center text-2xl text-gray-700 pt-8">请往下滑动鼠标查看滚动的数字效果</h2>
    <div
      class="flex flex-col xl:flex-row items-center justify-center min-h-screen bg-gray-100"
      style="padding-top: 1000px; padding-bottom: 500px;"
    >
      <div
        class="mx-0 xl:mx-2 my-4 xl:my-0 px-12 py-5 rounded-lg text-white text-2xl shadow bg-blue-500 hover:bg-blue-600"
      >
        <count :to="119"></count>
      </div>
      <div
        class="mx-0 xl:mx-2 my-4 xl:my-0 px-12 py-5 rounded-lg text-white text-2xl shadow bg-purple-500 hover:bg-purple-600"
      >
        <count :to="1119"></count>
      </div>
      <div
        class="mx-0 xl:mx-2 my-4 xl:my-0 px-12 py-5 rounded-lg text-white text-2xl shadow bg-green-500 hover:bg-green-600"
      >
        <count :to="351"></count>
      </div>
      <div
        class="mx-0 xl:mx-2 my-4 xl:my-0 px-12 py-5 rounded-lg text-white text-2xl shadow bg-teal-500 hover:bg-teal-600"
      >
        <count :to="51"></count>
      </div>
      <div
        class="mx-0 xl:mx-2 my-4 xl:my-0 px-12 py-5 rounded-lg text-white text-2xl shadow bg-red-500 hover:bg-red-600"
      >
        <count :to="10"></count>
      </div>
    </div>
  </div>
</template>
<script>
import Count from "@/components/Count";
export default {
  components: {
    Count
  }
};
</script>
