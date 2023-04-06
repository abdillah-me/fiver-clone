<script>
import Featured from '../components/FeaturedComp.vue'
import TrustedBy from '../components/TrustedBy.vue'
import CatCard from '../components/CatCard.vue'
import ProjectCard from '../components/projectCardComp.vue'
import FooterComp from '../components/FooterComp.vue'
export default {
   data() {
      return {}
   },
   components: {
      Featured,
      TrustedBy,
      CatCard,
      ProjectCard,
      FooterComp
   }
}
</script>

<template>
   <div id="home">
      <Featured />
      <TrustedBy />
      <CatCard class="py-4" />
      <div class="features bg-green-50 flex justify-center py-24 mt-24">
         <div class="container mx-auto flex w-full items-start gap-10">
            <div class="item w-[50%] flex flex-col gap-2">
               <h1 class="text-2xl font-semibold">
                  A whole world of freelance talent at your fingertips
               </h1>
               <div class="title flex items-center gap-4 font-semibold text-sm">
                  <img src="../assets/img/check.png" class="w-[20px]" alt="" />
                  The best for every budget
               </div>
               <p>
                  Find high-quality services at every price point. No hourly rates, just
                  project-based pricing.
               </p>
               <div class="title flex items-center gap-4 font-semibold text-sm">
                  <img src="../assets/img/check.png" class="w-[20px]" alt="" />
                  Quality work done quickly
               </div>
               <p>Find the right freelancer to begin working on your project within minutes.</p>
               <div class="title flex items-center gap-4 font-semibold text-sm">
                  <img src="../assets/img/check.png" class="w-[20px]" alt="" />
                  Protected payments, every time
               </div>
               <p>
                  Always know what you'll pay upfront. Your payment isn't released until you approve
                  the work.
               </p>
               <div class="title flex items-center gap-4 font-semibold text-sm">
                  <img src="../assets/img/check.png" class="w-[20px]" alt="" />
                  24/7 support
               </div>
               <p>
                  Find high-quality services at every price point. No hourly rates, just
                  project-based pricing.
               </p>
            </div>
            <div class="item w-[50%] bg-black">
               <video class="w-full" src="./img/video.mp4" controls />
            </div>
         </div>
      </div>
      <div class="features bg-blue-950 py-24">
         <div class="container mx-auto flex gap-10 text-white">
            <div class="item flex flex-col gap-4">
               <h1 class="text-3xl font-semibold">fiverr <i>business</i></h1>
               <h1>A business solution designed for <i>teams</i></h1>
               <p>
                  Upgrade to a curated experience packed with tools and benefits, dedicated to
                  businesses
               </p>
               <div class="title flex items-center gap-4 font-normal">
                  <img src="../assets/img/check.png" class="w-[20px]" alt="" />
                  Connect to freelancers with proven business experience
               </div>

               <div class="title flex items-center gap-4 font-normal">
                  <img src="../assets/img/check.png" class="w-[20px]" alt="" />
                  Get matched with the perfect talent by a customer success manager
               </div>

               <div class="title flex items-center gap-4 font-normal">
                  <img src="../assets/img/check.png" class="w-[20px]" alt="" />
                  Manage teamwork and boost productivity with one powerful workspace
               </div>
               <button class="py-1 px-5 text-white bg-green-600 rounded-md w-[300px]">
                  Explore Fiverr Business
               </button>
            </div>
            <div class="item w-[55%] flex items-center">
               <img
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                  alt=""
               />
            </div>
         </div>
      </div>
      <ProjectCard class="py-10" />
      <FooterComp />
   </div>
</template>
