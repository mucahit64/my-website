<script setup lang="ts">
import { darkMode } from "../composable";
import { dark, light } from "../pictures";
import { scrollPage } from "~/utils/functions";
</script>

<template>
  <div class="header">
    <div :class="darkMode ? 'topbar darkMode' : 'topbar'">
      <div class="logo">
        <a href="/">
          <img
            src="https://media.startv.com.tr/star-tv//images/yal.jpg"
            alt="Example Image"
            class="rounded-image"
          />
        </a>
      </div>
      <div :class="darkMode ? 'buttons darkMode' : 'buttons'">
        <input
          type="button"
          value="ANASAYFA"
          @click="scrollPage('section-1')"
        />
        <input
          type="button"
          value="HAKKIMDA"
          @click="scrollPage('section-2')"
        />
        <input
          type="button"
          value="PORJELER"
          @click="scrollPage('section-3')"
        />
        <input
          type="button"
          value="İLETİŞİM"
          @click="scrollPage('section-4')"
        />
      </div>

      <div class="mode-button">
        <input
          type="image"
          :src="darkMode ? light : dark"
          @click="darkMode = !darkMode"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.header {
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}
.topbar {
  background-color: rgb(233, 233, 233);
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px;
  border-radius: 50px;
}

.logo {
  flex: 1;
  justify-content: left;
  padding-left: 100px;
}

.buttons {
  display: flex;
  justify-content: right;
  padding-right: 20px;
  height: 100%;
}

.mode-button {
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 40px;
  height: 100%;

  input {
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}

.buttons input {
  width: 150px;
  height: 100%;
  border: none;
  background-color: rgb(233, 233, 233);
  font-size: 14px;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(221, 221, 221);
  }

  &:active {
    background-color: rgb(233, 233, 233);
  }
}

.rounded-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

.darkMode {
  background-color: rgb(75, 75, 75);

  .buttons input {
    background-color: rgb(75, 75, 75);
    color: rgb(220, 220, 220);

    &:hover {
      background-color: rgb(85, 85, 85);
    }

    &:active {
      background-color: rgb(75, 75, 75);
    }

    &:focus {
      background-color: rgb(75, 75, 75);
    }
  }
}
</style>
