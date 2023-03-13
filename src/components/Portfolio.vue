<template>
  <div class="portfolio-container">
    <h1 class="portfolio-container-title">Portfolio</h1>
    <div 
      class="portfolio-box"
      v-for="(project, id) in projects"
      :key="id"
      :id="id"
    >
      <h2 class="portfolio-box-title">{{project.id}}. {{ project.name }}</h2>
      <!-- 캐러셀 -->
      <Carousel 
        :projects="projects"
        :project="project"
        :id="id"
      />
      <Accordion
        :projects="projects"
        :project="project"
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Carousel from './Carousel.vue'
import Accordion from './Accordion.vue'

export default {
  name: 'Portfolio',
  components: {
    Carousel,
    Accordion
  },
  setup() {
    const store = useStore();
    const projects = store.state.projects

    return {
      projects
    }
  }
}
</script>

<style scoped>
.portfolio-container {
  position: relative;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.portfolio-container-title {
  font-size: 2.5rem;
  color: black;
  margin: 1rem auto;
}
.portfolio-box {
  width: 80vw;
  margin: 0 auto 4vw auto;
  border-radius: 1rem;
  text-align: left;
}
.portfolio-box-title {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: black;
}
</style>