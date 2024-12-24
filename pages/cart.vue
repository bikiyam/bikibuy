<template>
    <div class="px-8 mt-6">
        <h1 class="text-[45px] font-semibold text-[600] text-[#494444]">Your Cart</h1>
        <div class="flex gap-3 ">
            <div class=" bg-white w-[450px] flex place-items-center px-3 py-1 rounded-xl">
                <img src="../assets/images/searchicon.png" class=" w-6 h-6">
                <input type="text" placeholder="Search for products in cart" class="px-3 py-1 w-full bg-transparent "> 
            </div>   
            <div class="bg-white place-items-center px-3 py-1 rounded-xl flex gap-1">
                <h1>Sort By</h1>
                <img src="../assets/images/arrowdown.png" alt="">
            </div> 
            <div class="bg-white place-items-center px-3 py-1 rounded-xl flex gap-1">
                <h1>Price Range</h1>
                <img src="../assets/images/editbtn.png">
            </div>
            <div class="bg-white flex place-items-center px-3 py-1 rounded-xl text-red-600 ml-auto">
                <h1>Remove Selection</h1>
            </div>
        </div>

        <div class="my-7 py-2 flex text-sm text-start">
            <h1 class="w-[6%]"></h1>
            <h1 class="w-[27%]">Product Details</h1>
            <h1 class="w-[16%]">Categories</h1>  
            <h1 class="w-[10%]">Unit Price</h1>      
            <h1 class="w-[10%]">Amount</h1>      
            <h1 class="w-[15%]">Rating</h1>      
            <h1 class="w-[10%]">Total Price</h1>            
            <h1 class="w-[6%]"></h1>
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

        <div class="bg-black h-10 w-40 text-white flex justify-center place-items-center ml-auto mr-12 my-6 rounded-xl">
            <h1>Place Order</h1>
        </div>

        
     
    </div>
    <div>
        <Footer/>    
    </div>

</template>