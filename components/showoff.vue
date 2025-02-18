<template>

<h1 class="text-[35px] font-semibold text-[600] text-white px-9 mt-10 mb-6">Today's Featured Products:</h1>
<div class="showoff w-screen h-[calc(100vh-300px)] flex gap-5 overflow-x-scroll overflow-y-hidden mx-9 ">
            <div class="featured flex flex-col w-[500px] min-w-[500px] p-5 h-full bg-gray-500 rounded-3xl relative">
                <img src="../assets/images/armchair.jpg" alt="" class="h-full w-full rounded-3xl absolute top-0 left-0 object-cover">
                <div class="px-3 py-1 bg-white text-black z-10 rounded-lg w-fit text-sm font-semibold">
                    exclusive
                </div>
                <div class="specs z-10 mt-auto flex flex-col gap-2">
                    <h1 class="text-white text-[40px] font-extrabold leading-[35px]">Japanese Indoor Chair</h1>
                    <h2 class="text-white text-[15px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </h2>
                    <div class="flex mt-[1px] place-items-center gap-2">
                        <NuxtLink to="/product">
                            <div class="px-4 py-2 bg-white text-black z-10 rounded-3xl w-fit text-[13px] font-semibold">
                                <h1>View Product</h1>
                            </div>
                        </NuxtLink>
                        <div class="arrowtopright text-black bg-white w-9 h-9 rounded-full flex place-items-center justify-center ml-[-2px]">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="slogan flex flex-col w-[500px] p-5 py-6  h-full rounded-xl min-w-[500px]">
                <h1 class=" text-[42px] font-[700] leading-[50px] text-white">
                    Discover the Essence minimalist furniture design & style 
                </h1>
                <div class="explore mt-auto w-full h-[240px] flex flex-col gap-2">
                    <div class="list ml-2 flex gap-5 text-[#494444] text-[13px]">
                        <div class="ex text-white font-semibold">
                            exclusive
                        </div>
                        <div class="de">
                            Deluxe
                        </div>
                        <div class="in">
                            Indoor
                        </div>
                        <div class="fur">
                            Furniture
                        </div>
                    </div>
                    <div class="card p-5 bg-[#aeaeae] w-full h-full rounded-xl flex">
                        <div class="leftpart h-full w-1/2 flex flex-col place-content-between">
                            <div class="px-4 py-2  bg-gray-200 text-black z-10 rounded-3xl w-fit text-[13px] font-semibold">
                                Exsclusive
                            </div>
                            <div>
                                <h1 class=" font-bold text-[19px]">
                                    Original Air Force 1
                                </h1>
                                <h3 class="text-[13px]">
                                    Black Sleek Minimalist design for Ultimate Productivity and  Comfort
                                </h3>
                            </div>
                            <div class="arrowtopright text-black bg-gray-200 w-9 h-9 rounded-full flex place-items-center justify-center ml-[-2px]">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                            </div>
                        </div>
                            <img src="../assets/images/af1black.jpg" alt="" class="w-[180px] h-full ml-auto rounded-md">
                    </div>
                </div>
            </div>
            <div class="  w-80 min-w-[320px] h-full rounded-xl relative flex overflow-hidden px-2">
                <img src="../assets/images/victus.jpg" alt="" class=" w-[320px] h-full absolute top-0 left-0 object-cover">
                <h1 class=" text-[18px] pb-1 font-normal text-white relative align-bottom flex mt-auto z-20 truncate">HP Victus 15 NVIDIA GeForce RYX 4060 is on the way</h1>
                <div class="bg-[#0000004d] font-semibold backdrop-blur-sm absolute bottom-0 left-0 w-full h-10 flex mt-auto z-10 " style="-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); 
            mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);"></div>
            </div>
            <div class="  w-80 min-w-[320px] h-full rounded-xl relative flex overflow-hidden px-2">
                <img src="../assets/images/j11blue.jpg" alt="" class=" w-[320px] h-full absolute top-0 left-0 object-cover">
                <h1 class=" text-[18px] pb-1 font-medium text-white relative align-bottom flex mt-auto z-20 truncate">Jordan 11 - Retro Blue</h1>
                <div class="bg-[#0000004d] backdrop-blur-sm absolute bottom-0 left-0 w-full h-10 flex mt-auto z-10 " style="-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); 
            mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);"></div>
            </div>
            <div class="  w-80 min-w-[320px] h-full rounded-xl relative flex overflow-hidden px-2">
                <img src="../assets/images/i13pm.jpg" alt="" class=" w-[320px] h-full absolute top-0 left-0 object-cover">
                <h1 class=" text-[18px] pb-1 font-medium text-white relative align-bottom flex mt-auto z-20 truncate">Iphone 13 Pro Max</h1>
                <div class="bg-[#0000004d] backdrop-blur-sm absolute bottom-0 left-0 w-full h-10 flex mt-auto z-10 " style="-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); 
            mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);"></div>
            </div>
            <div class="  w-80 min-w-[320px] h-full rounded-xl relative flex overflow-hidden px-2">
                <img src="../assets/images/oldschool1.jpg" alt="" class=" w-[320px] h-full absolute top-0 left-0 object-cover">
                <h1 class=" text-[18px] pb-1 font-medium text-white relative align-bottom flex mt-auto z-20 truncate">Dodgers Old School Jacket</h1>
                <div class="bg-[#0000004d] backdrop-blur-sm absolute bottom-0 left-0 w-full h-10 flex mt-auto z-10 " style="-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); 
            mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);"></div>
            </div>
            <div class="  w-80 min-w-[320px] h-full rounded-xl relative flex overflow-hidden px-2">
                <img src="../assets/images/i13pm.jpg" alt="" class=" w-[320px] h-full absolute top-0 left-0 object-cover">
                <h1 class=" text-[18px] pb-1 font-medium text-white relative align-bottom flex mt-auto z-20 truncate">Iphone 13 Pro Max</h1>
                <div class="bg-[#0000004d] backdrop-blur-sm absolute bottom-0 left-0 w-full h-10 flex mt-auto z-10 " style="-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%); 
            mask-image: linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);"></div>
            </div>
        </div>
</template>