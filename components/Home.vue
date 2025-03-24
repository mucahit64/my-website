
<script setup lang="ts">
import profilePhoto from "../pictures/profile.jpeg";

const { dark } = useQuasar();

</script>

<template>
  <div class="home" :class="{ 'dark-mode': dark.isActive }" id="section-1">
    <div class="image" :class="{ 'dark-mode': dark.isActive }">
      <!-- <img
        src="https://media.startv.com.tr/star-tv//images/yal.jpg"
        alt="Example Image"
        class="rounded-image"
      /> -->
      <img
        :src="profilePhoto"
        alt="Example Image"
        class="rounded-image"
      />
    </div>

    <div 
      class="text" 
      :class="{ 'dark-mode': dark.isActive }">

      <div 
        class="title"
        :class="{ 'dark-mode': dark.isActive }">
          Selam, ben <span class="name">Mücahit</span>
      </div>
      
      <div
        class="subtitle"
        :class="{ 'dark-mode': dark.isActive }">
          Software Developer
      </div>

      <div 
        class="description"
        :class="{ 'dark-mode': dark.isActive }">
        Yazılım geliştirmeyi ve tasarlamayı seven bir geliştiriciyim. Şu anda  
        <a
          href="https://www.eliar.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          :class="{ 'dark-mode': dark.isActive }"
        >Eliar Elektronik</a> şirketinde çalışıyorum.  
        Bilgisayarların ve teknolojinin büyüleyici dünyasına her zaman ilgi duydum.
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: background-color 0.5s ease;

  &.dark-mode {
    background-color: #212121; 
    transition: background-color 0.5s ease;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.name {
  font-weight: bold;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 20px solid rgba(220, 220, 220);
  border-radius: 50%;
  transition: background-color 0.5s ease;

  &.dark-mode {
    border: 20px solid #2f2f2f;
    transition: background-color 0.5s ease;

    &:hover {
      border: 20px solid #343434;
      transition: background-color 0.5s ease;
    }
  }

  &:hover {
    border: 20px solid rgba(210, 210, 210);
    transition: background-color 0.5s ease;
  }
}

.text {
  width: 410px;
  margin: 50px;

  &.dark-mode {
    color: rgb(210, 210, 210);
  } 

  @media (max-width: 600px) {
    width: 300px;
  }
}

.rounded-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
}

.title {
  font-size: 40px;
  color: rgb(80, 80, 80);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  
  &.dark-mode {
    color: rgb(210, 210, 210);
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }
}

.subtitle {
  font-size: 20px;
  color: rgb(80, 80, 80);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;

  &.dark-mode {
    color: rgb(180, 180, 180);
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
}

.description {
  font-size: 20px;
  padding-top: 20px;
  color: rgb(80, 80, 80);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;

  &.dark-mode {
    color: rgb(190, 190, 190);
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
}

.link {
  font-size: 20px;
  padding-top: 20px;
  color: rgb(80, 80, 80);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;

  &.dark-mode {
    color: rgb(190, 190, 190);
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
}
</style>
