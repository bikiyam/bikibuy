<script setup>
const catagory = [
    {
        name: "All",
    },
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
    },
    {
        name: "Construction Materials and Equipment"
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
            <h1 class="text-[35px] font-semibold text-[600] text-white">
                All Categories:
            </h1>
        </div>
        <div class="catlist w-screen h-9 px-8 my-5 flex place-items-center gap-3">
            <div v-for="(cats,catindex) in catagory" :key="catindex" class="min-w-48 px-5 h-full bg-[#393939] rounded-xl flex place-items-center justify-center font-bold text-lg">
                {{ cats.name }}
            </div>
        </div>
        <div class="catlist w-screen h-12 px-14 my-5 flex place-items-center gap-6">
            <div v-for="(cats,catindex) in spec" :key="catindex" class=" flex place-items-center justify-center text-white font-medium text-md">
                {{ cats.name }}
            </div>
        </div>

            
        <div class="flex flex-col gap-2">
            <div class=" w-screen flex gap-5 px-8 overflow-x-scroll overflow-y-hidden flex-wrap">
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                    <HomeItemcard />
                </div>
        </div>  
        
    
    
    </div>



</template>