<script setup>

const order = [
    {
        name: "All",
    },
    {
        name: "Done Orders"
    },
    {
        name: "Not shipped"
    },
    {
        name: "On Process"
    },
    {
        name: "Cancelled"
    }
]

</script>

<template>
    <div class="bg-white m-16 h-[72vh] p-16 rounded-3xl flex gap-10">
        <div class=" w-[30%]">
            <div class="w-full h-[350px] relative ">
                <img src="../assets/images/bodybuilder.png" class="h-full w-full object-cover rounded-3xl">
                <img src="../assets/images/editimage.png" class=" absolute top-0 left-0 w-full h-[350px]">
            </div>
            <h1 class="bg-[#d3d3d3] text-black h-10 w-full rounded-xl mt-3 flex place-items-center justify-center">Edit Profile</h1>
        
        </div>
        <div class=" w-full">
            <div class=" flex gap-2">
                <h1 class=" bg-[#d3d3d3] text-black h-8 w-fit rounded-xl px-3 py-2 flex justify-center place-items-center text-sm">Profile</h1>
                <h1 class="  text-black h-8 w-fit rounded-xl px-3 py-2 flex justify-center place-items-center text-sm">Messages</h1>
            </div>
            <div class="flex gap-3 h-fit place-items-end">
                <h1 class="text-[45px] font-semibold text-[600] text-[#000000] leading-9 mt-5">Girum Deresse</h1>
                <div class="flex place-items-end gap-0">
                    <img src="../assets/images/location.png" class="w-4 h-4 mb-[6px]"> 
                    <h1 class="font-semibold">Addis Ababa, Rwanda 11 Street</h1>  
                </div>
            </div>    
            
            <div class="flex mt-5 gap-8">
                <div class="w-full flex flex-col gap-4">
                    <div>
                        <h1 class="text-sm text-[#636363]">Phone</h1>
                        <h1 class=" px-3 py-2 text-sm text-black bg-[#d3d3d3] rounded-xl">+251944307850</h1>
                    </div>
                    <div>
                        <h1 class="text-sm text-[#636363]">Email Address</h1>
                        <div class="px-3 py-2 text-sm text-black bg-[#d3d3d3] flex justify-between rounded-xl">
                            <h1>girumderesse</h1>
                            <h1>@gmail.com</h1>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-sm text-[#636363]">Address</h1>
                        <h1 class=" px-3 py-2 text-sm text-black bg-[#d3d3d3] rounded-xl">Welkayit Tegede</h1>
                    </div>
                    
                    
                </div>
                <div class="w-full  mt-6 flex flex-col gap-3 ">
                    <div class="bg-[#d3d3d3] w-full h-full rounded-xl px-3 py-2 flex place-items-center">
                        <div>
                            <h1>Newsletter</h1>
                            <h1 class="text-[12px]">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</h1>
                        </div>
                        <img src="../assets/images/toggle.png" class="w-9 h-fit">
                    </div>
                    <div class="bg-[#d3d3d3] w-full h-full rounded-xl px-3 py-2 flex place-items-center">
                        <div>
                            <h1>Newsletter</h1>
                            <h1 class="text-[12px]">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</h1>
                        </div>
                        <img src="../assets/images/toggle.png" class="w-9 h-fit">
                    </div>
                </div>
            </div>
            <div class="flex justify-end ml-auto gap-2 mt-3">
                    <h1 class=" bg-[#d3d3d3] text-red-800 h-8 w-fit rounded-lg px-5 py-3 flex justify-center place-items-center text-[15px]">Remove Account</h1>
                    <h1 class=" bg-black text-white h-8 w-fit rounded-lg px-5 py-3 flex justify-center place-items-center text-[15px]">Log Out</h1>
                </div>
        </div>    
        

    </div>

    <div class="px-8 flex flex-col justify-end">
            <h1 class="text-3xl font-[700] pt-12">Recent Orders</h1>
            <div class="flex justify-between">
                <div class="catlist w-screen h-12 my-5 flex place-items-center gap-6">
                    <div v-for="(cats,catindex) in order" :key="catindex" class=" flex place-items-center justify-center  font-bold text-md">
                        {{ cats.name }}
                    </div>
                </div>

                <div class="flex gap-2 h-10 place-items-end">
                    <div class=" bg-white w-[250px] flex place-items-center px-3 py-1 h-8 rounded-xl justify-center">
                        <img src="../assets/images/searchicon.png" class=" w-6 h-6">
                        <input type="text" placeholder="Search for orders" class="px-3 py-1 w-full bg-transparent "> 
                    </div>   
                    <div class="bg-white place-items-center px-3 py-1 rounded-xl flex gap-1 w-28 justify-center">
                        <h1>Sort By</h1>
                        <img src="../assets/images/arrowdown.png" alt="">
                    </div> 
                    <div class="bg-white place-items-center px-3 py-1 rounded-xl flex gap-1 w-36 justify-center">
                        <h1>Price Range</h1>
                        <img src="../assets/images/editbtn.png">
                    </div>
                </div>
            </div>


        <div class="flex flex-col gap-3">
            <Productdetail/>
            <Productdetail/>
            <Productdetail/>
            <Productdetail/>
            <Productdetail/>
            <Productdetail/>
            <Productdetail/>
        </div>
    </div>

    <div>
        <Footer/>
    </div>
</template>