<template>
  <div class="portfolio-container">
    <h1 class="portfolio-container-title">Portfolio</h1>
    <div 
      class="portfolio-box"
      v-for="(project, id) in projects"
      :key="id"
      :id="id"
    >
      <h3 class="portfolio-box-title">{{project.id}}. {{ project.name }}</h3>
      <!-- 캐러셀 -->
      <div class="carousel">
        <button @click="() => prevSlide(id)" class="carousel-btn prev-btn">&lt;</button>
        <button @click="() => nextSlide(id)" class="carousel-btn next-btn">&gt;</button>
        <div>
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
      </div>
      <!-- 아코디언 -->
      <div class="accordion">
        <button @click="() => toggle(id)" v-if="!project.open" class="accordion-btn"><span>상세정보</span><span>&#9660;</span></button>
        <button @click="() => toggle(id)" v-if="project.open" class="accordion-btn"><span>상세정보</span><span>&#9650;</span></button>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
        >
          <div v-if="project.open" class="portfolio-link-box">
            <div class="portfolio-link-wrap">            
              <a :href="project.siteUrl" class="portfolio-link">사이트 바로가기</a>
              <a :href="project.githubUrl" class="portfolio-link">깃허브 바로가기</a>
            </div>
            <p class="portfolio-title">&#x2705; 사용기술</p>
            <p class="portfolio-detail">&#x1F449; {{ project.skill }}</p>
            <p class="portfolio-title">&#x2705; 기능구현</p>
            <p 
              v-for="(information, informationindex) in project.information"
              :key="informationindex"
              class="portfolio-detail"
            >
              &#x1F449; {{ information }}
            </p>
            <p class="portfolio-title">&#x2705; 개선사항</p>
            <p 
              v-for="(improvement, improvementindex) in project.improvement"
              :key="improvementindex"
              class="portfolio-detail"
            >
              &#x1F449; {{ improvement }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Portfolio',
  methods: {
    // 아코디언(Vue2 방식)
    toggle: function (id) {
      this.projects = this.projects.map((project, i)=>{
        if(id === i) {
          project.open = !project.open
        }
        return project;
      })
    },
    beforeEnter: function (el) {
      el.style.height = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function (el) {
      el.style.height = "0";
    }
  },
  setup() {
    const projects = ref([
      {
        id:1,
        name: "Studio Sonagi Project",
        slides: [require("@/assets/img/studiomain.png"), require("@/assets/img/studiofilmography.png"), require("@/assets/img/studioportfoliodetail.png"), require("@/assets/img/studiologin.png"), require("@/assets/img/studiofilmoadmingraphy.png"), require("@/assets/img/studioadmindetail.png")],
        siteUrl: "https://www.studiosonagi.com",
        githubUrl: "https://github.com/hyoungbinoh/studiosonagi",
        skill: "JavaScript, React, Three.js, Styled-Components, CSS",
        information: ["관리자 페이지 구현", "예약 페이지 구현", "포트폴리오, 3D 샘플 상세페이지 구현", "이미지 및 정보 CRUD 기능"],
        improvement: ["관리자 수정페이지 수정 시 관리자페이지로 이동 필요"],
        open: false,
        currentSlide: 1
      },
      {
        id:2,
        name: "StepWAR Project",
        slides: [require("@/assets/img/stepwarmain.png"), require("@/assets/img/stepwarslider.png"), require("@/assets/img/stepwarproperty.png")],
        siteUrl: "http://hyoungbin.shop",
        githubUrl: "https://github.com/hyoungbinoh/M2E-prototype",
        skill: "JavaScript, React, Three.js, Styled-Components, CSS",
        information: ["반응형 웹페이지 구현", "배경 이미지 모션 효과", "Three.js를 활용한 3D 이미지 컨트롤 기능", "무한 캐러셀 기능"],
        improvement: ["상세페이지 제작 필요", "메모리를 많이 차지하여 느려지는 현상 개선 필요"],
        open: false,
        currentSlide: 1
      },
      {
        id:3,
        name: "Portfolio Project",
        slides: [require("@/assets/img/hyoungbinmain.png"), require("@/assets/img/hyoungbinslider.png"), require("@/assets/img/hyoungbinaccordion.png")],
        siteUrl: "https://hyoungbinoh.github.io/portfolio/",
        githubUrl: "https://github.com/hyoungbinoh/portfolio",
        skill: "JavaScript, Vue.js, CSS",
        information: ["반응형 웹페이지 구현", "사진 캐러셀 기능", "상세정보 아코디언 기능"],
        improvement: ["캐러셀 모션 추가 필요", "추가적인 모션 필요"],
        open: false,
        currentSlide: 1
      },
    ])

    // 캐러셀(Vue3 방식)
    const nextSlide = (id) => {
      projects.value.map((project, i) => {
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
      projects.value.map((project, i) => {
        if(id === i) {
          if(project.currentSlide === 1) {
            project.currentSlide = project.slides.length
            return;
          }
          project.currentSlide -= 1;
        }
      })
    }

    return {
      projects,
      prevSlide, 
      nextSlide
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
  font-size: 1.5rem;
  color: black;
}
.carousel {
  position: relative;
  width: 80vw;
  height: 45vw;
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.carousel-btn{
  position: absolute;
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
  top: calc(50% - 20px);
  background-color: transparent;
  border: none;
  color: rgba(255,255,255,0.5);
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
.accordion {
  width: calc(100% - 2rem);
  background: #f1f3f5;
  padding: 1rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.accordion-btn {
  width: 100%;
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
}
.accordion-btn:hover {
  cursor: pointer;
}
.portfolio-link-box {
  padding: 1rem 0px;
}
.portfolio-link-wrap {
  display: flex;
}
.portfolio-link {
  font-size: 1rem;
  text-decoration: none;
  color: black;
  padding: .5rem;
  margin-right: 1rem;
  border: 1px solid black;
  border-radius: 0.3rem;
  word-break: keep-all;
  text-align: center;
}
.portfolio-link:hover {
  background: #dee2e6;
}
.portfolio-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
}
.portfolio-detail {
  font-size: 1rem;
  color: black;
  text-indent: 1rem;
}
</style>