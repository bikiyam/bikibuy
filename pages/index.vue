<script setup lang="ts">
import Category from '~/components/category.vue';
</script>



<template>
    <div class="flex flex-col gap-16">
        <Navbar/>
        <Showoff/>
        <Category/>
        <Advert/>
        <Newsletter/>
        <Footer/>
    </div>



</template>


<style>
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>