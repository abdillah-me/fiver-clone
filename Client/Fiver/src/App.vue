<script>
import Navbar from './components/NavbarComp.vue'
export default {
   components: {
      Navbar
   }
}
</script>

<template>
   <Navbar />
   <RouterView />
</template>
