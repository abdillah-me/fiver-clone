<script></script>
<template>
   <div class="add flex justify-center">
      <div class="container mx-auto py-[50px]">
         <h1 class="text-gray-500 mb-8">Add new Gig</h1>
         <div class="sections flex justify-between gap-24">
            <div class="left flex w-[50%] flex-col gap-[10px] justify-between">
               <label class="text-gray-500 text-[18px]" for="">Title</label>
               <input type="text" placeholder="I will do something" />
               <label class="text-gray-500 text-[18px]" for="">Category</label>
               <select name="cats" id="">
                  <option value="design">Design</option>
                  <option value="web">Web Developement</option>
                  <option value="animation">Animation</option>
                  <option value="music">Music</option>
               </select>
               <label class="text-gray-500 text-[18px]" for="">Cover image</label>
               <input type="file" name="" id="" />
               <label class="text-gray-500 text-[18px]" for="">Upload image</label>
               <input type="file" name="" id="" />
               <label class="text-gray-500 text-[18px]" for="">Description image</label>
               <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="16"
                  placeholder="brief description to introduce your service"
               ></textarea>
               <button class="bg-green-700 py-2 px-8 text-white rounded-md">Create</button>
            </div>
            <div class="right flex w-[50%] flex-col gap-[10px] justify-between">
               <label class="text-gray-500 text-[18px]" for="">Service Title</label>
               <input type="text" placeholder="one page on design" />
               <label class="text-gray-500 text-[18px]" for="">Short Description</label>
               <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="short description"
               ></textarea>
               <label class="text-gray-500 text-[18px]" for="">Delivery time (e.g. 3 days)</label>
               <input type="number" name="" id="" min="1" />
               <label class="text-gray-500 text-[18px]" for="">Revision Number</label>
               <input type="number" name="" id="" min="1" />
               <label class="text-gray-500 text-[18px]" for="">Add Features</label>
               <input type="text" placeholder="e.g. page design" />
               <input type="text" placeholder="e.g. file uploading" />
               <input type="text" placeholder="e.g. setting up domain" />
               <label class="text-gray-500 text-[18px]" for="">Price</label>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
input,
select,
textarea {
   padding: 10px;
   border: 1px solid grey;
}
</style>
