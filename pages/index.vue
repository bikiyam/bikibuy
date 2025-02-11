<script setup lang="ts">
import Category from '~/components/category.vue';
</script>



<template>
    <div class="flex flex-col gap-5">
        <div>
            <Showoff/>
            <Category/>
        </div> 

        <div>
            <Advert/>
            <Newsletter/>
            <Footer/>
        </div>

        <div>
            
        </div>
    </div>



</template>


<style>
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>