<script>
import newRequest from '../../utils/newRequest'
export default {
   data() {
      return {
         active: false,
         open: false,
         currentUser: JSON.parse(localStorage.getItem('currentUser'))
      }
   },
   computed: {
      isHomePage() {
         return this.$route.path === '/'
      }
   },
   mounted() {
      window.addEventListener('scroll', this.isActive)
   },
   beforeUnmount() {
      window.removeEventListener('scroll', this.isActive)
   },
   methods: {
      isActive() {
         window.scrollY > 0 ? (this.active = true) : (this.active = false)
      },
      toggleOpen() {
         this.open = !this.open
      },
      async handleLogout() {
         try {
            await newRequest.post('/auth/logout')
            localStorage.setItem('currentUser', null)
            this.$router.push('/')
         } catch (err) {
            console.log(err)
         }
      }
   }
}
</script>
<template>
   <nav
      id="navbar"
      class="shadow-sm bg-green-900 text-black sticky top-0 ease-in-out transition z-20"
      :class="{
         scrolled: active,
         'bg-white': active || !isHomePage,
         'text-white': isHomePage && !active,
         'border-b': active || !isHomePage
      }"
   >
      <div class="container mx-auto flex justify-between items-center py-5">
         <div class="logo">
            <router-link to="/">
               <span class="text text-2xl font-bold">Fiverr</span>
               <span class="dot text-2xl font-bold text-slate-500">.</span>
            </router-link>
         </div>
         <div class="links flex gap-5 items-center">
            <span>Fiver Bussines</span>
            <span>Explore</span>
            <span>English</span>
            <span v-if="!currentUser">Become a Seller</span>
            <span v-if="!currentUser">
               <router-link to="/login">Sign in</router-link>
            </span>
            <button
               v-if="!currentUser"
               class="bg-transparent border border-white px-5 py-1 rounded-md hover:bg-green-700 hover:border-green-700"
            >
               <router-link to="/register"> Join </router-link>
            </button>
            <div
               v-if="currentUser"
               @click="toggleOpen"
               class="user flex gap-2 items-center cursor-pointer relative"
            >
               <img
                  :src="currentUser.img"
                  alt=""
                  class="w-[32px] h-[32px] object-cover rounded-full"
               />
               <span>{{ currentUser.username }}</span>
               <div
                  v-if="open"
                  class="options absolute top-12 right-0 p-3 bg-white rounded-md border flex flex-col gap-1 text-gray-400 w-[200px]"
               >
                  <router-link class="link" to="/mygigs">
                     <span v-if="currentUser.isSeller">Gigs</span>
                  </router-link>
                  <router-link class="link" to="/add">
                     <span v-if="currentUser.isSeller">Add New Gig</span>
                  </router-link>
                  <router-link class="link" to="/orders">
                     <span>Orders</span>
                  </router-link>
                  <router-link class="link" to="/messages">
                     <span>Massages</span>
                  </router-link>
                  <router-link v-if="currentUser" class="link" to="/">
                     <span @click="handleLogout">Log Out</span>
                  </router-link>
               </div>
            </div>
         </div>
      </div>
      <hr v-if="active || !isHomePage" class="text-gray-300" />
      <div
         class="menu container mx-auto py-2 text-sm flex justify-between text-gray-400"
         v-if="active || !isHomePage"
      >
         <router-link class="link menu-link" to="/">
            <span>Graphics & Design</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Video & Animation</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Writing & Translation</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Ai service</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Digital Marketing</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Music & Audio</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Programming & Tech</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Bussiness</span>
         </router-link>
         <router-link class="link menu-link" to="/">
            <span>Lifestyle</span>
         </router-link>
      </div>
   </nav>
</template>

<style scoped>
.scrolled {
   background-color: white;
   color: black;
}
</style>
