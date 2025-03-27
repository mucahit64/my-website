<script setup lang="ts">
import eliarLogo from "../pictures/Eliar-Logo.svg";
import eliLogo from "../pictures/eli-logo.png";
import nisantasiLogo from "../pictures/nisantasi-logo.png";

const { dark } = useQuasar();
</script>

<template>
  <div class="about" id="section-2" :class="{ 'dark-mode': dark.isActive }">
    <div class="title" :class="{ 'dark-mode': dark.isActive }">Hakkımda</div>
    
      <div class="work-experience" :class="{ 'dark-mode': dark.isActive }">
        <div class="work-title" :class="{ 'dark-mode': dark.isActive }">Deneyim</div>
        <div class="work-container">
          <div class="work" :class="{ 'dark-mode': dark.isActive }">
            <img
              :src="eliarLogo" 
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name" :class="{ 'dark-mode': dark.isActive }">Eliar Electronic</div>
              <div class="work-position" :class="{ 'dark-mode': dark.isActive }">Software Developer</div>
            </div>
            <div class="work-date" :class="{ 'dark-mode': dark.isActive }">
              <div>2023</div><div>Present</div>
            </div>
          </div>
          
          <div class="work" :class="{ 'dark-mode': dark.isActive }">
            <img
              :src="eliLogo"
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name" :class="{ 'dark-mode': dark.isActive }">Eli Worldwide Express Logistics</div>
              <div class="work-position" :class="{ 'dark-mode': dark.isActive }">Computer Programmer</div>
            </div>
            <div class="work-date" :class="{ 'dark-mode': dark.isActive }">
              <div>2020</div><div>2021</div>
            </div>
          </div>
        </div>
      </div>

      <div class="work-experience" :class="{ 'dark-mode': dark.isActive }">
        <div class="work-title" :class="{ 'dark-mode': dark.isActive }">Eğitim</div>
        <div class="work-container">
          <div class="work" :class="{ 'dark-mode': dark.isActive }">
            <img
              :src="nisantasiLogo"
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name" :class="{ 'dark-mode': dark.isActive }">Computer Engineering</div>
              <div class="work-position" :class="{ 'dark-mode': dark.isActive }">Nişantaşı University</div>
            </div>
            <div class="work-date" :class="{ 'dark-mode': dark.isActive }">
              <div>2020</div><div>2023</div>
            </div>
          </div>
          <div class="work" :class="{ 'dark-mode': dark.isActive }">
            <img
              src="http://euniversite.nku.edu.tr/sitelogolari/NKU.png"
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name" :class="{ 'dark-mode': dark.isActive }">Computer Programming</div>
              <div class="work-position" :class="{ 'dark-mode': dark.isActive }">Namık Kemal University</div>
            </div>
            <div class="work-date" :class="{ 'dark-mode': dark.isActive }">
              <div>2018</div><div>2020</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="postcss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: black;
  transition: background-color 0.5s ease;

  &.dark-mode {
    background-color: #212121;
    color: white;
    transition: background-color 0.5s ease;
  }
}

.title {
  font-size: 36px;
  padding-top: 20vh;
  color: rgb(80, 80, 80);
  

  &.dark-mode {
    color: rgb(210, 210, 210);
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
}

.work-experience {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 20px;
  padding: 10px;
  width: 40%;
  min-width: 450px;
  max-width: 500px;
  height: auto;
  background-color: rgb(233, 233, 233);
  transition: background-color 0.5s ease;

  &.dark-mode {
    background-color: #2e2e2e;
    transition: background-color 0.5s ease;
  }

  @media (max-width: 600px) {
    width: 80%;
    min-width: 300px;
    max-width: 600px;
  }
}

.work-title {
  font-size: 24px;
  color: rgb(80, 80, 80);
  

  &.dark-mode {
    color: rgb(180, 180, 180);
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
}

.work-container {
  width: 100%;

  &.dark-mode {
    background-color: #2e2e2e;
    transition: background-color 0.5s ease;
  }
}

.work {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 26px;
  margin: 10px;
  padding: 10px;
  background-color: white;
  transition: background-color 0.5s ease;
  

  &.dark-mode {
    background-color: #383838;
    transition: background-color 0.5s ease;
  }
}

.rounded-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  padding: 5px;
  margin-right: 12px;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    padding: 3px;
  }
}

.company-name {
  font-size: 20px;
  color: rgb(80, 80, 80);
  margin-left: auto;
  padding-bottom: 6px;

  &.dark-mode {
    color: rgb(180, 180, 180);
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
}

.work-position {
  font-size: 14px;
  color: rgb(80, 80, 80);
  margin-left: auto;

  &.dark-mode {
    color: rgb(180, 180, 180);
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
}

.work-date {
  font-size: 12px;
  color: rgb(80, 80, 80);
  margin-left: auto;
  margin-right: 10px;
  text-align: right;

  &.dark-mode {
    color: rgb(180, 180, 180);
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
}
</style>
