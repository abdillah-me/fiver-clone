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
      <div class="container mx-auto grid grid-cols-4 gap-4">
         <router-link v-for="(project, index) in projects" :key="index" to="">
            <div class="projectCard w-[300px] rounded-md cursor-pointer bg-white shadow-md">
               <img
                  class="brightness-50 h-100% object-cover rounded-md"
                  :src="project.img"
                  alt=""
               />
               <div class="info flex items-center gap-5 p-4">
                  <img
                     class="w-[30px] h-[30px] object-cover rounded-full"
                     :src="project.pp"
                     alt=""
                  />
                  <div class="text">
                     <h2 class="">{{ project.cat }}</h2>
                     <span class="">{{ project.username }}</span>
                  </div>
               </div>
            </div>
         </router-link>
      </div>
   </div>
</template>
