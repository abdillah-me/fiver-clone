<script>
export default {
   props: ['gig']
}
</script>
<template>
   <router-link to="/gig/123" class="link">
      <div class="gigCard w-[300px] border border-gray-200 mb-6 rounded-md">
         <img class="w-full h-[200px] object-cover" :src="gig.img" alt="" />
         <div class="info py-3 px-5 flex flex-col gap-4">
            <div class="user flex items-center gap-3">
               <img class="w-6 h-6 rounded-full object-cover" :src="gig.pp" alt="" />
               <span>{{ gig.username }}</span>
            </div>
            <p class="text-black">{{ gig.desc.substring(0, 50) }}...</p>
            <div class="star flex items-center gap-2">
               <img class="w-[14px] h-[14px]" src="../assets/img/star.png" alt="" />
               <span class="text-[14px] font-bold text-[#ffc108]">{{ gig.start }}</span>
            </div>
         </div>
         <hr class="border border-gray-100" />
         <div class="details py-[10px] px-[20px] flex items-center justify-between">
            <img class="w-[16px] h-[16px] cursor-pointer" src="../assets/img/heart.png" alt="" />
            <div class="price">
               <span class="text-[#999] text-[12px]">STARTING AT</span>
               <h2 class="text-[#555] text-xs font-semibold">${{ gig.price }}</h2>
            </div>
         </div>
      </div>
   </router-link>
</template>
