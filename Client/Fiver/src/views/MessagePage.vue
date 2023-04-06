<script></script>
<template>
   <div class="message flex justify-center">
      <div class="container mx-auto mt-4">
         <span class="breadcrumbs text-[13px] tetx-[#555]">
            <router-link to="/messages">MESSAGES > JOHN DOE</router-link>
         </span>
         <div class="messages flex flex-col my-[30px] p-12 gap-5 h-[55vh] overflow-scroll">
            <div class="item flex gap-5 max-w-[600px] text-[18px]">
               <img
                  class="w-[40px] h-[40px] object-cover rounded-full"
                  src="../assets/img/man.png"
                  alt=""
               />
               <p class="p-5 bg-gray-300 rounded-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis.
               </p>
            </div>
            <div class="item owner flex gap-5 max-w-[600px] text-[18px] flex-row-reverse self-end">
               <img
                  class="w-[40px] h-[40px] object-cover rounded-full"
                  src="../assets/img/man.png"
                  alt=""
               />
               <p class="p-5 bg-blue-700 rounded-md text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis.
               </p>
            </div>
            <div class="item flex gap-5 max-w-[600px] text-[18px]">
               <img
                  class="w-[40px] h-[40px] object-cover rounded-full"
                  src="../assets/img/man.png"
                  alt=""
               />
               <p class="p-5 bg-gray-300 rounded-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis.
               </p>
            </div>
            <div class="item owner flex gap-5 max-w-[600px] text-[18px] flex-row-reverse self-end">
               <img
                  class="w-[40px] h-[40px] object-cover rounded-full"
                  src="../assets/img/man.png"
                  alt=""
               />
               <p class="p-5 bg-blue-700 rounded-md text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis.
               </p>
            </div>
         </div>
         <hr class="my-5" />
         <div class="write flex justify-between items-center">
            <textarea
               class="w-[85%] h-[100px] p-[10px] border rounded-md"
               placeholder="write a message"
               name=""
               id=""
               cols="30"
               rows="10"
            ></textarea>
            <button class="bg-green-700 py-2 px-7 text-white rounded-md">Send</button>
         </div>
      </div>
   </div>
</template>
