<template>
  <div class="bg-gray-100 flex items-center justify-center">
    <div style="width: 640px; height: 480px;">
      <carousel>
        <img src="https://placeimg.com/640/480/any?1">
        <img src="https://placeimg.com/640/480/any?2">
        <img src="https://placeimg.com/640/480/any?3">
        <img src="https://placeimg.com/640/480/any?4">
        <img src="https://placeimg.com/640/480/any?5">
      </carousel>
    </div>
  </div>
</template>
<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Carousel
  }
};
</script>
