<script setup>
const catagory = [
    {
        name: "Machinary",
    },
    {
        name: "Clothing"
    },
    {
        name: "Electronics"
    },
    {
        name: "Garden"
    },
    {
        name: "Sports"
    }
]

const spec = [
    {
        name: "Brand New",
    },
    {
        name: "Fast Delivery"
    },
    {
        name: "Used"
    },
    {
        name: "Multi Color"
    },
    {
        name: "Normal"
    }
]
</script>

<template>
    <div>
        <div class="title px-8 mt-6">
            <h1 class="text-[45px] font-semibold text-[600] text-[#494444]">
                Categories / Machinery
            </h1>
        </div>
        <div class="catlist w-screen h-12 px-8 my-5 flex place-items-center gap-3">
            <div v-for="(cats,catindex) in catagory" :key="catindex" class="w-64 h-full bg-white rounded-xl flex place-items-center justify-center font-bold text-lg">
                {{ cats.name }}
            </div>
        </div>
        <div class="catlist w-screen h-12 px-14 my-5 flex place-items-center gap-6">
            <div v-for="(cats,catindex) in spec" :key="catindex" class=" flex place-items-center justify-center  font-bold text-md">
                {{ cats.name }}
            </div>
        </div>

            
        <div class="flex flex-col gap-2">
            <div class=" w-screen flex gap-5 px-8 overflow-x-scroll overflow-y-hidden">
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                </div>
                <div class=" w-screen flex gap-5 px-8 overflow-x-scroll overflow-y-hidden">
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                </div>
                <div class=" w-screen flex gap-5 px-8 overflow-x-scroll overflow-y-hidden">
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                </div>
                <div class=" w-screen flex gap-5 px-8 overflow-x-scroll overflow-y-hidden">
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                </div>
        </div>  
        
    
    
    </div>



</template>