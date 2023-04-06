<script></script>
<template>
   <div class="featured h-[600px] flex justify-center bg-green-900 w-full">
      <div class="container mx-auto flex items-center">
         <div class="left flex flex-col gap-7">
            <h1 class="text-4xl font-bold text-white">
               Find the perfect <i class="font-semibold">freelance</i> services for your bussines
            </h1>
            <div class="search flex items-center justify-between bg-white rounded-md h-[50px]">
               <div class="searchInput flex items-center gap-2">
                  <img class="w-[20px] h-[20px] m-3" src="../assets/img/search.png" alt="" />
                  <input
                     class="border-none outline-none w-[500px]"
                     type="text"
                     placeholder='Try "building mobile app"'
                  />
               </div>
               <button class="bg-green-700 text-white h-[50px] w-[150px] border rounded-md">
                  Search
               </button>
            </div>
            <div class="popular flex items-center gap-2 text-white">
               <span>Popular :</span>
               <button
                  class="bg-transparent border border-white py-0 px-6 text-[14px] cursor-pointer rounded-md"
               >
                  Web Design
               </button>
               <button
                  class="bg-transparent border border-white py-0 px-6 text-[14px] cursor-pointer rounded-md"
               >
                  Wordpress
               </button>
               <button
                  class="bg-transparent border border-white py-0 px-6 text-[14px] cursor-pointer rounded-md"
               >
                  Logo Design
               </button>
               <button
                  class="bg-transparent border border-white py-0 px-6 text-[14px] cursor-pointer rounded-md"
               >
                  Ai Service
               </button>
            </div>
         </div>
         <div class="right h-full">
            <img class="h-full object-cover" src="../assets/img/man.png" alt="" />
         </div>
      </div>
   </div>
</template>
