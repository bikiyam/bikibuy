<template>
    <div class=" flex px-8 gap-7">
        <div class="  w-full h-[550px] relative">
            <img src="../assets/images/bodybuilder.png" class="w-full h-full object-cover rounded-3xl absolute top-0 left-0 z-[-2]">
            <div class="specs z-10 mt-auto flex flex-col gap-2 px-3 py-3">
                    <div class=" flex">
                        <div class="ex text-white bg-[#ffffff49] font-semibold w-fit px-2 rounded-xl">
                            Minimalist
                        </div>
                        <div class="ex text-white bg-[#ffffff49] font-semibold w-fit px-2 rounded-xl">
                            Japanese
                        </div>
                    </div>
                    <h1 class="text-white text-[40px] font-extrabold ">650,250ETB <span class=" text-[18px] text-red-600">750,555ETB</span> </h1>
                    
                    <div class="flex mt-[1px] place-items-center">
                        
                    </div>
                    
                </div>
        </div>

        <div class="  w-full h-[550px] pt-7">
            <h1 class="text-[35px] font-[700] leading-5">L Sized Japandai Style Bed</h1>

            <div class=" flex py-6 gap-7">
                <div class=" flex gap-3">
                    <img src="../assets/images/YellowStar.png" alt="">
                    <img src="../assets/images/YellowStar.png" alt="">
                    <img src="../assets/images/YellowStar.png" alt="">
                    <img src="../assets/images/WhiteStar.png" alt="">
                    <img src="../assets/images/WhiteStar.png" alt="">
                </div>
                <h1>3.8/5 Star Rating</h1>
            </div>            

            <h1 class="text-sm font-[500] text-[#676767] leading-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</h1>
            <h1 class="text-[15px] font-[500] py-3">See More ></h1>
            <div class="flex flex-col gap-2">
                <div class=" flex w-full gap-2">
                    <div class="flex justify-between bg-[#e6e6e6] place-items-center px-4 py-2 rounded-xl w-full">
                        <div>
                            <h1 class=" text-sm text-[#676767] font-[500] leading-3">Brand</h1>
                            <h1 class=" text-[16px] text-black font-[500]">EMOOR TAMMU COLLECTION</h1>
                        </div>
                        <div>
                            <img src="../assets/images/sidearrow.png" alt="">
                        </div>
                    </div>
                    <div class="flex justify-between bg-[#e6e6e6] place-items-center px-4 py-2 rounded-xl w-full">
                        <div>
                            <h1 class=" text-sm text-[#676767] font-[500] leading-3">Available In Stock</h1>
                            <h1 class=" text-[16px] text-black font-[500]">5</h1>
                        </div>
                        <div>
                            <img src="../assets/images/sidearrow.png" alt="">
                        </div>
                    </div>
                </div>
                <div class=" flex w-full gap-2">
                    <div class="flex justify-between bg-[#e6e6e6] place-items-center px-4 py-2 rounded-xl w-full">
                        <div>
                            <h1 class=" text-sm text-[#676767] font-[500] leading-3">Sleeping Capacity </h1>
                            <h1 class=" text-[16px] text-black font-[500]">5 People</h1>
                        </div>
                        <div>
                            <img src="../assets/images/sidearrow.png" alt="">
                        </div>
                    </div>
                    <div class="flex justify-between bg-[#e6e6e6] place-items-center px-4 py-2 rounded-xl w-full">
                        <div>
                            <h1 class=" text-sm text-[#676767] font-[500] leading-3">Man facture Date</h1>
                            <h1 class=" text-[16px] text-black font-[500]">10/9/2017</h1>
                        </div>
                        <div>
                            <img src="../assets/images/sidearrow.png" alt="">
                        </div>
                    </div>
                </div>
                <div class=" flex w-full gap-2">
                    <div class="flex justify-between bg-[#e6e6e6] place-items-center px-4 py-2 rounded-xl w-full">
                        <div>
                            <h1 class=" text-sm text-[#676767] font-[500] leading-3">Condition</h1>
                            <h1 class=" text-[16px] text-black font-[500]">Brand New</h1>
                        </div>
                        <div>
                            <img src="../assets/images/sidearrow.png" alt="">
                        </div>
                    </div>
                    <div class="flex justify-between bg-[#e6e6e6] place-items-center px-4 py-2 rounded-xl w-full">
                        <div>
                            <h1 class=" text-sm text-[#676767] font-[500] leading-3">Production Location</h1>
                            <h1 class=" text-[16px] text-black font-[500]">Lemmi Kura Betam Fabrica</h1>
                        </div>
                        <div>
                            <img src="../assets/images/sidearrow.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex gap-3 py-6">
                <div class=" bg-white flex justify-between place-items-center w-[50%] h rounded-xl px-8"> 
                    <h1>-</h1>
                    <h1>1</h1>
                    <h1>+</h1>
                </div>
                <div class="bg-black w-full rounded-xl h-12 px-4 flex justify-center place-items-center">
                    <div class="flex gap-2">
                        <img src="../assets/images/cart.png" alt="">
                        <h1 class="text-white">Add to cart</h1>
                    </div>
                </div>
            </div>
            <div class=" bg-white rounded-xl h-12 flex justify-center place-items-center">
                <h1>Buy Now</h1>
            </div>

        </div>
    </div>


    <div class=" px-8 ">
        <h1 class="text-3xl font-[700] py-12">Recommended Products</h1>
        <div class=" w-screen flex gap-5 overflow-x-scroll overflow-y-hidden">
            <HomeItemcard />
            <HomeItemcard />
            <HomeItemcard />
            <HomeItemcard />
            <HomeItemcard />
        </div>
        <div class=" w-screen flex gap-5 overflow-x-scroll overflow-y-hidden">
            <HomeItemcard />
            <HomeItemcard />
            <HomeItemcard />
            <HomeItemcard />
            <HomeItemcard />
        </div>
    </div>


    <div>
        <Footer/>
    </div>

    <!-----
    <div class="featured flex flex-col w-[500px] min-w-[500px] p-5 h-full bg-gray-500 rounded-3xl relative">
                <img src="../assets/images/bodybuilder.png" alt="" class="h-full rounded-3xl absolute top-0 left-0">
                <div class="px-3 py-1 bg-white text-black z-10 rounded-lg w-fit text-sm font-semibold font-['Inter']">
                    exclusive
                </div>
                <div class="specs z-10 mt-auto flex flex-col gap-2">
                    <h1 class="text-white font-['Inter'] text-[40px] font-extrabold leading-[30px]">Japanese Indoor Chair</h1>
                    <h2 class="text-white font-['Inter'] text-[15px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </h2>
                    <div class="flex mt-[1px] place-items-center">
                        <div class="px-4 py-2 bg-white text-black z-10 rounded-3xl w-fit text-[13px] font-semibold font-['Inter']">
                            View Product
                        </div>
                        <div class="arrowtopright text-black bg-white w-9 h-9 rounded-full flex place-items-center justify-center ml-[-2px]">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                        </div>
                    </div>
                    
                </div>
            </div>

    ---->
</template>