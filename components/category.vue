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
        name: "Construction Materials"
    },
    {
        name: "Construction Materials"
    },
    {
        name: "Construction Materials"
    },
    {
        name: "Construction Materials"
    },
    {
        name: "Construction Materials"
    },
    {
        name: "Construction Materials"
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
    <div class="justify-center">
        <div class="w-[88%] ml-auto mr-auto">
            <div class="title px-8 mt-6">
            <h1 class="text-[35px] font-semibold text-[600] text-white">
                All Categories:
            </h1>
        </div>
        <div class="catlist w-full mx-6 my-5 flex place-items-center gap-3 overflow-x-scroll ">
            <div v-for="(cats,catindex) in catagory" :key="catindex" class=" px-8 h-9 bg-[#393939] rounded-xl flex place-items-center justify-center font-bold text-lg whitespace-nowrap">
                {{ cats.name }}
            </div>
        </div>
            <div class="catlist w-screen h-12 px-8 my-5 flex place-items-center gap-6">
                <div v-for="(cats,catindex) in spec" :key="catindex" class=" flex place-items-center justify-center text-white font-normal text-md">
                    {{ cats.name }}
                </div>
            </div>
            
            <div class="flex flex-col gap-2">
                <div class=" justify-center place-items-center">
                    <div class=" flex gap-5 px-8 overflow-x-scroll overflow-y-hidden flex-wrap">
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
        </div>
        
    
    
    </div>



</template>