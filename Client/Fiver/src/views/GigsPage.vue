<script>
import GigCard from '../components/GigCard.vue'
import { gigs } from '../data'
export default {
   components: {
      GigCard
   },
   data() {
      return {
         open: false,
         sort: 'sales',
         min: '',
         max: '',
         // temp
         gigs: gigs
      }
   },
   methods: {
      reSort(type) {
         this.sort = type
         this.open = false
      },
      toggleOpen() {
         console.log('masuk')
         this.open = !this.open
      }
      // apply() {
      //    this.refetch()
      // }
   }
}
</script>
<template>
   <div class="gigs flex justify-center">
      <div class="container mx-auto py-[30px] flex flex-col gap-[15px]">
         <span class="bredcrumbs font-semibold text-[13px] text-[#555]"
            >FIVERR > GRAPHICS & DESIGN</span
         >
         <h1 class="text-2xl font-bold">AI Artist</h1>
         <p class="text-[#999] font-normal text-sm">
            Explore the boundaries of art and technology with Fiverr's AI artist
         </p>
         <div class="menu flex items-center justify-between">
            <div class="left flex items-center gap-[10px] text-[#555] font-normal">
               <span>Budget</span>
               <input
                  v-model="min"
                  class="p-[5px] border border-gray-200 outline-none rounded-md"
                  type="text"
                  placeholder="min"
               />
               <input
                  v-model="max"
                  class="p-[5px] border border-gray-200 outline-none rounded-md"
                  type="text"
                  placeholder="max"
               />
               <button
                  @click="apply"
                  class="bg-green-700 text-white font-medium border-none py-1 px-3 rounded-md"
               >
                  Apply
               </button>
            </div>
            <div class="right flex items-center gap-[10px] relative">
               <span class="sortBy text-[#555] font-normal">SortBy</span>
               <span class="sortType font-medium">{{
                  sort === 'sales' ? 'Best Selling' : 'Newest'
               }}</span>
               <img
                  @click="toggleOpen"
                  class="w-[15px] cursor-pointer"
                  src="../assets/img/down.png"
                  alt=""
               />
               <div
                  v-if="open"
                  class="rightMenu p-[20px] bg-white rounded-md border absolute top-7 right-0 flex flex-col gap-5 text-[#555]"
               >
                  <span v-if="sort === 'sales'" @click="reSort('createdAt')" class="cursor-pointer"
                     >Newest</span
                  >
                  <span v-if="sort === 'createdAt'" @click="reSort('sales')" class="cursor-pointer"
                     >Best Selling</span
                  >
               </div>
            </div>
         </div>
         <div class="card grid grid-cols-4 gap-6">
            <GigCard v-for="gig in gigs" :key="gig._id" :gig="gig" />
         </div>
      </div>
   </div>
</template>
