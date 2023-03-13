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
                <p class="portfolio-title">&#x2705; 제작 목적</p>
                <p class="portfolio-detail">&#x1F449; {{ project.purpose }}</p>
                <p class="portfolio-title">&#x2705; 제작 인원</p>
                <p class="portfolio-detail">&#x1F449; {{ project.person }}</p>
                <p class="portfolio-title">&#x2705; 사용 기술</p>
                <p class="portfolio-detail">&#x1F449; {{ project.skill }}</p>
                <p class="portfolio-title">&#x2705; 기능 구현</p>
                <p 
                v-for="(information, informationindex) in project.information"
                :key="informationindex"
                class="portfolio-detail"
                >
                    &#x1F449; {{ information }}
                </p>
                <p class="portfolio-title">&#x2705; 문제 해결</p>
                <p 
                v-for="(solution, solutionindex) in project.solution"
                :key="solutionindex"
                class="portfolio-detail"
                >
                    &#x1F449; {{ solution }}
                </p>
                <p class="portfolio-title">&#x2705; 보완할 점</p>
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
</template>

<script>
export default {
    name: "Accordion",
    props: ['projects', 'project', 'id'],
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
}
</script>

<style>
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
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
}
.portfolio-detail {
  margin: 0.8rem 0 0 1rem;
  font-size: 1rem;
  line-height: 1.2rem;
  color: black;
}
</style>