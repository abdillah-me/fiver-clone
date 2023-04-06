<script>
export default {
   data() {
      return {
         currentUser: {
            id: 1,
            username: 'john doe',
            isSeller: true
         },
         message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, temporibus.'
      }
   }
}
</script>
<template>
   <div class="messages flex justify-center mt-10">
      <div class="container mx-auto py-4 shadow-md px-5">
         <div class="title flex items-center justify-between">
            <h1>Orders</h1>
         </div>
         <hr class="my-3" />
         <table class="w-full">
            <tr class="h-[50px]">
               <th class="text-left">Buyer</th>
               <th class="text-left">Last Message</th>
               <th class="text-left">Date</th>
               <th class="text-left">Actions</th>
            </tr>
            <tr class="h-[50px]">
               <td>John Doe</td>
               <td>
                  <router-link to="/message/12">{{ message.substring(0, 100) }}...</router-link>
               </td>
               <td>1 Day ago</td>
               <td>
                  <button>Mark as read</button>
               </td>
            </tr>
         </table>
      </div>
   </div>
</template>
