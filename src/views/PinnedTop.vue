<template>
    <div>
        <div class="block md:hidden" style="height:300px;"></div>
        <div class="hidden md:block" style="height:600px;"></div>
        <pinned>
            <div class="bg-blue-300 border border-blue-400 w-full flex items-center justify-center shadow-inner">
                <h2 class="py-4 text-xl md:text-3xl text-blue-700 text-center">鼠标往下滑动到一定条件后吸附于顶部</h2>
            </div>
        </pinned>
        <div class="block md:hidden" style="height:300px;"></div>
        <div class="hidden md:block" style="height:600px;"></div>

        <div style="height:600px;">
            <pinned>
                <div class="bg-gray-300 border border-gray-400 w-full flex items-center justify-center shadow-xl">
                  <h2 class="py-4 text-xl md:text-3xl text-gray-700 text-center">鼠标往下滑动到一定条件后吸附于顶部</h2>
                </div>
            </pinned>
        </div>

        <div class="block md:hidden" style="height:300px;"></div>
        <div class="hidden md:block" style="height:600px;"></div>
    </div>
</template>
<script>
import Pinned from '@/components/Pinned.vue';

export default {
    components: {
        Pinned
    },
    
}
</script>
