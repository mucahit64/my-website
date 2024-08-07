<script setup lang="ts">
import { darkMode } from "../composable";
</script>

<template>
  <div :class="darkMode ? 'home darkMode' : 'home'" id="section-1">
    <div :class="darkMode ? 'image darkMode' : 'image'">
      <img
        src="https://media.startv.com.tr/star-tv//images/yal.jpg"
        alt="Example Image"
        class="rounded-image"
      />
    </div>
    <div :class="darkMode ? 'text darkMode' : 'text'">
      <div class="title">Mücahit Yaman</div>
      <div class="subtitle">Software Developer</div>
      <div class="description">
        I am a software developer who loves to build and design. I am currently
        working at
        <a
          href="https://www.eliar.com/"
          target="_blank"
          rel="noopener noreferrer"
          :class="darkMode ? 'darkMode link' : 'link'"
          >Eliar Electronic</a
        >. I am also a fan of the world of computers and technology.
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
  border: 20px solid rgb(220, 220, 220);
  border-radius: 50%;

  &:hover {
    border: 20px solid rgb(210, 210, 210);
  }
}

.text {
  width: 410px;
  color: rgb(80, 80, 80);
}

.rounded-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
}

.title {
  font-size: 50px;
  color: rgb(80, 80, 80);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.subtitle {
  font-size: 20px;
  color: rgb(80, 80, 80);
}

.description {
  font-size: 20px;
  padding-top: 20px;
  color: rgb(80, 80, 80);
}

.link {
  color: rgb(80, 80, 80);
}

.darkMode {
  background-color: rgb(100, 100, 100);

  .image {
    border: 20px solid rgb(75, 75, 75);

    &:hover {
      border: 20px solid rgb(85, 85, 85);
    }
  }

  .title {
    color: rgb(217, 217, 217);
  }

  .subtitle {
    color: rgb(217, 217, 217);
  }

  .description {
    color: rgb(217, 217, 217);
  }

  .link {
    color: rgb(217, 217, 217);
  }
}
</style>
