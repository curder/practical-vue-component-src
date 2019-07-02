<template>
    <div><slot></slot></div>
</template>
<script>
import {throttle} from 'lodash';

export default {
    mounted() {
        const el = this.$el;
        const originOffsetTop = el.offsetTop;
        const classList = ['is-fixed-to-top']; // ['fixed', 'w-full', 'top-0', 'z-10'];

        window.addEventListener('scroll', throttle(() => {
            el.classList[
                window.scrollY >= originOffsetTop ? 'add' : 'remove'
            ](...classList);

            // if(window.scrollY >= originOffsetTop) {
            //     el.classList.add(...classList);
            // } else {
            //     el.classList.remove(...classList);
            // }
        }, 300));
    }
}
</script>

<style>
.is-fixed-to-top {
    @apply fixed w-full top-0 z-10;
}
</style>
