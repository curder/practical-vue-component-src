<template>
  <div class="bg-gray-100 flex items-center justify-center">
    <div style="width: 640px; height: 480px;">
      <carousel>
        <img src="@/assets/images/00.jpg">
        <img src="@/assets/images/01.jpg">
        <img src="@/assets/images/02.jpg">
        <img src="@/assets/images/03.jpg">
        <img src="@/assets/images/04.jpg">
        <img src="@/assets/images/05.jpg">
        <img src="@/assets/images/06.jpg">
        <img src="@/assets/images/07.jpg">
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
