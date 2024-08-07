<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>

<template>
  <div class="contact" id="section-4">
    <div class="title">Contact</div>
    <div class="contact-container">
      <div class="contact-form">
        <form>
          <h2>Send me a message!</h2>
          <div class="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.title {
  font-size: 50px;
  padding-top: 20vh;
}

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.contact-form {
  border: 2px solid black;
  border-radius: 30px;
  padding: 20px;
  width: 25%;
  margin: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 350px;
  max-height: 160px;
  min-width: 250px;
  min-height: 100px;
}

button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 250px;
}
</style>
