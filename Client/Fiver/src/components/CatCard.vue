<script>
import { cards, projects } from '../data'
export default {
   props: ['children'],
   data() {
      return {
         cards: cards,
         projects: projects
      }
   },
   components: {}
}
</script>
<template>
   <div class="slide">
      <div class="container mx-auto grid grid-cols-5 gap-1">
         <router-link v-for="(card, index) in cards" :key="index" to="gig/123">
            <div class="catCard w-[252px] h-[344px] text-white rounded-sm relative cursor-pointer">
               <img class="w-full h-full object-cover" :src="card.img" alt="" />
               <span class="desc font-medium absolute top-4 left-4">{{ card.desc }}</span>
               <span class="title absolute top-10 left-4 text-[24px] font-semibold">{{
                  card.title
               }}</span>
            </div>
         </router-link>
      </div>
   </div>
</template>
