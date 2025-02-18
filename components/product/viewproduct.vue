<script setup>


const spec = [
    {
        name: "Brand New",
    },
    {
        name: "Fast Delivery"
    },
    {
        name: "Multi Color"
    },
    {
        name: "Normal"
    }
]


const avai = ["Available in stock", "Not available in stock"];
</script>

<template>
    <div class="flex gap-24 h-[calc(100vh-150px)] overflow-hidden px-28 text-white" >
        <div class="mt-8">
            <img src="/assets/images/j11blue.jpg" class="object-cover w-[800px] h-full rounded-lg">
        </div>
        <div class="place-items-start w-[500px] pt-16 overflow-hidden">
            <div class="flex flex-col gap-6 w-full">
                <h1 class="text-3xl font-bold ">JORDAN BOY'S 1 RETRO HIGH OG</h1>
                <div class="catlist flex place-items-center gap-3 flex-wrap">
                    <p class="place-items-center justify-center font-extralight text-md rounded-lg px-3 py-[2px] bg-[#00ff044c]">{{ avai[0] }}</p>
                    <p class="place-items-center justify-center font-extralight text-md rounded-lg px-3 py-[2px] bg-[#ff00004c]">{{ avai[1] }}</p>
                    <div v-for="(cats,catindex) in spec" :key="catindex" class=" flex place-items-center justify-center text-white font-extralight text-md rounded-lg px-3 py-[2px] bg-[#ffffff4c]">
                        {{ cats.name }}
                    </div>
                </div>
                <h1 class="text-[15px] font-extralight">LEGENDARY DESIGN/ PREMIUM STYLE/ The Jordan 1 Retro High delivers the durability, flexibility and support of the original AJ1/ Its high-top design is optimized for growing feet/ Premium upper for durability and looks/ Cupsole construction provides low-profile support/ Solid rubber outsole for durability and traction. </h1>
                <h1 class="text-[22px] font-bold my-2 px-3 align-top"><span class="px-1">$</span>156 </h1>

                <div class="flex gap-8">
                    <div class="ratingimages flex gap-1 ">
                        <img src="/assets/images/YellowStar.png" alt="">
                        <img src="/assets/images/YellowStar.png" alt="">
                        <img src="/assets/images/YellowStar.png" alt="">
                        <img src="/assets/images/YellowStar.png" alt="">
                        <img src="/assets/images/WhiteStar.png" alt="">
                    </div>
                    <h1>4/5 Rating (98 People)</h1>
                </div>
            
                <div class="flex gap-6">
                    <div class=" flex gap-3 bg-white text-black h-12 min-w-56 justify-center place-items-center rounded-lg">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                        <p class="text-lg font-normal">Add to Cart</p>
                    </div>
                    <div class=" flex gap-3 bg-white text-black h-12 w-full justify-center place-items-center rounded-lg">
                        <p class="text-lg font-normal">Order Now</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    

</template>