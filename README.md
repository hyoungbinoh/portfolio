# portfolio 포트폴리오 홈페이지

> ##### javascript vue.js css 등을 활용한 포트폴리오 홈페이지 제작
![스튜디오소나기스크린샷](https://user-images.githubusercontent.com/108599126/222903837-b3c715da-4b3c-496a-98d9-b9402f7a0766.JPG)
##### URL: https://www.hyoungbinoh.github.io
   
### 1. 개발목표
* 프론트엔드 엔지니어로서의 자기소개와 기존 포트폴리오 소개를 위해 제작.
* 강의를 통해 배운 vue.js를 활용해보기 위해 포트폴리오 홈페이지 제작.

### 2. 사용기술
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white">

### 3. 구현기능
* 캐러셀 기능 
<img src="https://user-images.githubusercontent.com/108599126/222903975-d955aeb5-40f7-4cb3-8fb2-35496ab26059.JPG" width="630" height="340">

```
<template>
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
<template>
<script>
export default {
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
   }
}
</script>
```

* 아코디언 기능 
<img src="https://user-images.githubusercontent.com/108599126/222918669-40acd172-a6b8-4a04-ba04-0c8a3e9a90e6.JPG" width="630" height="340">
```
<template>
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
<template>
<script>
import { ref } from 'vue';
export default {
   setup() {
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
```

### 4. 개선사항
* 캐러셀 모션 추가 필요
* 캐러셀, 아코디언 컴포넌트 분리 필요
