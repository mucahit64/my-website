<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="projects" id="section-3">
    <div class="title">Projects</div>
    <div class="projects-container">
      <div class="project">
        <img
          src="https://media.startv.com.tr/star-tv//images/yal.jpg"
          alt="Example Image"
          class="rounded-image"
        />
        <div class="project-text">
          <div class="project-title">Project Title</div>
          <div class="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            doloremque, quia, quidem, quas quod quos quidem quos quod quos
          </div>
        </div>
      </div>

      <div class="project">
        <img
          src="https://media.startv.com.tr/star-tv//images/yal.jpg"
          alt="Example Image"
          class="rounded-image"
        />
        <div class="project-text">
          <div class="project-title">Project Title</div>
          <div class="project-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            doloremque, quia, quidem, quas quod quos quidem quos quod quos
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
}

.title {
  font-size: 50px;
  padding-top: 20vh;
}

.projects-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
}

.project {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border: 2px solid black;
  border-radius: 150px;
}

.rounded-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.project-text {
  width: 350px;
  padding: 20px;
}

.project-title {
  font-size: 35px;
}

.project-description {
  font-size: 20px;
  padding-top: 20px;
  color: rgb(80, 80, 80);
}
</style>
