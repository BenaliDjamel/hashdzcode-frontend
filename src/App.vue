<template>
  <div id="app" >
    <Navbar />
    <div class="container px-4 mx-auto">
      <router-view />
    </div>
    
<!--     <Footer />
 -->  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
/* import Footer from "@/views/Footer";
 */
export default {
  components : {
    Navbar,
    /* Footer */
  }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');
</style>
<style src="@/assets/styles/app.css" />
