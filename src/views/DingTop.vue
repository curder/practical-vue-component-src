<template>
    <div>
        <div style="height:600px;"></div>
        <div ref="ping-top" class="bg-blue-300 border border-blue-400 w-full flex items-center justify-center">
            <h2 class="py-4 text-3xl text-blue-700 text-center">鼠标往下滑动到一定的条件后悬浮在顶部</h2>
        </div>
        <div style="height:600px;"></div>
        <div style="height:600px;"></div>
        <div style="height:600px;"></div>
        <div style="height:600px;"></div>
    </div>
</template>
<script>
import {throttle} from 'lodash';
export default {
    mounted() {
        let el = this.$refs['ping-top'];
        const originOffsetTop = el.offsetTop;
        let classList = ['fixed', 'w-full', 'top-0', 'z-10'];

        window.addEventListener('scroll', throttle(() => {
            if(window.scrollY >= originOffsetTop) {
                el.classList.add(...classList);
            } else {
                el.classList.remove(...classList);
            }
        }, 300));
    }
}
</script>
