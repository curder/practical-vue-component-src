<template>
  <div>
    <h2 class="text-center text-2xl text-gray-600 pt-8">请往下滑动鼠标查看滚动的数字效果</h2>
    <div class="flex items-center justify-center bounce">
      <svg
        class="fill-current text-gray-500 w-12 h-24"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M483.555556 853.333333a28.558222 28.558222 0 0 0 20.138666-8.305777L745.073778 603.648a28.444444 28.444444 0 0 0-40.220445-40.220444L483.555556 784.668444 262.314667 563.427556A28.444444 28.444444 0 0 0 222.094222 603.648l241.322667 241.379556a28.558222 28.558222 0 0 0 20.138667 8.305777z"
        ></path>
        <path
          d="M455.111111 824.888889V199.111111a28.444444 28.444444 0 0 1 56.888889 0v625.777778a28.444444 28.444444 0 0 1-56.888889 0z"
        ></path>
      </svg>
    </div>
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
<style>
.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
