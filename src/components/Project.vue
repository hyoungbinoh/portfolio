<template>
    <div class="common-container">
        <h1 class="common-title">Portfolio</h1>
        <div class="portfolio-box">
            <div class="carousel">
                <div
                    v-for="(project, id) in projects"
                    :key="id"
                    :id="id"
                >
                    <button @click="() => prevSlide(id)" class="carousel-btn prev-btn">&lt;</button>
                    <button @click="() => nextSlide(id)" class="carousel-btn next-btn">&gt;</button>
                    <div v-show="currentSlide === project.id"> 
                        <img class="portfolio-img" :src="project.slides[0]"/>
                        <div class="portfolio-box-title">
                          <h2>{{ project.name }}</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
            <router-link class="link-box" to="/project">
              <span class="link-text">프로젝트 페이지 바로가기 &gt;&gt;</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    name: 'Project',
    setup() {
        const store = useStore();
        const projects = store.state.projects;
        const currentSlide = ref(1);


        // 캐러셀(Vue3 방식)
        const nextSlide = (id) => {
        projects.map((project, i) => {
            if(id === i) {
                if(currentSlide.value === projects.length) {
                    currentSlide.value = 1;
                    return;
                }
                currentSlide.value += 1;
            }
            return project
        })
    }

    const prevSlide = (id) => {
        projects.map((project, i) => {
            if(id === i) {
                if(currentSlide.value === 1) {
                    currentSlide.value = projects.length
                    return;
                }
                currentSlide.value -= 1;
            }
        return project
        })
    }

    return {
      currentSlide,
      projects,
      prevSlide, 
      nextSlide
    }
  }
}
</script>

<style scoped>
.portfolio-box {
  width: 80vw;
  margin: 1rem auto 4vw auto;
  border-radius: 1rem;
  text-align: left;
}
.portfolio-box-title {
  width: 80vw;
  height: 45vw;
  font-size: 3vw;
  color: white;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  transform: translate(-50%, -50%);
  opacity: 0;
}
.portfolio-box-title:hover {
  opacity: 1;
  transition: all 1s ease-in-out;
}
.carousel {
  position: relative;
  width: 80vw;
  height: 45vw;
  overflow: hidden;
  margin-top: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.carousel-btn{
  position: absolute;
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
  top: calc(50% - 20px);
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  z-index: 3;
}
.prev-btn{
  left: 0;
}
.next-btn{
  right: 0;
}
.carousel-btn:hover{
  cursor: pointer;
  color: white;
}
.portfolio-img {
  width: 80vw;
  position: absolute;
  z-index: 1;
}
.link-box {
  position: relative;
  display: inline-block;
  width: 80vw;
  height: 4.5rem;
  background: #f1f3f5;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  overflow: hidden;
  z-index: 1;
}
.link-box::before{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #d5d6d7;
  transition: all linear 0.5s;
  transform-origin: 0 0;
  transform: scaleX(0);
  z-index: 0;
}

.link-box:hover::before{
  transform: scaleX(1);
}

.link-text {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
}

</style>