<script>
import newRequest from '../../utils/newRequest'
export default {
   data() {
      return {
         username: '',
         password: '',
         error: null
      }
   },
   methods: {
      async handleSubmit() {
         try {
            const res = await newRequest.post('/auth/login', {
               username: this.username,
               password: this.password
            })
            localStorage.setItem('currentUser', JSON.stringify(res.data))
            this.$router.push('/')
         } catch (err) {
            console.log(err)
            this.error = err.response.data
         }
      }
   }
}
</script>
<template>
   <div class="login h-[80vh] flex justify-center items-center">
      <div class="container mx-auto">
         <div class="content bg-white shadow-md p-7 w-[50%] mx-auto">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
               <h1 class="text-3xl font-bold text-gray-800">Login</h1>
               <label class="font-semibold" for="username">Username</label>
               <input
                  class="border p-2 outline-none rounded-md"
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  v-model="username"
               />

               <label class="font-semibold" for="password">Password</label>
               <input
                  class="border p-2 outline-none rounded-md"
                  id="password"
                  type="password"
                  v-model="password"
               />
               <button class="bg-green-700 text-white py-2 rounded-md" type="submit">Login</button>
               <div v-if="error">{{ error }}</div>
            </form>
         </div>
      </div>
   </div>
</template>
