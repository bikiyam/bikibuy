<template>
    <div class=" px-8">
        <h1 class="text-[50px] font-semibold text-[#494444] py-6">Your Favourites</h1>
        <div class="flex flex-col gap-2">
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



        
    </div>
    <div>
        <Footer/>
    </div>
</template>