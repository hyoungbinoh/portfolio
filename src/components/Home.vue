<template>
  <div>
    <div class="home-bg"/>
    <Main />
    <About />
    <Story />
    <Skill />
    <Project />
  </div>
</template>

<script>
import Main from './Main.vue'
import About from './About.vue'
import Story from './Story.vue'
import Skill from './Skill.vue'
import Project from './Project.vue'

export default {
    name: 'Home',
    components: {
        Main,
        About,
        Story,
        Skill,
        Project
    }
}
</script>
<style scoped>
.home-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 0;
  background-image: url('../assets/img/hyoungbin.JPG');
  background-position: center;
  background-size: cover;
}
</style>