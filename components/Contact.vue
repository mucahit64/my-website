<script setup lang="ts">
import Footer from "~/components/Footer.vue";

const { dark } = useQuasar();
</script>

<template>
  <div class="contact" :class="{ 'dark-mode': dark.isActive }" id="section-4">
    <div class="title" :class="{ 'dark-mode': dark.isActive }">İletişim</div>
    <div class="contact-container" :class="{ 'dark-mode': dark.isActive }">
      <div class="contact-form" :class="{ 'dark-mode': dark.isActive }">
        <form action="https://formspree.io/f/xqkqgjwq" method="POST" class="form">
          <div class="form-title" :class="{ 'dark-mode': dark.isActive }">İletişime Geç!</div>
          <QInput
            class="pb-3"
            model-value=""
            type="text"
            id="name"
            name="name"
            placeholder="İsim"
            required
            
            outlined
            dense
          />
          <QInput
            class="pb-3"
            model-value=""
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            outlined
            dense
          />
          <QInput
            class="pb-3"
            model-value=""
            type="textarea"
            maxlength="100"
            id="subject"
            name="subject"
            placeholder="Konu"
            required
            outlined
            dense
          />
          <QBtn type="submit" color="primary" label="Gönder" class="form-button"/>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style lang="postcss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: black;

  &.dark-mode {
    background-color: #212121;
    color: white;
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
  Arial,
  sans-serif;

  &.dark-mode {
    color: rgb(210, 210, 210);
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  height: 100vh;
  width: 80%;

 
  &.dark-mode {
    background-color: #212121;
    color: white;
    min-width: 80%;
  }
}

.contact-form {
  border-radius: 30px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(233, 233, 233);
  color: black;
 
  &.dark-mode {
    background-color: #383838;
    color: white;
  }

  @media (max-width: 600px) {
  }
}


.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-title {
  padding-bottom: 10px;
  font-size: 24px;
  text-align: center;
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
    font-size: 16px;
  }
}

label {
  margin-bottom: 5px;
  font-size: 16px;
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
    font-size: 12px;
  }
}

.footer {
  height: 35vh;

  @media (max-width: 600px) {
    height: 20vh;
  }
}
</style>
