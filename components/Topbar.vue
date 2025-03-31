<script setup lang="ts">
import { scrollPage } from "~/utils/functions";

const { dark } = useQuasar();
const logoText = ref("MY");
const name = "Mücahit";
const surname = "Yaman";
const shortText = "MY";
let animationTimeouts: number[] = [];

const animateText = () => {
  animationTimeouts.forEach(clearTimeout);
  animationTimeouts = [];

  const fullText = name + " " + surname;
  
  for (let i = 1; i <= fullText.length; i++) {
    const timeout = setTimeout(() => {
      logoText.value = fullText.slice(0, i);
    }, i * 30);
    animationTimeouts.push(timeout as unknown as number);
  }

  // Belirli bir süre sonra ters animasyonu başlat
  const reverseTimeout = setTimeout(reverseAnimateText, fullText.length * 20 + 1000);
  animationTimeouts.push(reverseTimeout as unknown as number);
};

const reverseAnimateText = () => {
  animationTimeouts.forEach(clearTimeout);
  animationTimeouts = [];

  let fullText = name + " " + surname;
  let steps: string[] = [fullText];

  // Belirli harfleri kaldırarak adım adım azalt
  for (let i = fullText.length - 1; i > 0; i--) {
    const { 0: n, 1: s } = fullText.split(" ");
    console.log(n, s);
    fullText = n.slice(0, i) + " " + s.slice(0, i);
    steps.push(fullText);
  }
  steps.push(shortText);

  // Animasyonu oluştur
  steps.forEach((text, index) => {
    const timeout = setTimeout(() => {
      logoText.value = text;
    }, index * 30);
    animationTimeouts.push(timeout as unknown as number);});
};

onMounted(() => {
  setTimeout(() => {
    animateText();
  }, 2000);
});

// window.addEventListener("scroll", () => {
//   resetText();
// });
</script>

<template>
  <div class="topbar" :class="{ 'dark-mode': dark.isActive }">
    <div class="logo">
        <!-- <img
          src="https://media.startv.com.tr/star-tv//images/yal.jpg"
          alt="Example Image"
          class="rounded-image"
        /> -->
        <div
          class="logo-text"
          :class="{ 'dark-mode': dark.isActive }"
          @mouseover="animateText"
          @click="{ scrollPage('section-1'); }"
        >
          <span>{{ logoText }}</span>
        </div>
    </div>
    <div class="buttons" :class="{ 'dark-mode': dark.isActive }">
      <QBtn
        class="topbar-button"
        v-for="(section, index) in ['ANA SAYFA', 'HAKKIMDA', 'PROJELER', 'İLETİŞİM']"
        :key="index"
        flat
        @click="scrollPage('section-' + (index + 1))"
      >
        {{ section }}
      </QBtn>

      <QBtn
        class="mode-icon"
        :icon="dark.isActive ? 'light_mode' : 'dark_mode'"
        round
        flat
        @click="dark.toggle()"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topbar {
  width: auto;
  height: 90px;
  left: 50px;
  right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50px;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  background-color: rgb(225, 225, 225);
  color: rgb(80, 80, 80);
  z-index: 9999;

  &.dark-mode {
    background-color: #2e2e2e;
  }

  @media (max-width: 600px) {
    left: 20px;
    right: 20px;
    top: 20px;
    height: 60px;
  }
}

.logo {
  padding-left: 5%;
}

.logo-text {
  font-size: 32px;
  font-weight: bold;
  color: rgb(80, 80, 80);
  transition: color 0.3s ease;
  user-select: none;
  font-family: var(--font-raleway-light);

  &.dark-mode {
    color: rgb(190, 190, 190);
  }

  &:hover {
    cursor: pointer;
    border-radius: 50px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
}

.buttons {
  display: flex;
  justify-content: right;
  padding-right: 20px;
  height: 100%;
  align-items: center;
  color: rgb(80, 80, 80);

  &.dark-mode {
    color: rgb(190, 190, 190);
  }

  @media (max-width: 600px) {
  }
}

.topbar-button {
  width: 120px;
  height: 100%;
  border: none;
  font-size: 12 px;
  font-weight: bold;
  background: none;
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: 600px) {
    display: none;
  }
}

.rounded-image {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
}

.mode-icon {
  height: 50px;
  width: 50px;
  margin-left: 10px;
  transition: color 0.3s ease;
}
</style>