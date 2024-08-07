<script setup lang="ts">
import Topbar from "~/components/Topbar.vue";
import Home from "~/components/Home.vue";
import About from "~/components/About.vue";
import Projects from "~/components/Projects.vue";
import Contact from "~/components/Contact.vue";
</script>

<template>
  <div class="content">
    <Topbar />
    <Home />
    <About />
    <Projects />
    <Contact />

    <!-- <img
      class="full-height-image"
      src="https://colorlib.com/wp/wp-content/uploads/sites/2/leven-resume-website-template.jpg"
      alt="Example Image"
      style="width: 100%; height: 100vh"
    />
    <img
      src="https://media.startv.com.tr/star-tv//images/yal.jpg"
      alt="Example Image"
      style="width: 100%; height: 100vh"
    /> -->
  </div>
</template>
