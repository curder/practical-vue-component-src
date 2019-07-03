<template>
    <section class="mb-10 md:flex md:items-start pb-0">
            <h3 class="sticky font-bold text-3xl leading-none text-center md:text-left text-gray-700 py-2 mb-6 md:mr-10 bg-gray-400 border md:border-none border-gray-500 md:bg-transparent z-10" style="top: -1px;">
            {{ data.index.toUpperCase() }}    
            </h3>
            <div class=" flex flex-wrap">
                <a v-for="(item, k) in data.items" 
                    :key="k" 
                    href="#" 
                    class="mx-1 border border-gray-300 button hover:bg-blue-500 hover:text-white mb-5 px-6 py-1 rounded-full font-medium">
                    {{ item.label }} ({{ item.count }})
                </a></div>
        </section>
</template>
<script>
export default {
    props: ['data']
}
</script>

