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

  for (let i = 1; i <= (name+surname).length; i++) {
    const timeout = setTimeout(() => {
      logoText.value = name.slice(0, i) + " " + surname.slice(0, i);
    }, i * 20);
    animationTimeouts.push(timeout as unknown as number);
  }
};


const resetText = () => {
  animationTimeouts.forEach(clearTimeout);
  logoText.value = shortText;
};

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
          @mouseleave="resetText"
          @click="scrollPage('section-1')"
        >
          {{ logoText }}
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

<style lang="postcss" scoped>
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
  font-size: 14px;
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