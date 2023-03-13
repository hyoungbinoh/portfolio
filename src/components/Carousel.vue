<template>
    <div class="carousel">
        <button @click="() => prevSlide(id)" class="carousel-btn prev-btn">&lt;</button>
        <button @click="() => nextSlide(id)" class="carousel-btn next-btn">&gt;</button>
        <div
          v-for="(slide, index) in project.slides"
          :key="slide"
          :index="index"
          class="portfolio-slide"
        >
          <div v-show="project.currentSlide === index + 1"> 
              <img class="portfolio-img" :src="slide"/>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: ['projects', 'project', 'id'],
    setup(props) {
    const nextSlide = (id) => {
      props.projects.map((project, i) => {
        if(id === i) {
          if(project.currentSlide === project.slides.length) {
            project.currentSlide = 1;
            return;
          }
          project.currentSlide += 1;
        }
        return project
      })
    }

    const prevSlide = (id) => {
      props.projects.map((project, i) => {
        if(id === i) {
          if(project.currentSlide === 1) {
            project.currentSlide = project.slides.length
            return;
          }
          project.currentSlide -= 1;
        }
        return project
      })
    }

    return {
      prevSlide, 
      nextSlide
    }
    }
}
</script>

<style scoped>
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
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  z-index: 2;
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
}
</style>