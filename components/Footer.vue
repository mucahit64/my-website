<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="social-icons">
      <div class="social-icon">
        <a href="https://www.linkedin.com/in/mucahit64/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 @media (min-width: 600px) { h-8 w-8 }"
          >
            <path
              fill="#747474"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
        </a>
      </div>

      <div class="social-icon">
        <a href="https://github.com/mucahit64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 @media (min-width: 600px) { h-8 w-8 }"
            viewBox="0 0 24 24"
          >
            <path
              fill="#747474"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </a>
      </div>

      <div class="social-icon">
        <a href="mailto:mucahit.yaman@hotmail.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 @media (min-width: 600px) { h-8 w-8 }"
            viewBox="0 0 32 32"
          >
            <path
              fill="#747474"
              d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 25.5 5zM28 10.403l-12 6.461l-12-6.461V9.5A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5zM4 12.674l11.526 6.207a1 1 0 0 0 .948 0L28 12.674V22.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="text-4 pt-3 font-bold text-gray-500">© 2023 Mücahit Yaman</div>
    <div class="text-3 pt-3 font-bold text-gray-500">Tüm Hakları Saklıdır</div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35vh;
  background-image: url("../pictures/footer.png");
  background-size: cover;
  color: white;


  @media (max-width: 600px) {
    height: 30vh;
  }
}

.social-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.social-icon {
  padding: 0 10px;
}
</style>
