<script setup lang="ts"></script>

<template>
  <div class="about" id="section-2">
    <div class="title">About Me</div>
    <div class="about-container">
      <div class="work-experience">
        <div class="work-title">Work Experience</div>
        <div class="work-container">
          <div class="work">
            <img
              src="https://media.startv.com.tr/star-tv//images/yal.jpg"
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name">Eliar Electronic</div>
              <div class="work-position">Software Developer</div>
            </div>
            <div class="work-date">Feb 2023 - Present</div>
          </div>
          <div class="work">
            <img
              src="https://media.startv.com.tr/star-tv//images/yal.jpg"
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name">Eli Express Logistics</div>
              <div class="work-position">Computer Programming</div>
            </div>
            <div class="work-date">Feb 2023 - Present</div>
          </div>
        </div>
      </div>

      <div class="work-experience">
        <div class="work-title">Education</div>
        <div class="work-container">
          <div class="work">
            <img
              src="https://media.startv.com.tr/star-tv//images/yal.jpg"
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name">Nişantaşı Üniversitesi</div>
              <div class="work-position">Bilgisayar Mühendisliği</div>
            </div>
            <div class="work-date">2020 - 2023</div>
          </div>
          <div class="work">
            <img
              src="https://media.startv.com.tr/star-tv//images/yal.jpg"
              alt="Example Image"
              class="rounded-image"
            />
            <div>
              <div class="company-name">Namık Kemal Üniversitesi</div>
              <div class="work-position">Bilgisayar Programcılığı</div>
            </div>
            <div class="work-date">2018 - 2020</div>
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
}

.title {
  font-size: 50px;
  padding-top: 20vh;
}

.about-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.work-experience {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  border: 2px solid black;
  border-radius: 30px;
  margin-top: 20px;
  padding: 10px;
}

.work-title {
  font-size: 30px;
}

.work-container {
  width: 90%;
}

.work {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid black;
  border-radius: 50px;
  margin: 10px;
  padding: 10px;
}

.rounded-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  margin-left: 20px;
}

.company-name {
  font-size: 22px;
  margin-left: auto;
}

.work-position {
  font-size: 15px;
  color: rgb(80, 80, 80);
  margin-left: auto;
}

.work-date {
  font-size: 15px;
  color: rgb(80, 80, 80);
  margin-left: auto;
  margin-right: 20px;
}

.description {
  font-size: 20px;
  color: rgb(80, 80, 80);
}
</style>
