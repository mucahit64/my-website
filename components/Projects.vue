<script setup lang="ts">
import lockMasterLogo from "../pictures/lockMaster-logo.png";
import barcodeLogo from "../pictures/barcode.avif";

const { dark } = useQuasar();

</script>

<template>
  <div class="projects" :class="{ 'dark-mode': dark.isActive }" id="section-3">
    <div class="title" :class="{ 'dark-mode': dark.isActive }">Projeler</div>
    <div class="projects-container">
      <div class="project" :class="{ 'dark-mode': dark.isActive }">
        <img
          :src="lockMasterLogo"
          alt="Example Image"
          class="rounded-image"
        />
        <div class="project-text">
          <div class="project-title" :class="{ 'dark-mode': dark.isActive }">Lock Master</div>
          <div class="project-description" :class="{ 'dark-mode': dark.isActive }">
            WebSocket teknolojisini kullanarak Node.js ile kullanıcı bazlı gerçek zamanlı kilitleme sistemi geliştirdim.
          </div>
        </div>
      </div>

      <div class="project" :class="{ 'dark-mode': dark.isActive }">
        <img
          :src="barcodeLogo"
          alt="Example Image"
          class="rounded-image"
        />
        <div class="project-text">
          <div class="project-title" :class="{ 'dark-mode': dark.isActive }">Barcodec</div>
          <div class="project-description" :class="{ 'dark-mode': dark.isActive }">
            Geliştirdiğim C# uygulaması barkod desteği ile hızlı ve etkili stok takibi ve satış yönetimi imkanı sağlıyor.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: background-color 0.5s ease;
  
  &.dark-mode {
    background-color: #212121;
    transition: background-color 0.5s ease;
  }
}

.title {
  font-size: 36px;
  padding-top: 20vh;
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
    font-size: 20px;
  }
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  width: 95%;
  height: 100vh;
}

.project {
  display: flex;
  align-items: center;
  margin: 20px;
  border-radius: 150px 40px 40px 150px;
  background-color: rgb(233, 233, 233);
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgb(226, 226, 226);
    transition: background-color 0.5s ease;
  }
  &.dark-mode {
  background-color: #383838;
  transition: background-color 0.5s ease;

    &:hover {
      background-color: #404040;
      transition: background-color 0.5s ease;
    }
  }
}

.rounded-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }

  @media (max-width: 600px) {
    width: 140px;
    height: 140px;
  }
}

.project-text {
  width: 350px;
  padding-left: 20px;

  &.dark-mode {
    color: rgb(210, 210, 210);
  }

  @media (max-width: 600px) {
    width: 80%;
  }
}

.project-title {
  font-size: 24px;
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
    font-size: 16px;
  }
}

.project-description {
  font-size: 16px;
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
  padding-top: 10px;
  color: rgb(80, 80, 80);
 
  &.dark-mode {
    color: rgb(150, 150, 150);
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
}
</style>
