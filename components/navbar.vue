<script setup>
import { IconSearch } from '@tabler/icons-vue';
</script>

<template>
    <div class=" w-full flex place-items-center px-8 h-20 gap-8 z-50 backdrop-blur-sm">
        <NuxtLink to="/">
            <h1 class="text-xl font-extrabold text-white">BIKIBUY</h1>
        </NuxtLink>
        <div class=" flex gap-4 text-[14px] text-gray-500" >
            <div class=" flex gap-2 place-items-center">
                <h1>ETB</h1>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
            </div>
            <div class="flex gap-2 place-items-center">
            <h1>Categories</h1>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
            </div>
        </div>
        <div class="searchbar ml-auto mr-auto">
                <mainInput hasButton placeholder="Search for products..." class="bg-white rounded-xl">
                    <template #button>
                        <mainInputbutton class="hover:bg-gray-100 rounded-xl">Search</mainInputbutton>
                    </template>
                </mainInput>
        </div>
        <div class=" flex place-items-center gap-5">
               <div class=" flex gap-4">
                    <NuxtLink to="/favourites"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"  /></svg></NuxtLink>
                    <NuxtLink to="/cart"><Carticon :cartcount="99" /></NuxtLink>
                </div>
            <div class="accoutline flex gap-2 place-items-center">
                <img src="../assets/person.jfif" class=" w-10 rounded-full place-items-center">
                <div>
                    <h1 class=" text-[12px] text-gray-500 leading-[13px]">Hi Girum</h1>
                    <h1 class=" text-[14px] text-white">Girum Deresse</h1>
                </div>
            </div>
        </div>
        
    </div>
</template>
