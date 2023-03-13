# portfolio 포트폴리오 홈페이지

> ##### javascript vue.js Vuex 등을 활용한 포트폴리오 홈페이지 제작
![스튜디오소나기스크린샷](https://user-images.githubusercontent.com/108599126/222919860-f9372eac-a532-4138-a584-7d2d00ee8b74.JPG)
##### URL: https://hyoungbinoh.github.io
   
### 1. 개발목표
* 프론트엔드 엔지니어로서의 자기소개와 기존 포트폴리오 소개를 위해 제작.
* 강의를 통해 배운 vue.js를 활용해보기 위해 포트폴리오 홈페이지 제작.
<br></br>

### 2. 제작인원
* 프론트엔드 개발자 1명(본인)
<br></br>

### 3. 사용기술
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white"> <img src="https://img.shields.io/badge/Vuex-4FC08D?style=flat&logo=vue.js&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white">
<br></br>

### 4. 구현기능
* Vuex를 활용한 전역 상태 관리
<img src="https://user-images.githubusercontent.com/108599126/222903975-d955aeb5-40f7-4cb3-8fb2-35496ab26059.JPG" width="630" height="340">

```
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
```

* Axios를 활용한 서버와의 비동기 통신(목서버 활용)
<img src="https://user-images.githubusercontent.com/108599126/224748592-04158740-a401-448a-bad9-e983a1abee26.JPG" width="630" height="340">

```
setup() {
   const skills = ref([]);

   const getSkill = async() => {
      try {
         const res = await axios.get('https://c0e36c31-e50a-49f7-b76a-c4fca97c9858.mock.pstmn.io/skills')
         skills.value = res.data;
      } catch (err) {
         console.log(err)
      }
   }

   getSkill()

   return{
      skills
   }
}
```

* 아코디언 구현
<img src="https://user-images.githubusercontent.com/108599126/222918669-40acd172-a6b8-4a04-ba04-0c8a3e9a90e6.JPG" width="630" height="340">

```
setup(props){
   const toggle = (id) => {
      props.projects.map((project, i)=>{
         if(id === i) {
            project.open = !project.open
         }
         return project
      })
   }

   const beforeEnter = (el) => {
      el.style.height = "0";
   }

   const enter = (el) => {
      el.style.height = el.scrollHeight + "px";
   }

   const beforeLeave = (el) => {
      el.style.height = el.scrollHeight + "px";
   }

   const leave = (el) => {
      el.style.height = "0";
   }

   return{
      toggle,
      beforeEnter,
      enter,
      beforeLeave,
      leave
   }
}
```

### 5. 문제해결
* v-for로 생성된 캐러셀과 아코디언이 버튼을 누르면 동시에 작동하는 문제가 발생하였고, 이에 초기값을 각각의 객체 안에 넣어주어 문제를 해결하였습니다.
<br></br>

### 6. 보완할 점
* Postman 목서버를 대체할 서버 제작이 필요
<br></br>
