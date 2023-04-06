<script></script>
<template>
   <div class="myGigs flex justify-center mt-10">
      <div class="container mx-auto py-4 shadow-md px-5">
         <div class="title flex items-center justify-between">
            <h1>GIGS</h1>
            <router-link to="/add">
               <button class="bg-green-700 py-1 px-3 text-white rounded-md">Add new gig</button>
            </router-link>
         </div>
         <hr class="my-3" />
         <table class="w-full">
            <tr class="h-[50px]">
               <th class="text-left">Image</th>
               <th class="text-left">Title</th>
               <th class="text-left">Price</th>
               <th class="text-left">Sales</th>
               <th class="text-left">Actions</th>
            </tr>
            <tr class="h-[50px]">
               <td>
                  <img
                     class="img w-[50px] h-[250x] object-cover"
                     src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/174924904/original/ac2f8b85b05d14b9bc04bf2b58147263df1eae29/design-ecommerce-online-store-logo-for-shopify-website.jpg"
                     alt=""
                  />
               </td>
               <td>Gig 1</td>
               <td>88</td>
               <td>123</td>
               <td>
                  <img
                     class="delete w-[20px] cursor-pointer"
                     src="../assets/img/delete.png"
                     alt=""
                  />
               </td>
            </tr>
         </table>
      </div>
   </div>
</template>
