<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    cartcount:{
            default: 0,
    }
})
</script>

<template>
    <div class=" relative">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
        <h1 class=" absolute top-[-12px] right-[-10px] bg-[#ffffff33] px-[6px] rounded-full text-sm text-white">{{ props.cartcount }}</h1>
    </div>
</template>