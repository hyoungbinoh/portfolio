# portfolio 포트폴리오 홈페이지

> ##### javascript vue.js css 등을 활용한 포트폴리오 홈페이지 제작
![스튜디오소나기스크린샷](https://user-images.githubusercontent.com/108599126/222903837-b3c715da-4b3c-496a-98d9-b9402f7a0766.JPG)
##### URL: https://www.studiosonagi.com
   
### 1. 개발목표
* 프론트엔드 엔지니어로서의 자기소개와 기존 포트폴리오 소개를 위해 제작.
* 강의를 통해 배운 vue.js를 활용해보기 위해 포트폴리오 홈페이지 제작.

### 2. 사용기술
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white">

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
</script>
```
### 4. 개선사항
