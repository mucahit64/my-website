<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="social-icons">
      <div class="social-icon">
        <a href="https://www.linkedin.com/in/mücahit-yaman-4b6b4823b/">
          <img
            src="https://media.startv.com.tr/star-tv//images/yal.jpg"
            alt="Example Image"
            class="rounded-image"
          />
        </a>
      </div>

      <div class="social-icon">
        <a href="https://www.linkedin.com/in/mücahit-yaman-4b6b4823b/">
          <img
            src="https://media.startv.com.tr/star-tv//images/yal.jpg"
            alt="Example Image"
            class="rounded-image"
          />
        </a>
      </div>

      <div class="social-icon">
        <a href="https://www.linkedin.com/in/mücahit-yaman-4b6b4823b/">
          <img
            src="https://media.startv.com.tr/star-tv//images/yal.jpg"
            alt="Example Image"
            class="rounded-image"
          />
        </a>
      </div>

      <div class="social-icon">
        <a href="https://www.linkedin.com/in/mücahit-yaman-4b6b4823b/">
          <img
            src="https://media.startv.com.tr/star-tv//images/yal.jpg"
            alt="Example Image"
            class="rounded-image"
          />
        </a>
      </div>
    </div>

    <div class="footer-text">© 2023 Mücahit Yaman</div>

    <div class="copyright">
      <div class="copyright-text">All Rights Reserved</div>
    </div>
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

.copyright {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-text {
  font-size: 20px;
  padding-top: 20px;
  font-weight: bold;
  color: rgb(116, 116, 116);
}

.copyright-text {
  font-size: 12px;
  padding-top: 20px;
  font-weight: bold;
  color: rgb(116, 116, 116);
}

.rounded-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
